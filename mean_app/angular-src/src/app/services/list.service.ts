
import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpParams,
    HttpHeaders
} from '@angular/common/http';
// import {
//     Observable
// } from 'rxjs/Observable';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { List } from '../models/List'

//mport 'rxjs/add/operator/filter';

@Injectable()
export class ListService {

    constructor(private http: HttpClient) { }
 public serverApi= 'http://localhost:3000/';

   
    public getAllLists() {
        
        return this.http.get <List[]> (this.serverApi+'meanlist');
    }

    public addList(list: List) {
      
        const headers = new HttpHeaders().set('content-type', 'application/json');
         let body = JSON.stringify({title: list.title, description: list.description, category: list.category});
         console.log(body);

        return this.http.post(this.serverApi+'meanlist', body ,{headers: headers});
    }



    public deleteList(listId : string) {
      
      const headers = new HttpHeaders().set('content-type', 'application/json');
        return this.http.delete('http://localhost:3000/meanlist/'+ listId, {headers})
        
    }
}
