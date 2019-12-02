import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealtrayListComponent } from './mealtray-list.component';

describe('MealtrayListComponent', () => {
  let component: MealtrayListComponent;
  let fixture: ComponentFixture<MealtrayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealtrayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealtrayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
