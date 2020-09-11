import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute , Params, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

   all_school_info : {
     email:String 
      , password : String 
       , schoolname :String , 
       male_school: Boolean 
    , femaleschool: Boolean 
    ,first_school_level_study:Boolean ,
  seconde_school_level :Boolean ,
  third_level_sturdyLII:Boolean ,
  third_level_study_sci :Boolean ,
  third_level_study_lii_sci:Boolean,
  post_number:Number ,
  post_list :String ,
  }
 
temp : {email : String }
  constructor( private route : ActivatedRoute) { }

  ngOnInit(){
    //this.temp={ email : this.route.snapshot.params['schoolinfo']}
    this.temp=this.route.snapshot.params['schoolinfo']
   this.route.params.subscribe(( params: Params)  =>{
     this.temp.email=params['schoolinfo'];
  })
 

console.log(this.temp.email);
}
}








  
























