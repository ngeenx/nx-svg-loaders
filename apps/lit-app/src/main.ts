import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindBaseElement } from "./elements/base/tailwind-base-element";

import style from "./styles/app.scss?inline";

@customElement("app-element")
export class MyElement extends TailwindBaseElement({
  componentStyle: style,
  tailwindBase: true,
}) {
  @property()
  version = "STARTING";

  public render(): TemplateResult {
    return html`
      <p>Welcome to the Lit tutorial!</p>
      <p>This is the ${this.version} code.</p>
      <p>Imported from a library: efds.</p>
    `;
  }
}
