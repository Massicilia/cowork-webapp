import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LoanrequestCreationComponent } from './loanrequest-creation/loanrequest-creation.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user/auth'},
  { path: 'user/auth', component: AuthentificationComponent},
  { path: 'user/users', component: UsersDetailsComponent},
  { path: 'user/:uuid', component: UserDetailsComponent},
  { path: 'loanrequest', component: LoanrequestCreationComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
