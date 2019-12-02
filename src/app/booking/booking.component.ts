import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../service/booking.service';
import { Booking } from '../model/booking';
import {MAT_DATE_FORMATS} from "@angular/material/core";
import {APP_DATE_FORMATS, AppDateAdapter} from "../service/datepicker-format";
import {DateAdapter} from "@angular/material";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers: [
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})
export class BookingComponent{

  booking: Booking;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookingService: BookingService) {
    this.booking = new Booking();
  }

  onSubmit() {
    this.bookingService.save(this.booking).subscribe(result => this.gotoBookingList());
  }

  gotoBookingList() {
    this.router.navigate(['/book']);
  }

  ngOnInit() {
  }

}
