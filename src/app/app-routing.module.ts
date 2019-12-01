import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { LoanrequestComponent } from './loanrequest/loanrequest.component';
import { MealtrayListComponent } from './mealtray-list/mealtray-list.component';
import {MealtrayFormComponent} from "./mealtray-form/mealtray-form.component";
import {BookingComponent} from "./booking/booking.component";
import {AuthComponent} from "./auth/auth.component";
import {LogoutComponent} from "./logout/logout.component";

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'loanrequest', component: LoanrequestComponent },
  { path: 'mealtrayorder', component: MealtrayListComponent },
  { path: 'mealtrayorder/'+ Date.now(), component: MealtrayFormComponent },
  { path: 'book', component: BookingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
