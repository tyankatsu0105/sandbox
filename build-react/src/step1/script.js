// const element = (
//   <div id="foo">
//     <a>bar</a>
//     <b />
//   </div>
// )
// const container = document.getElementById("root")
// ReactDOM.render(element, container)

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

const Didact = {
	createElement
};

console.log(
	Didact.createElement(
		'div',
		{ id: 'foo' },
		Didact.createElement('a', null, 'text'),
		Didact.createElement('b')
	)
);
