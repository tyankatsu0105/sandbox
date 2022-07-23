import { html, render, Hybrids } from 'hybrids';
import styles from './ButtonLink.css';


interface Host extends HTMLElement {
  href: string
}


export const ButtonLink: Hybrids<Host> = {
  href: '',
  render: render((host) => html`
  <a href="${host.href}">
  aaaaaaaa
  </a>
`.style(styles), {
  shadowRoot: false
}),
};