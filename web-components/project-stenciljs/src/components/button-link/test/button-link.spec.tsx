import { newSpecPage } from '@stencil/core/testing';
import { ButtonLink } from '../button-link';

describe('button-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ButtonLink],
      html: `<button-link></button-link>`,
    });
    expect(page.root).toEqualHtml(`
      <button-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </button-link>
    `);
  });
});
