import { Component, OnInit, ElementRef } from '@angular/core';
import {NgForm, NgModel } from '@angular/forms'

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css'],
})

export class SingInComponent  {

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(form :NgForm){
console.log(form);
}
}
