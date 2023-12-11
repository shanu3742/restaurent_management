import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopingListService } from 'src/app/services/shopinglist.service';
import { Ingredient } from 'src/app/shared/ingredient.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  ingredients!:Ingredient[];
  ingridientSub!:Subscription
  constructor(private shopingListService:ShopingListService){

  }
  ngOnInit(){
    this.ingredients= this.shopingListService.getIngredients();
   this.ingridientSub= this.shopingListService.onIngridientChange.subscribe((ingredient:Ingredient[]) => {
      this.ingredients=ingredient
    })
  }
  ngOnDestory(){
    this.ingridientSub.unsubscribe()
  }
  

}
