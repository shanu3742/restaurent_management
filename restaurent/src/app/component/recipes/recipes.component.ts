import { Component } from '@angular/core';
import { Recipe } from './recipes.interface';
import { RecipeService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
 selectedRecipe!:Recipe;
 constructor(private recipeService:RecipeService){}
 
 ngOnInit(): void {
  this.recipeService.onRecipeSelection.subscribe((recipe:Recipe)=>{
    this.selectedRecipe=recipe
  })
}

  getSelectedRecipe(selectedRecipe:Recipe){
    this.selectedRecipe=selectedRecipe;
  }

}
