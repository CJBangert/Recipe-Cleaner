import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RecipeGetterService } from '../recipe-getter.service';
@Component({
  selector: 'app-url-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './url-input.component.html',
  styleUrl: './url-input.component.scss'
})
export class UrlInputComponent {

  url: string = '';

  constructor(
    private recipeService: RecipeGetterService,
  ) {}

  getRecipe(){
    this.recipeService.getContent(this.url)
  }
  


}
