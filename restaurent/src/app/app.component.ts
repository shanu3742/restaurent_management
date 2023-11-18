import { Component } from '@angular/core';
import { LoggingService } from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[LoggingService]
})
export class AppComponent {
  title = 'restaurent';
  /**
   * default navigationPath is 
   * recipes
   */
  navigateUrl:string='recipes';
  constructor(private loggingService:LoggingService){}
  ngOnInit(){
    this.loggingService.logStatusChange('login')
  }
  handleNavigation(event:string){
     this.navigateUrl = event;
  }
}
