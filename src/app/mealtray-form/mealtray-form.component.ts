import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealtrayService } from '../service/mealtray.service';
import { Mealtray } from '../model/mealtray';

@Component({
  selector: 'app-mealtray-form',
  templateUrl: './mealtray-form.component.html',
  styleUrls: ['./mealtray-form.component.css']
})
export class MealtrayFormComponent implements OnInit {


  mealtray: Mealtray;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mealtrayService: MealtrayService) {
    this.mealtray = new Mealtray();
  }

  onSubmit() {
    this.mealtrayService.save(this.mealtray).subscribe(result => this.gotoMealtrayList());
  }

  gotoMealtrayList() {
    this.router.navigate(['/mealtrayorder'+ '/' + Date.now()]);
  }
  ngOnInit() {
  }

}
