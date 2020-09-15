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
  private   all_school_info : {}
     token :String 
     id :String 
     email:String 
       password : String 
        schoolname :String  
       male_school: Boolean 
     femaleschool: Boolean 
    first_school_level_study:Boolean 
  seconde_school_level :Boolean 
  third_level_sturdyLII:Boolean 
  third_level_study_sci :Boolean 
  third_level_study_lii_sci:Boolean
  post_number:Number 
  post_list :String 

 
 //private temp : {email : String }
  constructor( private route : ActivatedRoute , private routing : Router ) { }

  ngOnInit(){
   //this.all_school_info=this.route.snapshot.params['schoolinfo']
   this.route.params.subscribe(( params: Params)  =>{
 this.token=params['schoolinfo']
  console.log("what er get the data "+this.token)   
  })
//  this.subscreption = this.route.params.subscribe((params :Params)=>{this.temp.})
// console.log(this.temp)
this.route.queryParams.subscribe((params:Params )=>{
  // console.log( "what we will get here "+params['email'])
 this.id= params['id']
 console.log("what we get id "+ this.id)
})
this.all_school_info={
  token :this.token,
  id :this.id
}
console.log(this.all_school_info['token'])
console.log(this.all_school_info['id'])
}
sending_data(){
  // changing it we shouls pass an object
  this.routing.navigate(['/school/schoolprofile/' ,this.all_school_info['id']]);
  
}
sittings(){
this.routing.navigate(['school/schoolsitting/',this.all_school_info['token']])
}
}








  
























