import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NxBaseLoaderComponent } from "../base-loader/base-loader.component";

@Component({
  imports: [CommonModule],
  selector: "nx-angular-svg-three-dots-loader",
  templateUrl: "./three-dots-loader.component.html",
  standalone: true,
})
export class NxThreeDotsLoaderComponent extends NxBaseLoaderComponent {}
