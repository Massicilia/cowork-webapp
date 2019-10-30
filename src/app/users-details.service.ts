import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersDetailsService {

  constructor(private http: HttpClient) { }

  getUsers() {
    const url = 'http://localhost:8080/user/users';
    return this.http.get(url);
  }
}
