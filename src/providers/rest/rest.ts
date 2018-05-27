import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from  'rxjs/Observable';
import { User } from  '../../app/models/user.model';

import  'rxjs/add/operator/catch';

import  'rxjs/add/operator/map';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  baseUrl:string = "http://localhost:8000";

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  // Sending a POST request to /user

  public createUser(user: User): Observable<User> {
    return  this.http
      .post(this.baseUrl + '/user', user)
      
      .map(response  => {
        return new User(response);    
      })
  }

}
