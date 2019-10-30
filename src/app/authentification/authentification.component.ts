import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  @Input() _username:string;
  @Input() _password:string;
  private isAuth = false ;
  constructor() { }

  ngOnInit() {
  }

  getUsername(): string {
    return this._username;
  }

  getPassword(): string {
    return this._password;
  }

  onSignIn() {
    console.log('On allume tout !');
  }
}
