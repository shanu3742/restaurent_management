import { Component,Input } from '@angular/core';
import { Recipe } from '../recipes.interface';
import { ShopingListService } from 'src/app/services/shopinglist.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent {
@Input() recipe!:Recipe;
constructor(private shopingListService :ShopingListService){}

addToShopingList(){
this.shopingListService.addIngredients(this.recipe.ingridient)
}
}
