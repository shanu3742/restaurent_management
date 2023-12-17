import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  isActivated=false;
  activatationSub!:Subscription
  constructor(private userService:UserService) {}
  

  ngOnInit() {
 this.activatationSub=   this.userService.activatedSubject.subscribe((activatataion:boolean) => {
      this.isActivated=activatataion
    })

   
  }

  ngOnDestroy(): void {
    this.activatationSub.unsubscribe()
  }
 
}
