import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealtrayFormComponent } from './mealtray-form.component';

describe('MealtrayFormComponent', () => {
  let component: MealtrayFormComponent;
  let fixture: ComponentFixture<MealtrayFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealtrayFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealtrayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
