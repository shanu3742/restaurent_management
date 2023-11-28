import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree, mapToCanActivateChild } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn:'root'
})
export class AuthGard implements CanActivate ,CanActivateChild{
    constructor(private authService:AuthService,private router:Router){}
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
     return this.authService.isAuthenticated().then((authenticated):any =>{
        if(authenticated){
         return true
        }else{
            this.router.navigate(['/'])
        }
       })
    
   }
   canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{
        return this.canActivate(route,state)
   }

}