import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';
import { Observable, Subject, pipe } from 'rxjs';
import { OnLogin } from '../models/meanList';
import { OnDailyStatus} from './../models/meanList';
import { Response } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class MeanService {

  constructor(private _http: HttpClient) { }
  public serverApi = 'http://localhost:3000/';
  public getRoleByUserId(UserId) {
    let body = JSON.stringify({ UserId: UserId });
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this._http.post(this.serverApi + 'api/getRoleByUserId', body, { headers: headers });
  }
  public getAllUserDetails(UserId) {
    let body = JSON.stringify({ UserId: UserId });
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this._http.post(this.serverApi + 'api/getAllUserDetails', body, { headers: headers });
  }
  public getEstimatedData(userId) {
    debugger;
    let body = { UserId: userId };
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this._http.post(this.serverApi + 'api/getEstimatedDataByUserId',body, { headers: headers });
  }
  public saveDailyStatus(submitedData:OnDailyStatus) {
    //let body = JSON.stringify({ UserId: submitedData });
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this._http.post(this.serverApi + 'api/getDailyStatusUpdate', submitedData, { headers: headers });
  }
  public saveEstimatedStatus(EstimatedData:OnDailyStatus) {
    //let body = JSON.stringify({ UserId: submitedData });
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this._http.post(this.serverApi + 'api/getEstimatedStatusUpdate', EstimatedData, { headers: headers });
  }
  
}
