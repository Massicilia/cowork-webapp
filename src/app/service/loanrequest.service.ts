import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Loanrequest } from '../model/loanrequest';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import {Booking} from '../model/booking';

@Injectable({
  providedIn: 'root'
})
export class LoanrequestService {

  private  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };
  private loanrequestUrl: string;

  constructor(private httpClient: HttpClient) {
    this.loanrequestUrl = 'http://localhost:8080/loanrequest';
  }

  public addLoanrequest(loanrequest) {
    return this.httpClient.post<Loanrequest>(this.loanrequestUrl, loanrequest);
  }

  public save(loanrequest: Loanrequest) {
    return this.httpClient.post<Loanrequest>(this.loanrequestUrl, loanrequest);
  }

}
