import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { RecipeGetterService } from '../recipe-getter.service';
@Component({
  selector: 'app-url-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './url-input.component.html',
  styleUrl: './url-input.component.scss'
})
export class UrlInputComponent {

  urlForm: FormGroup;
  
  constructor(
    private recipeService: RecipeGetterService,
    private fb: FormBuilder
  ) {
    let pattern = '^(https?:\\/\\/)?([\\da-z.-]+)\\.([a-z.]{2,6})([\\/\\w .-]*)*\\/?$'
    this.urlForm = this.fb.group({
      url: ['', [Validators.required, Validators.pattern(pattern)]]
    });
  }

  getRecipe(){
    let url: string = this.urlForm.get('url')?.value
    if(url != null){
      this.recipeService.getContent(url)
    }
    
  }
}
