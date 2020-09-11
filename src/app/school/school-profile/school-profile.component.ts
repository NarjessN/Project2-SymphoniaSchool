import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-school-profile',
  templateUrl: './school-profile.component.html',
  styleUrls: ['./school-profile.component.css']
})
export class SchoolProfileComponent implements OnInit {

profile:{email:String , password : String  , schoolname :String , male_school: Boolean 
  , femaleschool: Boolean 
  ,first_school_level_study:Boolean ,
seconde_school_level :Boolean ,
third_level_sturdyLII:Boolean ,
third_level_study_sci :Boolean ,
third_level_study_lii_sci:Boolean
}
temp:{email :String }
  constructor(private route : ActivatedRoute ) { }

  ngOnInit(): void {
    this.temp={email:this.route.snapshot.params['email']}
    this.route.params.subscribe((para :Params)=>{this.temp.email=para['email']})
   // console.log(this.temp.email)
  }
write_it(){
  return this.profile.email
}
}
