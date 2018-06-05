import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from  'rxjs/Observable';
import { Competitions } from  '../../app/models/competitions.model';

import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';

import { Token } from '../../app/config/api-token'

@Injectable()
export class FootballRestProvider {
  private baseApi: string = "https://api.football-data.org/";
  private baseVersion: string = "v1/";
  private baseUrl: string = "";
  private token: string = "";

  constructor(public http: HttpClient) {
    this.baseUrl = this.baseApi + this.baseVersion;
    this.token = Token.key;
  }

  getCompetitions(): Observable<Competitions[]> {
    const headers = new HttpHeaders()
            .set('X-Auth-Token', this.token);

    const currentTime = new Date();
    const year = currentTime.getFullYear();

    return this.http.get(this.baseUrl + 'competitions/?season=' + year, {headers})
      .map(res => res as Competitions[] || []);
  }

  getTeams(compId): Observable<any> {
    const headers = new HttpHeaders()
            .set('X-Auth-Token', this.token);
            
    return this.http.get(this.baseUrl + 'competitions/' + compId + '/teams', {headers})
      .map(res => res as any[] || []);
  }

  getPlayers(teamId): Observable<any> {
    const headers = new HttpHeaders()
            .set('X-Auth-Token', this.token);
            
    return this.http.get(this.baseUrl + 'teams/' + teamId + '/players', {headers})
      .map(res => res as any[] || []);
  }

}

