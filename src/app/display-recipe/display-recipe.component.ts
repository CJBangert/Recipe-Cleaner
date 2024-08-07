import { Component, OnInit } from '@angular/core';
import { RecipeGetterService } from '../recipe-getter.service';


@Component({
  selector: 'app-display-recipe',
  standalone: true,
  imports: [],
  templateUrl: './display-recipe.component.html',
  styleUrl: './display-recipe.component.scss'
})
export class DisplayRecipeComponent implements OnInit{
  data: any

  constructor(private recipeService: RecipeGetterService){}

  ngOnInit(): void {
    this.recipeService.data$.subscribe(
      resp => this.data = resp?.body
    )
  }

}
