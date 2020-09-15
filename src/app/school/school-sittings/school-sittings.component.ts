import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-school-sittings',
  templateUrl: './school-sittings.component.html',
  styleUrls: ['./school-sittings.component.css']
})
export class SchoolSittingsComponent implements OnInit {
private token : String 
  constructor( private route : ActivatedRoute) { }
 public male_schoolp_type= true    
 public  b 
  ngOnInit(): void {
    this.route.params.subscribe(( params: Params)  =>{
      this.token=params['token']
      console.log(this.token)
       })
  }
  getdetails(){
    if(this.male_schoolp_type ===true)
    {
      this.b = true 
    }
    else {this.b = false }


    return this.b 
  }
  onSubmite(form: NgForm){
    this.male_schoolp_type=form.controls.male.value;
  }
 
}
