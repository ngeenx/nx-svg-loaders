import { Component, Input } from "@angular/core";

@Component({
  template: ``,
  styleUrls: [
    "./../../../../../../utils/nx-svg-shared-utils/src/styles/base-loader.component.scss",
  ],
  standalone: true,
})
export class NxBaseLoaderComponent {
  @Input()
  public isLoading? = false;

  @Input()
  public size? = 40;

  @Input()
  public color?: string | null = null;

  @Input()
  public isCentered? = true;
}
