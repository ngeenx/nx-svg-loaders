import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NxWelcomeComponent } from "./nx-welcome.component";
import {
  AudioLoaderComponent,
  OvalLoaderComponent,
} from "@ngeenx/nx-angular-svg-loaders";

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    OvalLoaderComponent,
    AudioLoaderComponent,
  ],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "angular-app";

  public sizes: number[] = [10, 20, 30, 40, 50, 70, 90, 110];
}
