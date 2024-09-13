import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { BaseLoaderComponent } from "../base-loader/base-loader.component";

@Component({
  imports: [CommonModule],
  selector: "nx-angular-svg-audio-loader",
  templateUrl: "./audio-loader.component.html",
  standalone: true,
})
export class AudioLoaderComponent extends BaseLoaderComponent {}
