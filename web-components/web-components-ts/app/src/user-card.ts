
class UserCard extends HTMLElement {

  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot?.innerHTML = `
      <div>Name:
        <slot name="username"></slot>
      </div>
      <div>Birthday:
        <slot name="birthday"></slot>
      </div>
    `;
  }

}

customElements.define("user-card", UserCard);