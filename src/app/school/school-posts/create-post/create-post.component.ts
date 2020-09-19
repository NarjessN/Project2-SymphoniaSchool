import { Component, OnInit ,NgModule, ViewChild, ElementRef  ,Directive} from '@angular/core';
import{NgForm}from'@angular/forms';
import { HttpHeaders , HttpClient , HttpClientModule   } from '@angular/common/http';
import { templateJitUrl } from '@angular/compiler';
import { element } from 'protractor';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})

export class CreatePostComponent implements OnInit {
  
    @ViewChild("p") p: ElementRef;

  notes = '';
  basic = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzc3YzhmYTc3YzkxMGQyOWU5ZjZmYTUyYmNiZjUwZmU5ZWE1NmNkOThlN2IwZDhlY2Y5MWIzNDc5MGJjMjhhMTU5OGQ1ZDFmOWMyN2MwNGMiLCJpYXQiOjE1OTk5MTEzMjYsIm5iZiI6MTU5OTkxMTMyNiwiZXhwIjoxNjMxNDQ3MzI2LCJzdWIiOiI4Iiwic2NvcGVzIjpbXX0.rOhjuFxzsYfsSI7SeWyU0JH6OdKnQyT2nsOs82vifA--DFrrdXHThip9Qt7OozyBBozVwKTGGvlqPBq6_gXOfl7RvWQOTkKdVLHWUJBD25gqVZZvivZ-W94PvKp80tkL7qLH_0McmRn1jh4qvqwlBJd52txVCya1yKlZHBy7ibI2BOM8EBl5XZM5Ulo8Z04a3tyIyA58TwP9vTbTAJC6XdhQM0r3w5lvQY4uVVrELAc-349XSCzPTivynB-GCPX18gVPspqvjeXm4WKaY0gi4KGXQTTWEJkep_tjlyg6QtZn0BlAGtMnqGmMrTZ1pbq_aYhmyhaouVBM6G-_VCGaGJsXvxu-50x_hkA-HYBulEYbSAIolaE7MU_6hEU6vsPxTHyYZn7A3Lly88Jt172vhfP2mFQCgSJQl9anqWajkpJvkV20EOpDds24UKwyfPRfRjbIqLqdkrOUHkStTDgFOFYiFu5KSQlYXP9UpMfLDynR5MMVnXDfftxY6he8WZwHyNStHjCt5xyo-z-5SXFo276j-ikINHceZp7QeJUT6vJ4lE-3MGnWRxrN3iOsgtE-g4eLvG8yuGRo_p5qlQuS81nKGYUjG0r7qkgBUFkMF0qJKwuFV99_WKnkMuubKI1ogz6twtlbX1mLS2wNUgpOspLGNpSo5BJsFX4r5_rL5o4';

   cric = [];
   
  constructor(private http : HttpClient ) { }

  ngOnInit(): void {
  }

  onPost(post : NgForm){

    
    
    const headers = {'Authorization':this.basic , 'Content-Type':'application/json'};
   let tempPost :  Post ;
   

   console.log('say '+this.p.nativeElement.value);
   tempPost.notes  = this.p.nativeElement.value;
   


    this.http.post('https://http://192.168.137.122:8000/api/createPost' , tempPost ,{headers}).subscribe(
      data =>{ console.log(data)} 
      , error => {console.log(error)});

  }

}
class Post {
  notes : string ;
}
