import { Component, Input ,Output,EventEmitter} from '@angular/core';
import { Recipe } from '../../recipes.interface';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent {
  @Input() recipe!:Recipe;
  @Output() onRecipeSelect= new EventEmitter<Recipe>()

  recipeSelect(recipeEvent:Recipe){
    this.onRecipeSelect.emit(recipeEvent)
  }

}
