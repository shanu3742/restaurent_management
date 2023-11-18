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



@NgModule({
  declarations: [
    UserComponent,
    ServersComponent,
    EditServerComponent,
    AppRouterDemoComponent,
    ServerComponent,
    UsersComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
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
