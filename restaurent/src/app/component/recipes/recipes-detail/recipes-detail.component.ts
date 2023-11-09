import { Component,Input } from '@angular/core';
import { Recipe } from '../recipes.interface';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent {
@Input() recipe!:Recipe
}
