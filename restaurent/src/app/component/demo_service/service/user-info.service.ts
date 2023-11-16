import { EventEmitter, Injectable } from '@angular/core';
import { UserCounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  activeUser:string[]=['shanu','kumar', 'rahul'];
  inActiveUser:string[]=['dhoni','viru','irfan'];
  alertHandle= new EventEmitter<string>()

  constructor(private userCounterService:UserCounterService) { }
  getActiveUser(){
    return this.activeUser;
  }
  getInActiveUser(){
    return this.inActiveUser;
  }
  sendToActiveUser(userId:number){
    this.activeUser.push(this.inActiveUser[userId]);
    this.inActiveUser.splice(userId,1);
    this.userCounterService.onAtiveUserCountChange()
  }
  sendToInActiveUser(userId:number){
    this.inActiveUser.push(this.activeUser[userId]);
   this.activeUser.splice(userId,1);
   this.userCounterService.onInActiveUserCountChange()
  }

}
