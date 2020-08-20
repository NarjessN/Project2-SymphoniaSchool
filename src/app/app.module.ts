import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SchoolComponent } from './school/school.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutComponent } from './school/about/about.component';
import { SchoolPostsComponent } from './school/school-posts/school-posts.component';


const app_router :Routes=[
{path:'introduction' ,component: IntroductionComponent},
{path: 'sing-in', component :SingInComponent},
{path:'sing-up',component:SingUpComponent},
{path:'school',component:SchoolComponent},
];
@NgModule({
  declarations: [
    AppComponent,
     SingUpComponent,
     SingInComponent,
     SchoolComponent,
     IntroductionComponent,
     AboutComponent,
     SchoolPostsComponent,
    
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(app_router),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
