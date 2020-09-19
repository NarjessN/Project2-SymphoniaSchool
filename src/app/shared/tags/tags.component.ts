import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';



@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})

export class TagsComponent implements OnInit {
  
  
  stageName : string ;
  school_stage : any ;
  listResult : any ;
  selected_school_stage : string ;
  school_subjects = {
    "المرحلة الابتدائية" : ["الرياضيات", "الموسيقا"],
    "المرحلة الاعدادية" : ["الجبر","اللغة العربية"],
    "المرحلة الثانوية" : ["الكيمياء"]
    
  }


  ;

  constructor() {

    
    
  }
  
  ngOnInit(): void {
    this.school_stage = Object.keys(this.school_subjects);    

  }
  subjectSearch(searchValue: string){
        this.stageSelect();
        this.listResult = this.school_subjects[this.stageName] ;
        this.listResult =  this.listResult.filter(filt => {
          if(!filt.includes(searchValue)){
          
              return false;
          }
          else{
            return true
          }
          

        })


  }
  stageSelect(){
    
    let stagenumber = parseInt(this.selected_school_stage) ;
    for (let index = 0; index <  this.school_stage.length ;index++ ){
      if(stagenumber === index)
      {
        this.stageName= this.school_stage[index];
        this.listResult = this.school_subjects[this.stageName] ;
          break;
        }
    }  
  }
  is_selected() : boolean{
    if(this.selected_school_stage != null){
      return false;
    }
      else 
        return true;
  }
}
