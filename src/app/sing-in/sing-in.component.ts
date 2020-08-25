import { Component, OnInit, ElementRef } from '@angular/core';
import {NgForm, NgModel } from '@angular/forms'
import { __values } from 'tslib';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css'],
})

export class SingInComponent  {
  private email : String ;
  private password : String ;

 private Map <String , dynamic> (authdata): any {
'email';
'password';
 } ;
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }
 
  onSubmit(form :NgForm){
    console.log(form);
  temp : JSON;
    const temp=form.value;
   // console.log( temp);
 //this.http.post('http://authentication-2c48e.firebaseapp.com',temp).subscribe(
   //responseData =>{console.log(responseData)});

    
}
}
