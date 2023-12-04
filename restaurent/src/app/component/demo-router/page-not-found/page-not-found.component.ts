import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  public errorMessage!:string
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    this.route.data.subscribe(({errorMessage}) => {
        this.errorMessage=  errorMessage
    })
  }

}
