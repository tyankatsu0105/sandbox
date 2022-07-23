import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'button-link',
  styleUrl: 'button-link.css',
  shadow: true,
})
export class ButtonLink {
  @Prop() href: string

  render() {
    return (
      <a href={this.href} target="_blank">
        <slot></slot>
      </a>
    );
  }
}
