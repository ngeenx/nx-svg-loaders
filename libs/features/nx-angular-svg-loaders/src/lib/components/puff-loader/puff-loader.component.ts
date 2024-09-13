import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NxBaseLoaderComponent } from "../base-loader/base-loader.component";

@Component({
  imports: [CommonModule],
  selector: "nx-angular-svg-puff-loader",
  templateUrl: "./puff-loader.component.html",
  standalone: true,
})
export class NxPuffLoaderComponent extends NxBaseLoaderComponent {}
