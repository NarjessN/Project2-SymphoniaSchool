import { Component, ErrorHandler } from '@angular/core';
import {NgForm } from '@angular/forms'
import { __values } from 'tslib';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { global_var } from 'global_var';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css'],
})

export class SingInComponent  {
  private email  :String 
  private password :String 
  private temp :{};
private err:{};
   token : String 
   responce_status : Number 
  constructor(private http : HttpClient, private url_aravel : global_var , private router : Router) {
   
  }

  ngOnInit(): void {
  }
 
//   onSubmite(form: NgForm){
//    console.log(form);
    
// //     let temp ={"email": this.email,"password":this.password}
// //     // for (let member in temp) {
// //     //   this.map.set(member, temp[member]);
// //     // }
// //   console.log(this.map);
// //     // mymap.set("email",form.controls.email.value);
// //      //mymap.set("password",form.controls.password.value);
// //      /*for (let key of mymap.keys()) {  
// //       console.log("Map Keys= " +key);          
// //   } */
// //   /*  for (let value of  mymap.values()) {  
// //     console.log("Map Values= " +value);      
// // }  */

   
// //    // console.log(form.controls.email.value);
// //     //console.log(form.controls.password.value);

// //     //const temp=form.value;
// // //this.Map["email"]=form.controls.email.value;
// // //this.Map["password"]=form.controls.password.value;
// // //console.log(this.Map["email"]);
// //    // console.log( temp);
// //  //this.http.post('http://authentication-2c48e.firebaseapp.com',temp).subscribe(
// //    //responseData =>{console.log(responseData)});
   
// //    //const  myObjStr  = JSON.stringify(temp);
// //    //console.log(myObjStr);
// //   //  let p = new HttpHeaders({headers:"Access-Control-Allow-Origin': 'https://symphonia-school.firebaseapp.com/__/auth/handler"})
// //    this.http.post('https://symphonia-school.firebaseapp.com/__/auth/handler',
// //    temp).subscribe(responseData =>{
// //      console.log(responseData);
// //    } )  ;
  
// }

onSubmite(form: NgForm){
  //console.log(this.singupform)
  // this.http.post('https://symphonia-school.firebaseio.com/posts.json'
  // ,form).subscribe(responseData =>{
  //   console.log(responseData);
  // } )
  if(form.controls.email.valid && form.controls.password.valid)
{this.email=form.controls.email.value;
this.password=form.controls.password.value
this.temp ={email: this.email , password : this.password}
 this.http.post(this.url_aravel.urlsingin
  ,this.temp,{observe: 'response'}).subscribe(responseData =>{

if(responseData.status === 200)
{
   this.temp = responseData.body
this.token=this.temp['token']
console.log(this.token)
  this.router.navigate(['/school/' ,this.token ,'schoolposts']);

}
 }
 ,error =>{
  if(error.status ===400)
  {

}
 } );

}

}
}
  
