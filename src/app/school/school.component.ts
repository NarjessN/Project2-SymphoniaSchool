import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute , Params, NavigationExtras, Router} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
subscreption : Subscription
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
 
 private temp : {email : String }
  constructor( private route : ActivatedRoute , private routing : Router ) { }

  ngOnInit(){
    this.temp={ email : this.route.snapshot.params['schoolinfo']}

   this.route.params.subscribe(( params: Params)  =>{
     this.temp.email=params['schoolinfo'];
  })
//  this.subscreption = this.route.params.subscribe((params :Params)=>{this.temp.})
console.log(this.temp.email)

}
sending_data(){
  this.routing.navigate(['/school/schoolprofile/' ,this.temp.email]);
  
}
}








  
























