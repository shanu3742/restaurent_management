import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { AppRouterDemoComponent } from './app.component';
import { ServerComponent } from './servers/server/server.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGard } from './auth-gard.service';

 const appRoutes:Routes= [
  {path:'',component:HomeComponent},
  { path:'users', component:UsersComponent,children:[
    {path:':id/:name',component:UserComponent},
  ]},
  {path:"servers",
  // canActivate:[AuthGard]
  canActivateChild:[AuthGard],
  component:ServersComponent ,
  children:[
    {path:':id',component:ServerComponent},
    {path:':id/edit',component:EditServerComponent}
  ]},
  {path:'**',component:PageNotFoundComponent}
  
 ]

@NgModule({
  declarations: [
    UserComponent,
    ServersComponent,
    EditServerComponent,
    AppRouterDemoComponent,
    ServerComponent,
    UsersComponent,
    HomeComponent,
    PageNotFoundComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    UserComponent,
    ServersComponent,
    EditServerComponent,
    AppRouterDemoComponent,
    ServerComponent,
    UsersComponent,
    HomeComponent,
    PageNotFoundComponent
  ]
})
export class AppdemoroutrtModule { }
