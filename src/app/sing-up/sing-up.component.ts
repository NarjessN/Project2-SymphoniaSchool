import { Component, OnInit, ViewChild, Query } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { NgbCheckBox } from '@ng-bootstrap/ng-bootstrap';
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { Options } from 'selenium-webdriver/chrome';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { global_var } from 'global_var';


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
 private male_school_type : Boolean ;
 private female_school_type : Boolean;
 private first_study_level : Boolean ;
 private seconde_study_level : Boolean ;
 //private third_study_level : boolean ;
 private third_school_level_litt : Boolean;
 private third_school_level_SCi: Boolean  ;
//private third_school_level_SCi_litt : boolean ;
public  check_the_value  ;
 public last_value = false ;
 public counter=0;
  public temp; 
private rescponce_data :{}
private token : String 

  public passing_data = false  
public    array_for_input_field  =new Array<number>() ;
//private router: Router

pp
  //public  map: Map<String , any> = new Map<String,any>();
  constructor ( private http : HttpClient  , private  router : Router ,  private url_aravel : global_var) {
 
  }

  ngOnInit(): void {

  }

onSubmite(form: NgForm){
//console.log(this.singupform)
// this.http.post('https://symphonia-school.firebaseio.com/posts.json'
// ,form).subscribe(responseData =>{
//   console.log(responseData);
// } )


console.log(form)
if((form.controls.male.valid ||form.controls.femal_school_type.valid) 
&& (form.controls.frist_study_level.valid ||form.controls.seconde_study_level.valid
  || form.controls.third_school_level_litt.valid 
  ||form.controls.third_school_level_SCi.valid
    )
    && ( form.controls.email.valid) &&(form.controls.password.valid)
     &&(form.controls.confirmpassword.valid) &&(form.controls.password.value ===form.controls.confirmpassword.value)
     &&(form.controls.schooltelephone.valid) 
     //&&(form.controls.schooltelephone2.valid)
     &&(form.controls.schooladdress.valid)
)
{
  //this.sending_data(form);
  this.email=form.controls.email.value;
this.password=form.controls.password.value;
this.school_name=form.controls.schoolname.value;
this.first_telephone_number= form.controls.schooltelephone.value;
//this.seconde_telepjone_number = form.controls.schooltelephone2.value; 
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
if(this.male_school_type!=true)
{
  this.male_school_type=false
}
if(this.female_school_type!=true)
{
  this.female_school_type=false 
}
if(this.first_study_level!=true)
{this.first_study_level=false }
if(this.seconde_study_level!=true)
{this.seconde_study_level=false }
if(this.third_school_level_SCi!=true)
{this.third_school_level_SCi=false}
if(this.third_school_level_litt!=true)
{this.third_school_level_litt=false }
this.temp ={email: this.email,password:this.password,name:this.school_name, 
  address: this.school_address,
phone_number : this.first_telephone_number,
//seconde_school_telephone:this.seconde_telepjone_number,
male_school_type: this.male_school_type,
femal_school_type : this.female_school_type,
first_school_level: this.first_study_level,
seconde_school_level: this.seconde_study_level,
third_school_level_litt: this.third_school_level_litt,
third_school_level_sci : this.third_school_level_SCi,
}


   this.sending_data();
   console.log(this.temp)
}


}

data_should_pass()
{
  this.passing_data = true ;
}
sending_data(){
  this.http.post(this.url_aravel.urlsingup,
  this.temp,{observe: 'response'}).subscribe(responseData =>{
    console.log(responseData.status );
    if(responseData.status===200)
    {
      this.token=responseData.body['token']
    
    this.token = responseData.body['token']
    this.rescponce_data={ token : this.token}
    this.router.navigate(['/school/' ,this.token ,'schoolposts'],{queryParams:this.rescponce_data});
    }
  if(responseData.status === 500)
  {
    
  }
  } )  ;
}
}
