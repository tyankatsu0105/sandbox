class CustomMenu extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode:'open'})

    this.shadowRoot?.append(tmpl.content.cloneNode(true))

    const slotTitle = this.shadowRoot?.querySelector('slot[name="title"') as HTMLElement
    slotTitle.onclick = () => {
      this.shadowRoot?.querySelector('.menu')?.classList.toggle('closed')
    }

    
  }
}

customElements.define('custom-menu', CustomMenu)