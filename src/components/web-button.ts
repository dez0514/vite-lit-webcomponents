import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('web-button')
export class WebButton extends LitElement {
  static styles = css`
    :host {
        display: inline-block;
    }
  `


  @property({ type: Number })
  count = 0

  render() {
    return html`
    <button part="button">按钮</button>
    <div>按钮</div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'web-button': WebButton
  }
}
