import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!: {id: number, name: string};
  paramsSubscription!:Subscription

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params)
    this.user={
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name'],
    }
 this.paramsSubscription=  this.route.params.subscribe((routeParams:Params) => {
      
      this.user= {
        id:routeParams['id'],
        name:routeParams['name']
      }
    })
    
  }

  ngOnDestory(){
    this.paramsSubscription.unsubscribe()
  }
}
