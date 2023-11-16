import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  activeUser:string[]=['shanu','kumar', 'rahul'];
  inActiveUser:string[]=['dhoni','viru','irfan']

  constructor() { }
  getActiveUser(){
    return this.activeUser;
  }
  getInActiveUser(){
    return this.inActiveUser;
  }
  sendToActiveUser(userId:number){
    this.activeUser.push(this.inActiveUser[userId]);
    this.inActiveUser.splice(userId,1);
  }
  sendToInActiveUser(userId:number){
    this.inActiveUser.push(this.activeUser[userId]);
   this.activeUser.splice(userId,1);
  }

}
