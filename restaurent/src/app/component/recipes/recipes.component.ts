import { Component } from '@angular/core';
import { Recipe } from './recipes.interface';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
 selectedRecipe!:Recipe


  getSelectedRecipe(selectedRecipe:Recipe){
    this.selectedRecipe=selectedRecipe;
  }

}
