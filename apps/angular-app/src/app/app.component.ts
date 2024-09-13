import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NxWelcomeComponent } from "./nx-welcome.component";
import {
  NxAudioLoaderComponent,
  NxBallTriangleLoaderComponent,
  NxBarsLoaderComponent,
  NxOvalLoaderComponent,
} from "@ngeenx/nx-angular-svg-loaders";

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,

    // SVG loader components
    NxOvalLoaderComponent,
    NxAudioLoaderComponent,
    NxBallTriangleLoaderComponent,
    NxBarsLoaderComponent,
  ],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  public sizes: number[] = [10, 15, 20, 25, 30, 25, 40, 50];
}
