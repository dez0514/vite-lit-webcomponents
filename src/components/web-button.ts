import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('web-button')
export class WebButton extends LitElement {
  static styles = css`
    :host {
      position:relative; 
      display:inline-flex; 
      padding: .4em .8em;
      box-sizing:border-box; 
      vertical-align: middle;
      overflow:hidden; 
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
    :host([type="primary"]){ 
      color: #fff; 
      background:var(--themeBackground,var(--themeColor,#42b983));
      border-color: var(--themeColor, #42b983);
    }
    :host([type="danger"]){ 
      color: #fff; 
      background: var(--themeBackground,var(--dangerColor,#ff7875));
      border-color: var(--dangerColor, #ff7875);
    }
    :host([type="dashed"]){ 
      border-style: dashed;
    }
    :host([type="text"]){ 
      border: none;
      padding: 0;
      color:var(--themeColor,#42b983);
    }
    :host(:not([type="primary"]):not([type="danger"]):not([disabled]):hover),
    :host(:not([type="primary"]):not([type="danger"]):focus-within),
    :host([type="text"][focus]){ 
      color:var(--themeColor,#42b983); 
      border-color: var(--themeColor,#42b983); 
    }
    ::slotted(web-icon){
      width: 14px;
      height: 14px;
    }
    :host(:empty){
      display:  none;
    }
  `

  @property({ type: String })
  type = 'default' // primary, dashed , danger, text

  @property({ type: Boolean })
  plain = false

  @property({ type: Boolean })
  round = false

  @property({ type: Boolean })
  circle = false

  @property({ type: Boolean })
  disabled = false

  @property({ type: String })
  icon = ''

  render() {
    return html`
      <slot></slot>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'web-button': WebButton
  }
}
