import { Component, OnInit } from '@angular/core';
import {MatDateFormats} from "@angular/material";
import { AuthentificationService } from '../service/authentification.service';

export const MY_FORMAT: MatDateFormats = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'YYYY-MM-DD',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.css']
})
export class HearderComponent implements OnInit {

  title = 'CO\' WORK';
  constructor(private loginService: AuthentificationService ) { }

  ngOnInit() {
  }

}
