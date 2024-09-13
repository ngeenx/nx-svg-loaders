import { Component, Input } from "@angular/core";

@Component({
  template: ``,
})
export class BaseLoaderComponent {
  @Input()
  public isLoading = false;

  @Input()
  public size = 40;

  @Input()
  public color: string | null = null;

  @Input()
  public centered = true;
}
