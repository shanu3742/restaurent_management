import { Component,ViewChild,ElementRef,ContentChild ,Output,EventEmitter} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.interface';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {
  @ViewChild('ingridentName') ingridientName!:ElementRef;
  @ContentChild("recipeAmmount") recipeAmmount!:ElementRef;
  @Output() handleAdd = new EventEmitter<Ingredient>();

  onAdd(){
    console.log(this.ingridientName.nativeElement.value);
    console.log(this.recipeAmmount.nativeElement.value)
    this.handleAdd.emit({name:this.ingridientName.nativeElement.value,ammount:this.recipeAmmount.nativeElement.value})
  }

}
