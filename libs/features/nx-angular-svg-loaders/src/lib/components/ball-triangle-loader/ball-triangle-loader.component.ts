import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NxBaseLoaderComponent } from "../base-loader/base-loader.component";

@Component({
  imports: [CommonModule],
  selector: "nx-angular-svg-ball-triangle-loader",
  templateUrl: "./ball-triangle-loader.component.html",
  standalone: true,
})
export class NxBallTriangleLoaderComponent extends NxBaseLoaderComponent {}
