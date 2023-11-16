import { Component } from "@angular/core";
import { UserInfoService } from "../../service/user-info.service";

@Component({
    selector:"demo-inactive",
    templateUrl:"./demo-inactive.component.html"
})
export class DemoInActiveComponent{
    public users:string[]=[]
    constructor(private userInfoService:UserInfoService ){}
    ngOnInit(){
        this.users= this.userInfoService.inActiveUser
    }
    public handleActiveUser(userId:number){
        this.userInfoService.sendToActiveUser(userId)   ;
        this.userInfoService.alertHandle.emit('user update active state')
    }

}