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
        /* fill: currentColor; */
        fill: blue;
    }
  `
  @property({type: String})
  name = ''

  @property({type: String})
  color = ''

  @property({type: String})
  path = ''

  @property({ type: Number || String })
  size = 30
  
  render() {
    const svg = `<use id="use" xlink:href="/src/iconfont/icon.svg#icon-${this.name}"></use>`
    // const svg = `
    //   <image xlink:href="http://f10.baidu.com/it/u=107851725,1461296661&fm=76" width="100%" height="100%"></image>
    // `
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
