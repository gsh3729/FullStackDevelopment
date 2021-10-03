import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {AuthService} from './auth.service';
@Injectable()
export class TokenInterceptService implements HttpInterceptor{

  constructor(private _injector:Injector) { }
  intercept(req,next){
    let _authService = this._injector.get(AuthService);
    let tokenizedReq = req.clone({
      setHeaders:{
        'x-access-token':`${_authService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }

}
