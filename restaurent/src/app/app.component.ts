import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restaurent';
  /**
   * default navigationPath is 
   * recipes
   */
  navigateUrl:string='recipes';
  
  handleNavigation(event:string){
     this.navigateUrl = event;
  }
}
