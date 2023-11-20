import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy{
  user!: {id: number, name: string};
  paramsSubscription!:Subscription
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.user={
      id:0,
      name:'agent'
    }
    console.log(this.route.snapshot)
    this.user.id=this.route?.snapshot?.params['id']??'1';
    this.user.name=this.route?.snapshot?.params['name']??'agent';
   this.paramsSubscription= this.route.params.subscribe((params:Params) => {
      this.user.id = params['id'];
      this.user.name= params['name']
    })
  }

  ngOnDestroy(): void {
    /**
     * UNSUB to sub service
     */
    this.paramsSubscription.unsubscribe()
  }

}
