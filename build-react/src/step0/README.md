jsx では XML 構文を js に変換するので、HTML のように書ける

```jsx
const element = <h1 title="foo">Hello</h1>;
```

React では、createElement のときにこういう構造になる

```jsx
const element = React.createElement('h1', { title: 'foo' }, 'Hello');
```

擬似的に element を使ってプロパティで表現する

```js
const element = {
	type: 'h1',
	props: {
		title: 'foo',
		children: 'Hello'
	}
};
```

最終的に DOM を append したい container を指定する

```js
const container = document.getElementById('app');

const node = document.createElement(element.type);
node['title'] = element.props.title;

const text = document.createTextNode('');
text['nodeValue'] = element.props.children;

node.appendChild(text);
container.appendChild(node);
```

node を作る
タグは type から h1 とする
attribute は props の title を使う

```js
const node = document.createElement(element.type);
node['title'] = element.props.title;
```

innerText じゃなくて textNode を作るようにすると、確実に text タイプの node が作れるので createTextNode を使う
nodeValue、この場合は textNode の value を props の children とする

```js
const text = document.createTextNode('');
text['nodeValue'] = element.props.children;
```

append して終わり

```js
node.appendChild(text);
container.appendChild(node);
```
