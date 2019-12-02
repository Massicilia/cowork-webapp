import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loanrequest } from '../model/loanrequest';
import { LoanrequestService } from '../service/loanrequest.service';
import {DatePipe} from "@angular/common";
import {DateAdapter} from "@angular/material";
import {MAT_DATE_FORMATS} from "@angular/material/core";
import {APP_DATE_FORMATS, AppDateAdapter} from "../service/datepicker-format";

@Component({
  selector: 'app-loanrequest',
  templateUrl: './loanrequest.component.html',
  styleUrls: ['./loanrequest.component.css'],
  providers: [
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})

export class LoanrequestComponent implements OnInit {


  loanrequest: Loanrequest = new Loanrequest('', '', '', '', '');
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loanrequestService: LoanrequestService) {
    this.loanrequest = new Loanrequest('', '', '', '', '');
  }

  onSubmit() {
    this.loanrequestService.save(this.loanrequest).subscribe(
      (val: any) => {
        console.log('response: ');
        console.log(val);
        if (val.status === '200') {
          console.log('OK');
        }
      }
  );
  }
    addLoanrequest(): void {
      this.loanrequestService.addLoanrequest(this.loanrequest)
      .subscribe( data => {
        alert('The loan request is sent');
      });

  };


  /*gotoLoanrequestList() {
    this.router.navigate(['/users']);
  }*/


  ngOnInit() {

  }

}
