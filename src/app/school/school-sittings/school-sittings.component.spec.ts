import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSittingsComponent } from './school-sittings.component';

describe('SchoolSittingsComponent', () => {
  let component: SchoolSittingsComponent;
  let fixture: ComponentFixture<SchoolSittingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolSittingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolSittingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
