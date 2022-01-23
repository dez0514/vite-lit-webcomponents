import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
// import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
// 图片 // unsafeHtml // unsafeCss

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
        width: 1em;
        height: 1em;
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

  @property({ type: Number})
  size = 10
  
  render() {
    return html`
    <svg xmlns="http://www.w3.org/1999/xlink" class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024" style="font-size:40px">
       <use id="use" xlink:href="../iconfont/icon.svg#icon-user"></use>
    </svg>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'web-icon': WebIcon
  }
}
