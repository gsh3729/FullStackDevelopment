import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from './auth.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _auth:AuthService,private _router:Router){}
  canActivate():boolean{
    if(this._auth.loggedIn()){
      return true;
    }
    else{
      console.log("Not a logged in user");
      this._router.navigate(['/login']);
      return false;
    }
  }

}
//angular frontend validation
