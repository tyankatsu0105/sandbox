import { newE2EPage } from '@stencil/core/testing';

describe('button-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<button-link></button-link>');

    const element = await page.find('button-link');
    expect(element).toHaveClass('hydrated');
  });
});
