import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('web-button')
export class WebButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }
  `
  @property({ type: String })
  text = '按钮'

  @property({ type: String })
  disable = false

  handleClick() {
    console.log(1234)
  }

  render() {
    // <button part="button">${this.text}</button>
    return html`
    <div @click="${this.handleClick}">${this.text}</div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'web-button': WebButton
  }
}
