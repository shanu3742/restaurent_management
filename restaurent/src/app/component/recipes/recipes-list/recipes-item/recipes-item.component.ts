import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipes.interface';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent {
  @Input() recipe!:Recipe

}
