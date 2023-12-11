import {  Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.interface";
import { Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ShopingListService{
   public onIngridientChange= new Subject<Ingredient[]>()
   private ingredients:Ingredient[]=[
        {
          name: 'Apples',
          ammount: 5
        },
        {
          name: 'Tomatoes',
          ammount: 5
        }
      ]

      getIngredients(){
        return [...this.ingredients]
      }
      addIngredient(ingredient:Ingredient){
        if(!ingredient.name || +ingredient.ammount<=0){
            alert('pleasae add vaild details for Ingridient');
            return
        }
        this.ingredients.push(ingredient)
        this.onIngridientChange.next([...this.ingredients])
      }
      addIngredients(ingridients:Ingredient[]){
        this.ingredients.push(...ingridients)
        this.onIngridientChange.next([...this.ingredients])
      }
    
}