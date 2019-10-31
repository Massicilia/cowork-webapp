import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {

  User: any = [];
  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadUsers()
  }

  // Get users list
  loadUsers() {
    return this.restApi.getUsers().subscribe((data: {}) => {
      console.log('LOADUSERS TS ' + data);
      this.User = data;
    })
  }

  // delete user
  deleteUser(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteUser(id).subscribe(data => {
        this.loadUsers()
      })
    }
  }
}
