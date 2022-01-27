import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('web-loading')
export class WebLoading extends LitElement {
    static styles = css`
        :host{
            font-size:inherit;
            display:inline-flex;
            align-items: center;
            justify-content:center;
            color:var(--themeColor,#42b983);
        }
        .loading{
            display: block;
            width: 1em;
            height: 1em;
            margin: auto;
            animation: rotate 1.4s linear infinite;
        }
        .circle {
            stroke: currentColor;
            animation:  progress 1.4s ease-in-out infinite;
            stroke-dasharray: 80px, 200px;
            stroke-dashoffset: 0px;
            transition:.3s;
        }
        :host(:not(:empty)) .loading{
            margin:.5em;
        }
        @keyframes rotate{
            to{
                transform: rotate(360deg); 
            }
        }
        @keyframes progress {
            0% {
              stroke-dasharray: 1px, 200px;
              stroke-dashoffset: 0px; 
            }
            50% {
              stroke-dasharray: 100px, 200px;
              stroke-dashoffset: -15px; 
            }
            100% {
              stroke-dasharray: 100px, 200px;
              stroke-dashoffset: -125px; 
            } 
        }
  `
    @property({ type: String || Number })
    size = ''

    @property({ type: String })
    color = ''

    render() {
        return html`
            <svg class="loading" id="loading" viewBox="22 22 44 44"><circle class="circle" cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6"></circle></svg>
            <slot></slot>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'web-loading': WebLoading
    }
}
