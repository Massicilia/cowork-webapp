import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Booking } from '../model/booking';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookingUrl: string;
  constructor(private http: HttpClient) {
    this.bookingUrl = 'http://localhost:8080/book';
  }

  public findAll(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.bookingUrl);
  }

  public save(booking: Booking) {
    return this.http.post<Booking>(this.bookingUrl, booking);
  }
}



