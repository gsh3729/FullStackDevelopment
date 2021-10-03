import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private registerData={};

  constructor(private _auth:AuthService,private _router:Router) { }

  ngOnInit() {

  }
  registerUser(){
    console.log(this.registerData);
    this._auth.registration(this.registerData)
    .subscribe(
      res=>{
        console.log(res);
        localStorage.setItem('token',res.token);
        this._router.navigate(['/faculty'])
      },
      err=>console.log(err)
    );
  }


}
