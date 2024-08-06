import { Component, OnInit } from '@angular/core';
import { RecipeGetterService } from '../recipe-getter.service';


@Component({
  selector: 'app-display-recipe',
  standalone: true,
  imports: [],
  templateUrl: './display-recipe.component.html',
  styleUrl: './display-recipe.component.scss'
})
export class DisplayRecipeComponent {
  data: any

  constructor(private recipeService: RecipeGetterService){}

  ngOnInit(): void {
    this.recipeService.data$.subscribe(response => {
      if (this.data != null){
        this.data = response.body;
      }
      else{
        this.data = ''
      }
    });
  }

}
