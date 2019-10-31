import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  User: any = [];
  id:string = '10000000-0001-0002-0003-000000000004';
  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadUser(this.id)
  }

  // Get user by id
  loadUser(id) {
    return this.restApi.getUser(id).subscribe((data: {}) => {
      this.User = data;
    })
  }
}
