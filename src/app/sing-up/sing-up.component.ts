import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  constructor ( private http : HttpClient) { }

  ngOnInit(): void {
  }
onSubmite(form: NgForm){
console.log(form)
// this.http.post('https://symphonia-school.firebaseio.com/posts.json'
// ,form).subscribe(responseData =>{
//   console.log(responseData);
// } )
}
}
