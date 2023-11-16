import { Component, OnInit } from "@angular/core";
import { UserInfoService } from "../../service/user-info.service";

@Component({
    selector:'demo-active',
    templateUrl:'./demo.active.component.html',
})
export class DemoActiveComponent implements OnInit{
  public users:string[]=[]

   constructor(private userInfoService:UserInfoService){}

    // UserInfoService
    ngOnInit(): void {
        this.users= this.userInfoService.activeUser       
    }
    public handleInActiveUser(userId:number){
        this.userInfoService.sendToInActiveUser(userId)
    }

}