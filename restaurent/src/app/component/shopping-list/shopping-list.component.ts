import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  ingredients:Ingredient[]=[
    {
      name: 'Apples',
      ammount: 5
    },
    {
      name: 'Tomatoes',
      ammount: 5
    }
  ]

}
