import { Component, OnInit ,NgModule } from '@angular/core';
import{NgForm}from'@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onPost(post : NgForm){
    
    
    console.log(post.value.postContent);
    

  }

}
