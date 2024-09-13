import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NxBaseLoaderComponent } from "../base-loader/base-loader.component";

@Component({
  imports: [CommonModule],
  selector: "nx-angular-svg-spinning-circles-loader",
  templateUrl: "./spinning-circles-loader.component.html",
  standalone: true,
})
export class NxSpinningCirclesLoaderComponent extends NxBaseLoaderComponent {}
