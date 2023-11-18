import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './component/header/app-header.component';
import { RecipesComponent } from './component/recipes/recipes.component';
import { RecipesListComponent } from './component/recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './component/recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './component/recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './component/shopping-list/shopping-edit/shopping-edit.component';
import { AppHover } from 'src/directory/hover.directive';
import { DemoComponentIfComponent } from './component/demo-component-if/demo-component-if.component';
import { FormsModule } from '@angular/forms';
import { CustomIf } from 'src/directory/customIf.directive';
import { AppDropDown } from 'src/directory/dropdown.directive';
import { DemoServiceComponent } from './component/demo_service/demo/demo.service.component';
import { DemoServiceModule } from './component/demo_service/demo-service.module';
import { AppdemoroutrtModule } from './component/demo-router/appdemoroutrt.module';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    AppHover,
    DemoComponentIfComponent,
    CustomIf,
    AppDropDown,
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DemoServiceModule,
    AppdemoroutrtModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
