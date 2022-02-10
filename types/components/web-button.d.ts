import { LitElement } from 'lit';
import './web-loading';
import './web-icon';
export declare class WebButton extends LitElement {
    static styles: import("lit").CSSResult;
    type: string;
    round: boolean;
    circle: boolean;
    disabled: boolean;
    icon: string;
    loading: boolean;
    block: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'web-button': WebButton;
    }
}
