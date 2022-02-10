import { LitElement } from 'lit';
export declare class WebLoading extends LitElement {
    static styles: import("lit").CSSResult;
    size: number;
    color: string;
    direction: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'web-loading': WebLoading;
    }
}
