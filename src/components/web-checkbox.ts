import hostStyles from './web-checkbox.scss'
import { html, LitElement,CSSResultGroup } from 'lit'
import { customElement, property } from 'lit/decorators.js'
console.log(hostStyles) // object

@customElement('web-checkbox')
export class WebCheckbox extends LitElement {
    static styles: CSSResultGroup = hostStyles;

    @property({ type: String || Number })
    size = 14

    render() {
        return html`
        <div>
            123
            <div class="blue">456</div>
        </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'web-checkbox': WebCheckbox
    }
}
