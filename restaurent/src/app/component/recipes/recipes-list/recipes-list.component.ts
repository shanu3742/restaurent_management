import { Component ,Output,EventEmitter} from '@angular/core';
import { Recipe } from '../recipes.interface';
import { RecipeService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
  recipes!:Recipe[]
 

  constructor(private recipesService:RecipeService){}

  ngOnInit(){
      this.recipes= this.recipesService.getRecipes()
    }

  handleRecipeSelect(selectedRecipe:Recipe){
    // this.handleRecipeSelection.emit(selectedRecipe)
    this.recipesService.onRecipeSelection.emit(selectedRecipe)
  }

}
    