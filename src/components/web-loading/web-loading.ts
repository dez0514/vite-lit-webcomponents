import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('web-loading')
export class WebLoading extends LitElement {
    static styles = css`
        :host {
            font-size:inherit;
            display:inline-flex;
            align-items: center;
            justify-content:center;
            color:var(--themeColor, #42b983);
        }
        .web-loading {
            display:inline-flex;
            align-items: center;
            justify-content:center;
        }
        .loading{
            display: block;
            width: 100%;
            height: 100%;
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
        :host(:not(:empty)) .spiner {
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
    size = 14

    @property({ type: String })
    color = ''

    @property({ type: String })
    direction = 'row'

    render() {
        return html`
        <div class="web-loading" style="color:${this.color};flex-direction:${this.direction !== 'column' ? 'row' : 'column'}">
            <div class="spiner" style="width:${this.size}px;height:${this.size}px;">
                <svg class="loading" viewBox="22 22 44 44"><circle class="circle" cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6"></circle></svg>
            </div>
            <slot></slot>
        </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'web-loading': WebLoading
    }
}
