import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NxBaseLoaderComponent } from "../base-loader/base-loader.component";

@Component({
  imports: [CommonModule],
  selector: "nx-angular-svg-grid-loader",
  templateUrl: "./grid-loader.component.html",
  standalone: true,
})
export class NxGridLoaderComponent extends NxBaseLoaderComponent {}
