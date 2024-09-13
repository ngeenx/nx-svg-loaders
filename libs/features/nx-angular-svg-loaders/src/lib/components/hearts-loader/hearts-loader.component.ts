import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NxBaseLoaderComponent } from "../base-loader/base-loader.component";

@Component({
  imports: [CommonModule],
  selector: "nx-angular-svg-hearts-loader",
  templateUrl: "./hearts-loader.component.html",
  standalone: true,
})
export class NxHeartsLoaderComponent extends NxBaseLoaderComponent {}
