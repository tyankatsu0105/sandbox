import { Didact } from './Didact.js';

/** @jsx Didact.createElement */
const element = (
	<div id="foo">
		<h1>Hello World</h1>
	</div>
);
const container = document.getElementById('app');
Didact.render(element, container);
