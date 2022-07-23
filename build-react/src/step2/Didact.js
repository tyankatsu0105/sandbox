/**
 * textNodeの場合のcreateElement
 * @param {*} text
 */
const createTextElement = (text) => ({
	type: 'TEXT_ELEMENT',
	props: {
		nodeValue: text,
		children: []
	}
});

/**
 *
 * @param {*} type
 * @param {*} props
 * @param  {...any} children
 */
const createElement = (type, props, ...children) => ({
	type,
	props: {
		...props,
		children: children.map((child) =>
			typeof child === 'object' ? child : createTextElement(child)
		)
	}
});

const render = (element, container) => {
	const dom =
		element.type === 'TEXT_ELEMENT'
			? document.createTextNode('')
			: document.createElement(element.type);

	const isProperty = (key) => key !== 'children';

	Object.keys(element.props)
		.filter(isProperty)
		.forEach((propsName) => (dom[propsName] = element.props[propsName]));

	element.props.children.forEach((child) => render(child, dom));

	container.appendChild(dom);
};

export const Didact = {
	createElement,
	render
};
