import { LitElement } from 'lit';
export declare class WebIcon extends LitElement {
    static styles: import("lit").CSSResult;
    name: string;
    color: string;
    path: string;
    size: number;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'web-icon': WebIcon;
    }
}
