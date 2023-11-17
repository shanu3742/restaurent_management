import { Component,ViewChild,ElementRef,ContentChild ,Output,EventEmitter} from '@angular/core';
import { ShopingListService } from 'src/app/services/shopinglist.service';
import { Ingredient } from 'src/app/shared/ingredient.interface';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {
  @ViewChild('ingridentName') ingridientName!:ElementRef;
  @ContentChild("recipeAmmount") recipeAmmount!:ElementRef;
  constructor(private shopingListService:ShopingListService){}

  onAdd(){  
    this.shopingListService.addIngredient({name:this.ingridientName.nativeElement.value,ammount:this.recipeAmmount.nativeElement.value})
  }

}
