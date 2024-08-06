import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UrlInputComponent } from './url-input/url-input.component';
import { DisplayRecipeComponent } from "./display-recipe/display-recipe.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UrlInputComponent, DisplayRecipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recipe-cleaner';
}
