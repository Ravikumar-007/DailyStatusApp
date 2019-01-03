import { Component, OnInit } from '@angular/core';
import { Onregister } from './../models/meanList'
import { LoginService } from '../services/login.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private newRegister:Onregister;
  constructor(private _loginService: LoginService,private router: Router,private _flashMessagesService: FlashMessagesService,private slimLoadingBarService: SlimLoadingBarService) { }

  ngOnInit() {
    
    this.newRegister={
      _id: '',
      firstName: '',
      lastName: '',
      userName: '',
      password: ''
    }
  }
public onRegisterSubmit=function(){
  this.newRegister['isActive']= "0";
  this.slimLoadingBarService.start();
this._loginService.addRegisterMethod(this.newRegister).subscribe(response => {

   
  console.log(response);
console.log(response.success);
if(response.success==true){
  this._flashMessagesService.grayOut(true);
  this._flashMessagesService.show(response.message, { cssClass: 'alert-success', timeout: 1000 });
  this.router.navigate(['/login']);
  this.slimLoadingBarService.complete();
}
}), err => {

  console.log("Error Occured " + err);
}
}
}
