import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolPostsComponent } from './school-posts.component';

describe('SchoolPostsComponent', () => {
  let component: SchoolPostsComponent;
  let fixture: ComponentFixture<SchoolPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
