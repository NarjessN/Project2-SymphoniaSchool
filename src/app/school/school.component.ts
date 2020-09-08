import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  @Input() all_school_info={email:String , password : String  , schoolname :String , male_school: Boolean 
    , femaleschool: Boolean 
    ,first_school_level_study:Boolean ,
  seconde_school_level :Boolean ,
  third_level_sturdyLII:Boolean ,
  third_level_study_sci :Boolean ,
  third_level_study_lii_sci:Boolean,
  post_number:Number ,
  post_list :String ,

  }
  constructor() { }

  ngOnInit(): void {
  }









  























}
