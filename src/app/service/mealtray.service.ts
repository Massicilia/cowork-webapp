import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mealtray } from '../model/mealtray';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealtrayService {
  private  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private mealtrayUrl: string;

  constructor(private http: HttpClient) {
    this.mealtrayUrl = 'http://localhost:8080/mealtrayorder';
  }

  public findAll(): Observable<Mealtray[]> {
    return this.http.get<Mealtray[]>(this.mealtrayUrl + '/' + Date.now());
  }

  public save(mealtray: Mealtray) {
    return this.http.post<Mealtray>(this.mealtrayUrl + '/new', JSON.stringify(mealtray), this.httpOptions);
  }


}
