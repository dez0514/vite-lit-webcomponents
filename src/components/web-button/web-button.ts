import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import '../web-loading/web-loading'
import '../web-icon/web-icon'
/**
 * Button.
 */
@customElement('web-button')
export class WebButton extends LitElement {
  static styles = css`
    :host {
      overflow: hidden;
      position:relative; 
      display:inline-flex; 
    }
    .web-button {
      position:relative; 
      flex: 1;
      display:inline-flex; 
      box-sizing:border-box; 
      vertical-align: middle;
      overflow:hidden; 
      padding: .4em .8em;
      align-items:center;
      justify-content: center;
      border:1px solid var(--borderColor, rgba(0,0,0,.2)); 
      font-size: 14px; 
      color: var(--fontColor, #333);  
      border-radius: var(--borderRadius, .25em); 
      transition: background-color .3s, box-shadow .3s, border-color .3s, color .3s;
      user-select:none;
      cursor: pointer;
    }
    :host([block]) {
      display: flex; 
    }
    :host([circle]) .web-button {
      border-radius: 50%;
      padding: .6em .6em;
    }
    :host([round]) .web-button {
      border-radius: 20px;
      padding: .4em 1em;
    }
    :host([type="primary"]) .web-button { 
      color: #fff; 
      background:var(--themeBackground,var(--themeColor,#42b983));
      border-color: var(--themeColor, #42b983);
    }
    :host([type="danger"]) .web-button { 
      color: #fff; 
      background: var(--themeBackground,var(--dangerColor,#ff7875));
      border-color: var(--dangerColor, #ff7875);
    }
    :host([type="dashed"]) .web-button { 
      border-style: dashed;
    }
    :host([type="text"]) .web-button { 
      border: none;
      padding: 0;
      color:var(--themeColor,#42b983);
    }
    :host(:not([type="primary"]):not([type="danger"]):not([disabled])) .web-button:hover,
    :host(:not([type="primary"]):not([type="danger"])) .web-button:focus-within,
    :host([type="text"][focus]) .web-button { 
      color:var(--themeColor,#42b983); 
      border-color: var(--themeColor,#42b983); 
    }
    :host(:not([type="primary"]):not([type="danger"]):not([disabled])) .web-button:hover web-icon {
      fill: var(--themeColor,#42b983);
    }
    web-loading {
      margin-right: 0.2em;
      color: inherit;
    }
    :host([loading]:empty) web-loading {
      margin-right: 0;
    }
    :host([disabled]) ,:host([loading])  {
      cursor: not-allowed;
    }
    :host([disabled]) .web-button ,:host([loading]) .web-button {
      pointer-events: none;
      opacity:.6; 
    }
    :host(:not([icon]):not([loading]):empty){
      display:  none;
    }
    ::slotted(*){
      color: pink;
    }
  `
  /** 
   * button type
  */
  @property({ type: String })
  type = 'default' // primary, dashed , danger, text
  /** 
   * button round shape
  */
  @property({ type: Boolean })
  round = false
  /** 
   * button round cicle
  */
  @property({ type: Boolean })
  circle = false
  /** 
   * button disable
  */
  @property({ type: Boolean })
  disabled = false
  /** 
   * button icon
  */
  @property({ type: String })
  icon = ''
  /** 
   * button loading
  */
  @property({ type: Boolean })
  loading = false
  /** 
   * button block
  */
  @property({ type: Boolean })
  block = false

  render() {
    return html`
    <div class='web-button'>
      ${this.loading ? unsafeHTML('<web-loading></web-loading>') : ''}
      ${this.icon !=='' && !this.loading ? unsafeHTML(`<web-icon name="${this.icon}" color="inherit"></web-icon>`) : ''}
      <slot></slot>
    </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'web-button': WebButton
  }
}
