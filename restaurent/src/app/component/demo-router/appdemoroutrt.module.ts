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

const appRoutes :Routes=[
  {path:'', component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'users/:id/:name',component:UserComponent},
  {path:'servers',component:ServersComponent},
  {path:'servers/:id/edit',component:EditServerComponent}

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
    HomeComponent
  ]
})
export class AppdemoroutrtModule { }
