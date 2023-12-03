import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from '../can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit , CanComponentDeactivate{
  server!: {id: number, name: string, status: string};
  serverName :any= '';
  serverStatus :any= '';
  allowEdit= false;
  changeSaved=false;

  constructor(private serversService: ServersService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams:Params) => {
      this.allowEdit= queryParams['allowEdit']==='false'?false:true;  
    })
    const id = this.route.snapshot.params['id']
    
    this.server = this.serversService.getServer(+id) as any;
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changeSaved=true;
    this.router.navigate(['../'],{relativeTo:this.route})
    
  }
  canDeactivate() : boolean | Observable<boolean> | Promise<boolean>{
    if(!this.allowEdit){
      return true
    }
 
    if(( this.serverName !==this.server.name || this.serverStatus !== this.server.status) && !this.changeSaved){
      return confirm('Do You Want To Discard The Changed?')
    }else{
      return true
    }
  }

}
