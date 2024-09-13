import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NxBaseLoaderComponent } from "../base-loader/base-loader.component";

@Component({
  imports: [CommonModule],
  selector: "nx-angular-svg-tail-spin-loader",
  templateUrl: "./tail-spin-loader.component.html",
  standalone: true,
})
export class NxTailSpinLoaderComponent extends NxBaseLoaderComponent {}
