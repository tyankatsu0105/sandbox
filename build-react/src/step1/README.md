これを
```jsx
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
)
```

jsで組み立てていきたい

これを参考に作る
```js
// const elemet = <h1 title="foo">Hello</h1>
const element = {
	type: 'h1',
	props: {
		title: 'foo',
		children: 'Hello'
	}
};
```

- type
	- elementの種類
		- h1とかpとか
		- elementNode以外にも来る可能性があるので、`'TEXT_ELEMENT'`とか
	- props
		- プロパティ
		- href: 'google.com'とか
	- children
		- elementの中にくるもの
		- `<div>text <p>paragraph</p></div>`とか複数来る可能性があるのでchildren


```js
const createElement = (type, props, ...children) => ({
	type,
	props: {
		...props,
		children: children.map((child) =>
			typeof child === 'object' ? child : createTextElement(child)
		)
	}
});
```

関数にされた。
childrenのところはelement以外にも数値や文字列が来る可能性があるので（https://developer.mozilla.org/ja/docs/Web/API/Node/nodeType）、一旦elementじゃない場合はtextとして処理させている。

```js
const createTextElement = (text) => ({
	type: 'TEXT_ELEMENT',
	props: {
		nodeValue: text,
		children: []
	}
});
```

textnodeを作る関数。
childrenいらないと思うけど、ライブラリ作成ではパフォーマンスよりもシンプルさを求めるので、createElementとの統一性のためにchildren指定して、中には絶対何も来ないので空配列入れてる。

```js
const Didact = {
	createElement
};
```

ライブラリみたいにするためにオブジェクトのメソッドとして使う。
Reace.createElementを真似て、Didact.createElementにしている。
https://ejje.weblio.jp/content/didact