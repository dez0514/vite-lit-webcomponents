import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('web-switch')
export class WebSwitch extends LitElement {
    constructor() {
        super();
    }
    static styles = css`
        :host{ 
            display:inline-block; 
            -webkit-tap-highlight-color: transparent;
        }
        :host([disabled]){ 
            pointer-events: none; 
            opacity:.6; 
        }
        :host([disabled]) label{ 
            pointer-events: all;  
            cursor: not-allowed; 
        }
        #switch{
            position:absolute;
            clip:rect(0,0,0,0);
        }
        :host(:focus-within) label::after,:host(:active) ::after{ 
            background:var(--themeColor,#42b983);
        }
        :host(:focus-within) label{ 
            /*box-shadow: 0 0 10px rgba(0,0,0,0.1); */
        }
        :host(:focus-within) #switch,:host(:active) #switch{
            z-index: 2
        }
        label{
            cursor:pointer;
            display:flex;
            width:2.4em;
            height:1.2em;
            padding:.125em;
            border-radius:1.2em;
            background:#eee;
            transition:.3s width,.3s height,.3s background-color;
        }
        label::before{
            content:'';
            flex:0;
            transition:.2s cubic-bezier(.12, .4, .29, 1.46) flex;
        }
        label::after{
            content:'';
            width:.4em;
            height:.4em;
            border-radius:1.2em;
            border:.4em solid #fff;
            background:#fff;
            transition:.3s background, .3s padding,.3s width,.3s height,.3s border-radius,.3s border;
            box-shadow: 0 2px 4px 0 rgba(0,35,11,0.2);
        }
        label:active::after{
            padding:0 .3em;
        }
        /* #switch:checked+label {
            background:var(--themeBackground, var(--themeColor, #42b983));
        }
        #switch:checked+label::before{
            flex:1;
        } */
        label.checked {
            background:var(--themeBackground, var(--themeColor, #42b983));
        }
        label.checked::before{
            flex:1;
        }

  `
    @property({ type: Boolean })
    value = false

    // @property({ type: String })
    // color = ''

    @property({ type: Number || String })
    size = 16

    render() {
        return html`
            <input type="checkbox" id="switch" @change="${this._handleSwitch}"/>
            <label class="${this.value ? 'checked':''}" for="switch" style="font-size:${this.size}px"></label>
        `
    }

    private _handleSwitch() {
        this.value = !this.value
        console.log(this.value)
        this.dispatchEvent(new CustomEvent('change', {
            detail: {
                value: this.value
            }
        }));
    }
    connectedCallback() {
        super.connectedCallback()
        console.log('value===',this.value)
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'web-switch': WebSwitch
    }
}
