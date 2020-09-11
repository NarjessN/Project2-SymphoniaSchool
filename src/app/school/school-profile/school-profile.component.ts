import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-school-profile',
  templateUrl: './school-profile.component.html',
  styleUrls: ['./school-profile.component.css']
})
export class SchoolProfileComponent implements OnInit {

@Input()profile:{email:String , password : String  , schoolname :String , male_school: Boolean 
  , femaleschool: Boolean 
  ,first_school_level_study:Boolean ,
seconde_school_level :Boolean ,
third_level_sturdyLII:Boolean ,
third_level_study_sci :Boolean ,
third_level_study_lii_sci:Boolean
}
  constructor() { }

  ngOnInit(): void {
  }
write_it(){
  return this.profile.email
}
}
