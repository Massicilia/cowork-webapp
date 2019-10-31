import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { AuthentificationComponent } from '../authentification/authentification.component';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // get users list
  getUsers(): Observable<User> {
    console.log('GETUSERS RESTAPI');
    return this.http.get<User>(this.apiURL + '/user/users')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // get user by id
  getUser(id): Observable<User> {
    return this.http.get<User>(this.apiURL + '/user/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // create user
  insertUser(user): Observable<User> {
    return this.http.post<User>(this.apiURL + '/user/insert', JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // authentification
  auth(auth): Observable<AuthentificationComponent> {
    return this.http.put<AuthentificationComponent>(this.apiURL + '/user/', JSON.stringify(auth), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // delete user
  deleteUser(id): Observable<User> {
    return this.http.delete<User>(this.apiURL + '/user/delete' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
