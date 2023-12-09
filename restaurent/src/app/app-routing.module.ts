import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './component/recipes/recipes.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/recipes',pathMatch:'full'
  } ,

  {
    path:'recipes', component:RecipesComponent
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
