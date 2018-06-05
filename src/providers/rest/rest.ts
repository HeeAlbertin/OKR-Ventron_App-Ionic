import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from  'rxjs/Observable';
import { User } from  '../../app/models/user.model';

import  'rxjs/add/operator/catch';

import  'rxjs/add/operator/map';

@Injectable()
export class RestProvider {
  baseUrl:string = "http://localhost:8000"; // Meu server local NodeJS

  constructor(public http: HttpClient) {
  }

  public createUser(user: User): Observable<User> {
    return this.http
      .post(this.baseUrl + '/user', user)
      
      .map(response  => {
        return new User(response);    
      })
  }

  public loginUser(user: User): Observable<User> {
    return this.http
      .post(this.baseUrl + '/user/login', user)
      
      .map(response  => {
        return new User(response);    
      })
  }

  public getUsers(): Observable<User[]> {
    return this.http.get(this.baseUrl + '/user')
      .map(res => res as User[] || []);
  }

}
