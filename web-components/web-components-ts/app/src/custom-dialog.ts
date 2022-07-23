class CustomDialog extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode:'open'})

    this.shadowRoot?.append(dialog.content.cloneNode(true))

    
  }
}

customElements.define('custom-dialog', CustomDialog)