import { Didact } from './Didact.js';
/** @jsx Didact.createElement */

const element = Didact.createElement(
	'div',
	{
		id: 'foo'
	},
	Didact.createElement('h1', null, 'Hello World')
);
const container = document.getElementById('app');
Didact.render(element, container);
