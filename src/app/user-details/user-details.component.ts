import { UserDetailsService } from './../user-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user$: object;
  constructor(private data: UserDetailsService) { }


  ngOnInit() {
    this.data.getUser().subscribe(
      data => this.user$ = data
    );
  }

}
