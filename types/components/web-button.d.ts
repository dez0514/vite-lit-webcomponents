import { LitElement } from 'lit';
import './web-loading';
import './web-icon';
/**
 * Button.
 */
export declare class WebButton extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * button type
    */
    type: string;
    /**
     * button round shape
    */
    round: boolean;
    /**
     * button round cicle
    */
    circle: boolean;
    /**
     * button disable
    */
    disabled: boolean;
    /**
     * button icon
    */
    icon: string;
    /**
     * button loading
    */
    loading: boolean;
    /**
     * button block
    */
    block: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'web-button': WebButton;
    }
}
