import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
// COMPONENTS
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoanrequestCreationComponent } from './loanrequest-creation/loanrequest-creation.component';
import { AuthentificationComponent } from './authentification/authentification.component';


@NgModule({
  declarations: [
    AppComponent,
    LoanrequestCreationComponent,
    AuthentificationComponent,
    UsersDetailsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
