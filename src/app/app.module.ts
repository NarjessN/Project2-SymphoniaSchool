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
import { CreatePostComponent } from './school/school-posts/create-post/create-post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SchoolProfileComponent } from './school/school-profile/school-profile.component';


const app_router :Routes=[
{path:'' ,component: IntroductionComponent},
{path: 'sing-in', component :SingInComponent},
{path:'sing-up',component:SingUpComponent},
{path:'school',component:SchoolComponent},
{path:'school/schoolposts' ,component: SchoolPostsComponent},
{path: 'school/create-post',component : CreatePostComponent},
{path:'school/about' ,component: AboutComponent},
{path:'school/schoolprofile',component: SchoolProfileComponent}
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
     CreatePostComponent,
     SchoolProfileComponent,
    
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(app_router),
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
