import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./app-header.component.html',
    styleUrls:['./app-header.component.css']

})
export class AppHeaderComponent {
    @Output() onNavigate = new EventEmitter<string>();

    onNavigation(navigatTo:string){
      
        this.onNavigate.emit(navigatTo);
    }

}