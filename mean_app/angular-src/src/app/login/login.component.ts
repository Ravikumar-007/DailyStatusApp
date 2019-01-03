import { Component, OnInit } from '@angular/core';
import { OnLogin } from '../models/meanList';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginAuth:OnLogin;
  returnUrl: string;
  constructor(private _loginService:LoginService,private route: ActivatedRoute,private router: Router,private slimLoadingBarService: SlimLoadingBarService) { }

  ngOnInit() {
    this._loginService.logout();
    this.loginAuth={
     userName: '',
      password: ''
    }
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  public onLogin=function(){
    //this.startLoading();
    this.slimLoadingBarService.start();
    this._loginService.authenticateMethod(this.loginAuth).subscribe(response => {
      this.slimLoadingBarService.complete();
      console.log(response);
      debugger;
        
      
        if (response && response.token) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username:this.loginAuth.userName, token: response.token }));
          this.router.navigate(['/dashboard']);
      
      }else{
        alert(response.msg);
      }
        
      
      
   
    }), err => {
    
      console.log("Error Occured " + err);
    }

  }

}
