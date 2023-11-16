import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class UserCounterService{
    inActiveCount: number = 0;
    activeCount: number = 0;
   
    constructor(){}

    onAtiveUserCountChange(){
        this.activeCount= this.activeCount+1;
        console.log('inactive to active count:',this.activeCount);
    }
    onInActiveUserCountChange(){
        this.inActiveCount= this.inActiveCount+1;
        console.log('active to inactive count:',this.inActiveCount);
    }

}