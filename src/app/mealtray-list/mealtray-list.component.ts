import { Component, OnInit } from '@angular/core';
import { Mealtray } from '../model/mealtray';
import { MealtrayService } from '../service/mealtray.service';

@Component({
  selector: 'app-mealtray-list',
  templateUrl: './mealtray-list.component.html',
  styleUrls: ['./mealtray-list.component.css']
})
export class MealtrayListComponent implements OnInit {

  mealtrays: Mealtray[];
  constructor(private mealtrayService: MealtrayService) { }

  ngOnInit() {
    this.mealtrayService.findAll().subscribe(data => {
      this.mealtrays = data;
    })
  }
  getToday(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();


    //today = yyyy + '-' + mm + '-' + dd;
    //return today;
  }


}


