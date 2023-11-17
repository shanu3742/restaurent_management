import { Component } from "@angular/core";
import { UserInfoService } from "../service/user-info.service";


@Component({
    selector:'app-demo-service',
    templateUrl:'./demo.service.component.html'
})
export class DemoServiceComponent {
    constructor(private userInfoService:UserInfoService){
        this.userInfoService.alertHandle.subscribe((message) =>{
            console.log(message);
            alert(message)
        })
    }
}