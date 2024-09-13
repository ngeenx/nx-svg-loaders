import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NxBaseLoaderComponent } from "../base-loader/base-loader.component";

@Component({
  imports: [CommonModule],
  selector: "nx-angular-svg-bars-loader",
  templateUrl: "./bars-loader.component.html",
  standalone: true,
})
export class NxBarsLoaderComponent extends NxBaseLoaderComponent {}
