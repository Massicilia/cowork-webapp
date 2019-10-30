import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loanrequest-creation',
  templateUrl: './loanrequest-creation.component.html',
  styleUrls: ['./loanrequest-creation.component.scss']
})
export class LoanrequestCreationComponent implements OnInit {

  private _userName:string = 'Potter';
  private _userSurname:string = 'Harry';
  private _typeEquipment:string = 'Ordinateur';
  private _loanStartDay:string = '25-09-2019';
  private _loanEndDay:string = '31-10-2019';
  constructor() { }

  ngOnInit() {
  }


  getUserName(): string {
    return this._userName;
  }

  getUserSurname(): string {
    return this._userSurname;
  }

  getTypeEquipment(): string {
    return this._typeEquipment;
  }

  getLoanStartDay(): string {
    return this._loanStartDay;
  }

  getLoanEndDay(): string {
    return this._loanEndDay;
  }
}
