import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  private uuid:string = 'uuid';
  constructor(private http: HttpClient) { }

  getUser() {
    const url = 'http://localhost:8080/user/' + this.uuid;
    return this.http.get(url);
  }//testgithub
}
