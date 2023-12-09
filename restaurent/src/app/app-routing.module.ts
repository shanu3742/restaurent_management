import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './component/recipes/recipes.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesDetailComponent } from './component/recipes/recipes-detail/recipes-detail.component';
import { RecipeEditComponent } from './component/recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/recipes',pathMatch:'full'
  } ,

  {
    path:'recipes', component:RecipesComponent,children:[
      {
        path:'',component:RecipeStartComponent
      },
      {
        path:'new', component :RecipeEditComponent
      },
      {
        path:':id', component:RecipesDetailComponent
      },
      {
        path:':id/edit', component :RecipeEditComponent
      }
    ]
  },

  {
    path:'shopping-list', component:ShoppingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
