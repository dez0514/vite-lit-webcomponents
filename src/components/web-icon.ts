import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
@customElement('web-icon')
export class WebIcon extends LitElement {
  static styles = css`
    :host {
        font-size:inherit;
        display:inline-block;
        transition:.3s;
    }
    .icon {
        overflow: hidden;
        display:block;
        margin: auto;
        fill: var(--themeColor, #42b983);
    }
  `
  @property({ type: String })
  name = ''

  @property({ type: String })
  color = ''

  @property({ type: String })
  path = ''

  @property({ type: Number || String })
  size = 30

  render() {
    let svg = ''
    if (this.name) {
      svg = `<use id="use" xlink:href="/src/iconfont/icon.svg#icon-${this.name}"></use>`
    } else if (this.path) {
      svg = `<image xlink:href="${this.path}" width="100%" height="100%"></image>`
    }
    return html`
      <svg class="icon" width=${this.size} height=${this.size} xmlns="http://www.w3.org/2000/xlink" viewBox="0 0 100 100">
        ${unsafeSVG(svg)}
      </svg>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'web-icon': WebIcon
  }
}
