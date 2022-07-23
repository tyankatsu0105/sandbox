render 機能を作る

```js
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
```

element は

```js
// const element = <h1 title="foo">Hello</h1>
const element = {
	type: 'h1',
	props: {
		title: 'foo',
		children: 'Hello'
	}
};
```

で、container には root になる要素が入る。例えば document.getElementById('root')で`<div id="root"></div>`みたいな。

この object は、今回は@babel/plugin-transform-react-jsx を使って生成する。

```js
const render = (element, container) => {
	const dom =
		element.type === 'TEXT_ELEMENT'
			? document.createTextNode('')
			: document.createElement(element.type);
};
```

dom を生成する。
textNode の場合は createTextElement によって

```js
{
	type: 'TEXT_ELEMENT',
	props: {
		nodeValue: text,
		children: []
	}
}
```

ってなるので、type によって textNode を作成するか elementNode を作るか決定する。

```js
const isProperty = (key) => key !== 'children';
```

filter に使うテスト関数。
props の中を精査する際に、children 以外を取得する。

```js
{
	type: 'h1',
	props: {
		title: 'foo',
		id: 'bar',
		children: [
			{...}
		]
	}
}
```

だったら title と id を取得する。

```js
Object.keys(element.props)
	.filter(isProperty)
	.forEach((propsName) => (dom[propsName] = element.props[propsName]));
```

例えば

```js
const element = {
	type: 'h1',
	props: {
		title: 'foo',
		id: 'bar',
		children: [
			{...}
		]
	}
}

const dom = document.createElement('h1')

let acc;

acc = Object.keys(element.props)
// ['title', 'id', 'children']


acc = Object.keys(element.props).filter(isProperty)
// ['title', 'id']

acc = Object.keys(element.props).filter(isProperty).forEach((propsName) => (dom[propsName] = element.props[propsName]));
// dom.title = 'foo'
// dom.id = 'bar'
```

```js
container.appendChild(dom);
```

最終的に作られた dom を container に追加して終わり。

ちなみに、class を指定したい場合に`className`を指定するのは、Node['class']が指定できないため。
これを使う。https://developer.mozilla.org/ja/docs/Web/API/Element/className

それでは時系列に解説。

```jsx
const element = (
	<div id="foo">
		<h1>Hello World</h1>
	</div>
);

const container = document.getElementById('app');
Didact.render(element, container);
```

は、

```js
const element = Didact.createElement(
	'div',
	{
		id: 'foo'
	},
	Didact.createElement('h1', null, 'Hello World')
);

const container = document.getElementById('app');
Didact.render(element, container);
```

になる。

```js
const element = Didact.createElement(
	'div', // type
	{
		id: 'foo' // props.class
	},
	Didact.createElement('h1', null, 'Hello World') // children typeとprops以外は...childrenで配列になる
);
```

```js
const element = {
	type: 'div,
	props: {
		id: 'foo',
		children: [
			{
				type: 'h1',
				props: null,
				children: [
					{
						type: 'TEXT_ELEMENT',
						props: {
							nodeValue: 'Hello World',
							children: []
						}
					}
				]
			}
		]
	}
}

const container = document.getElementById('app');

{
	const dom1 = document.createElement('div');
	dom1['id'] = 'foo';
	container.appendChild(dom1)

	const dom2 = document.createElement('h1');
	dom1.appendChild(dom2)

	const dom3 = document.createTextNode('');
	dom3['nodeValue'] = 'Hello World';
	dom2.appendChild(dom3)
}
```
