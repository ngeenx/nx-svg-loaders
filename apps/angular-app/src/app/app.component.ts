import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NxWelcomeComponent } from "./nx-welcome.component";
import {
  NxAudioLoaderComponent,
  NxBallTriangleLoaderComponent,
  NxBarsLoaderComponent,
  NxCirclesLoaderComponent,
  NxGridLoaderComponent,
  NxHeartsLoaderComponent,
  NxOvalLoaderComponent,
  NxPuffLoaderComponent,
  NxRingsLoaderComponent,
  NxSpinningCirclesLoaderComponent,
  NxTailSpinLoaderComponent,
  NxThreeDotsLoaderComponent,
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
    NxCirclesLoaderComponent,
    NxGridLoaderComponent,
    NxBarsLoaderComponent,
    NxHeartsLoaderComponent,
    NxPuffLoaderComponent,
    NxRingsLoaderComponent,
    NxSpinningCirclesLoaderComponent,
    NxTailSpinLoaderComponent,
    NxThreeDotsLoaderComponent,
  ],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  public sizes: number[] = [10, 15, 20, 25, 30, 25, 40, 50];
}
