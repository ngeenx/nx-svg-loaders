import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NxBaseLoaderComponent } from "../base-loader/base-loader.component";

@Component({
  imports: [CommonModule],
  selector: "nx-angular-svg-oval-loader",
  templateUrl: "./oval-loader.component.html",
  standalone: true,
})
export class NxOvalLoaderComponent extends NxBaseLoaderComponent {}
