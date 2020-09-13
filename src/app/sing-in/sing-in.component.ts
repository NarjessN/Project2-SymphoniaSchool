import { Component, OnInit, ElementRef } from '@angular/core';
import {NgForm, NgModel } from '@angular/forms'
import { __values } from 'tslib';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global_var } from 'global_var';


@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css'],
})

export class SingInComponent  {
  private email 
  private password 
  private temp;
  constructor(private http : HttpClient, private url_aravel : global_var) {
   
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
  console.log()
this.email=form.controls.email.value;
this.password=form.controls.password.value
this.temp ={email: this.email , password : this.password}
 this.http.post(this.url_aravel.urlsingin
  ,this.temp).subscribe(responseData =>{
    console.log(responseData);
 } )
}
}
  
