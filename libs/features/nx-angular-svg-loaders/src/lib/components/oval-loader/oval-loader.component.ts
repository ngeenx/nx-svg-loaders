import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { BaseLoaderComponent } from "../base-loader/base-loader.component";

@Component({
  imports: [CommonModule],
  selector: "nx-angular-svg-oval-loader",
  templateUrl: "./oval-loader.component.html",
  standalone: true,
})
export class OvalLoaderComponent extends BaseLoaderComponent {}
