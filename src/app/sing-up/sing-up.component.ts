import { Component, OnInit, ViewChild, Query } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { NgbCheckBox } from '@ng-bootstrap/ng-bootstrap';
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { Options } from 'selenium-webdriver/chrome';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
@ViewChild('f') singupform : NgForm
  private email : String ;
  private password : String ;
 private school_name : String ;
 private first_telephone_number : String;
 private seconde_telepjone_number : String ;
 private school_address : String 
 private male_school_type : boolean ;
 private female_school_type : boolean;
 private first_study_level : boolean ;
 private seconde_study_level : boolean ;
 //private third_study_level : boolean ;
 private third_school_level_litt : boolean;
 private third_school_level_SCi: boolean  ;
//private third_school_level_SCi_litt : boolean ;
public  check_the_value  ;
 public last_value = false ;
 public counter=0;
  public temp 

  public passing_data = false  
public    array_for_input_field  =new Array<number>() ;
//private router: Router

pp
  //public  map: Map<String , any> = new Map<String,any>();
  constructor ( private http : HttpClient  , private  router : Router) {
 
  }

  ngOnInit(): void {

  }

onSubmite(form: NgForm){
//console.log(this.singupform)
// this.http.post('https://symphonia-school.firebaseio.com/posts.json'
// ,form).subscribe(responseData =>{
//   console.log(responseData);
// } )


if((form.controls.male.valid ||form.controls.femal_school_type.valid) 
&& (form.controls.frist_study_level.valid ||form.controls.seconde_study_level.valid
  || form.controls.third_school_level_litt.valid 
  ||form.controls.third_school_level_SCi.valid
    )
    && ( form.controls.email.valid) &&(form.controls.password.valid)
     &&(form.controls.confirmpassword.valid) &&(form.controls.password.value ===form.controls.confirmpassword.value)
     &&(form.controls.schooltelephone.valid) 
     &&(form.controls.schooltelephone2.valid)
     &&(form.controls.schooladdress.valid)
)
{
  //this.sending_data(form);
  this.email=form.controls.email.value;
this.password=form.controls.password.value;
this.school_name=form.controls.schoolname.value;
this.first_telephone_number= form.controls.schooltelephone.value;
this.seconde_telepjone_number = form.controls.schooltelephone2.value;
this.male_school_type=form.controls.male.value;
this.female_school_type = form.controls.femal_school_type.value;
this.school_address=form.controls.schooladdress.value;
this.first_study_level=form.controls.frist_study_level.value;
this.seconde_study_level = form.controls.seconde_study_level.value;
//this.third_study_level = form.controls.third_school_level.value;
this.third_school_level_litt= form.controls.third_school_level_litt.value;
this.third_school_level_SCi = form.controls.third_school_level_SCi.value;
//this.third_school_level_SCi_litt = form.controls.third_school_level_SCi_litt.value;
//this.schoolame=form.controls
this.temp ={"email": this.email,"password":this.password,"school_name":this.school_name, 
"school_address": this.school_address,
"first_school_telephone" : this.first_telephone_number,
"seconde_telephone_number":this.seconde_telepjone_number,
"male_school_type": this.male_school_type,
"female_school_type" : this.female_school_type,
"first_study_level": this.first_study_level,
"seconde_study_level": this.seconde_study_level,
//"third_study_level" : this.third_study_level,
"third_school_level_litt": this.third_school_level_litt,
"third_school_level_SCi" : this.third_school_level_SCi,
//"third_school_level_SCi_litt":this.third_school_level_SCi_litt
} 
/* for (let member in temp) {
      this.map.set(member, temp[member]);

    } 
  
    console.log(this.map) */

  //  console.log(JSON.stringify(temp))
    this.check_the_value=true 
 
   // this.sending_data();
   console.log(this.temp)
}
else {
 return " the data will not me sending there is still missing value we have " 
}

}
/*erro_input(  ){

this.check_the_value=false ;
return this.check_the_value
}
correct_input()
{
 
  this.check_the_value=true;
  console.log(this.check_the_value)
 // this.array_for_input_field.push(this.check_the_value);
//this.counter++;
//console.log(this.counter);
/*if(this.counter===this.array_for_input_field.length)
{
  this.last_value=true ;
  return this.check_the_value
}*/
data_should_pass()
{
  this.passing_data = true ;
}
sending_data(){
 // console.log(" we are in the sebding data function ")
 this.passing_data=true;
 let p = new HttpHeaders({headers:"Access-Control-Allow-Origin': 'https://symphonia-school.firebaseapp.com/__/auth/handler"})
  this.http.post('https://symphonia-school.firebaseapp.com/__/auth/handler',
  JSON.stringify(this.temp),{headers : p }).subscribe(responseData =>{
    console.log(responseData);
  } )  ;
// this.router.navigate(['/school/',this.temp.email,'schoolposts'])

this.router.navigate(['/school/' ,this.temp.email ,'schoolposts']);
}
}
