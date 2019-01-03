import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { Onregister, OnLogin } from './../models/meanList';
import {AppSettings} from './../models/constants';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }
  public serverApi= AppSettings.API_ENDPOINT;


  public addRegisterMethod (RegisterData: Onregister) {

    const headers = new HttpHeaders().set('content-type', 'application/json');
    //  let body = JSON.stringify({firstName: RegisterData.firstName, lastName: RegisterData.lastName, userName: RegisterData.userName, password: RegisterData.password});
    //  console.log(body);

    return this._http.post(this.serverApi+'api/registeruser', RegisterData ,{headers: headers});
}

public updateMethod(UpdatedData:Onregister){
  const headers = new HttpHeaders().set('content-type', 'application/json');
  return this._http.post(this.serverApi+'api/updateuser', UpdatedData ,{headers: headers});
}
public authenticateMethod(LoginData:OnLogin) {

  const headers = new HttpHeaders().set('content-type', 'application/json');
return this._http.post(this.serverApi+'api/login', LoginData ,{headers: headers});
}
public logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
}
}
