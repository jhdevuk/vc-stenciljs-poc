/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface LocalSearch {
    /**
    * Map link text
    */
    'linkText': string;
    /**
    * Map URL
    */
    'mapUrl': string;
    /**
    * Main title text
    */
    'titleText': string;
  }
  interface RedemptionButton {}
}

declare global {


  interface HTMLLocalSearchElement extends Components.LocalSearch, HTMLStencilElement {}
  var HTMLLocalSearchElement: {
    prototype: HTMLLocalSearchElement;
    new (): HTMLLocalSearchElement;
  };

  interface HTMLRedemptionButtonElement extends Components.RedemptionButton, HTMLStencilElement {}
  var HTMLRedemptionButtonElement: {
    prototype: HTMLRedemptionButtonElement;
    new (): HTMLRedemptionButtonElement;
  };
  interface HTMLElementTagNameMap {
    'local-search': HTMLLocalSearchElement;
    'redemption-button': HTMLRedemptionButtonElement;
  }
}

declare namespace LocalJSX {
  interface LocalSearch {
    /**
    * Map link text
    */
    'linkText'?: string;
    /**
    * Map URL
    */
    'mapUrl'?: string;
    /**
    * Main title text
    */
    'titleText'?: string;
  }
  interface RedemptionButton {}

  interface IntrinsicElements {
    'local-search': LocalSearch;
    'redemption-button': RedemptionButton;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'local-search': LocalJSX.LocalSearch & JSXBase.HTMLAttributes<HTMLLocalSearchElement>;
      'redemption-button': LocalJSX.RedemptionButton & JSXBase.HTMLAttributes<HTMLRedemptionButtonElement>;
    }
  }
}


