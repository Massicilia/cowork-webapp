import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  username = 'test'
  password = ''
  invalidLogin = false
  constructor(private router: Router,
              private loginservice: AuthentificationService) { }

  ngOnInit() {
  }


  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false;
    } else
      this.invalidLogin = true;
  }

}
