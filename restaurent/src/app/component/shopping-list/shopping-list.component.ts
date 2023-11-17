import { Component } from '@angular/core';
import { ShopingListService } from 'src/app/services/shopinglist.service';
import { Ingredient } from 'src/app/shared/ingredient.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  ingredients!:Ingredient[];
  constructor(private shopingListService:ShopingListService){

  }
  ngOnInit(){
    this.ingredients= this.shopingListService.getIngredients();
    this.shopingListService.onIngridientChange.subscribe((ingredient:Ingredient[]) => {
      this.ingredients=ingredient
    })
  }

  

}
