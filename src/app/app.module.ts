import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AppComponent, MY_FORMAT} from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './service/user.service';
import { LoanrequestComponent } from './loanrequest/loanrequest.component';
import { LoanrequestService } from './service/loanrequest.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material";
import { DatePipe } from '@angular/common';
import { MealtrayListComponent } from './mealtray-list/mealtray-list.component';
import { MealtrayFormComponent } from './mealtray-form/mealtray-form.component';
import { BookingComponent } from './booking/booking.component';
import {MealtrayService} from "./service/mealtray.service";
import {BookingService} from "./service/booking.service";
import { AuthComponent } from './auth/auth.component';
import { LogoutComponent } from './logout/logout.component';
import { HearderComponent } from './hearder/hearder.component';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    LoanrequestComponent,
    MealtrayListComponent,
    MealtrayFormComponent,
    BookingComponent,
    AuthComponent,
    LogoutComponent,
    HearderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [UserService, LoanrequestService, MatDatepickerModule, DatePipe, BookingService, MealtrayService,
    {provide: MAT_DATE_LOCALE, useValue: MY_FORMAT}],
  bootstrap: [AppComponent]
})
export class AppModule { }

