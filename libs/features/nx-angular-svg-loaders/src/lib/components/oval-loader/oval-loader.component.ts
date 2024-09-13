import { Component, Input } from "@angular/core";
import { BaseLoaderComponent } from "../base-loader/base-loader.component";

@Component({
  selector: "nx-angular-svg-oval-loader",
  templateUrl: "./oval-loader.component.html",
  styleUrls: ["./oval-loader.component.scss"],
  standalone: true,
})
export class OvalLoaderComponent extends BaseLoaderComponent {}
