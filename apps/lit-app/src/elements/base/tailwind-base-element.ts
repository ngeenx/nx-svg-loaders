import { CSSResult, LitElement, css, unsafeCSS } from "lit";

import tailwindBase from "./tailwind-base.scss?inline";

export interface ITailwindBaseElementOptions {
  componentStyle?: string;
  tailwindBase?: boolean;
}

export const TailwindBaseElement = (
  options: ITailwindBaseElementOptions = {
    componentStyle: "",
    tailwindBase: true,
  }
) => {
  return class extends LitElement {
    public static styles: CSSResult[] = [
      options.tailwindBase
        ? css`
            ${unsafeCSS(tailwindBase)}
          `
        : css``,
      css`
        ${unsafeCSS(options.componentStyle)}
      `,
    ];
  };
};
