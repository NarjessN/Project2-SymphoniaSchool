import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolProfileComponent } from './school-profile.component';

describe('SchoolProfileComponent', () => {
  let component: SchoolProfileComponent;
  let fixture: ComponentFixture<SchoolProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
