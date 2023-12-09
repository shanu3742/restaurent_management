import { Component,Input } from '@angular/core';
import { Recipe } from '../recipes.interface';
import { ShopingListService } from 'src/app/services/shopinglist.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent {
 recipe!:Recipe;
constructor(private shopingListService :ShopingListService,private route:ActivatedRoute,private recipeService:RecipeService,private router:Router){
  
}
ngOnInit(){
  this.route.params.subscribe((params:Params) => {
    console.log(params)
    let recipeId= +(params['id'])
   this.recipe= this.recipeService.getSelectedRecipes(recipeId)
   
  })
}

addToShopingList(){
this.shopingListService.addIngredients(this.recipe.ingridient)
}
onEdit(){
  this.router.navigate(['edit'],{relativeTo:this.route})

}
}
