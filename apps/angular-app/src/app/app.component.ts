import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { sizes, loaderTypes } from "@ngeenx/nx-svg-shared-utils";

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
    RouterModule,
    CommonModule,

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
  styleUrls: ["/libs/utils/nx-svg-shared-utils/src/styles/app.component.scss"],
})
export class AppComponent {
  public sizes: number[] = sizes;
  public loaderTypes: string[] = loaderTypes;
}
