import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { FormsModule } from '@angular/forms';

const app_router :Routes=[
{path:'' ,component: AppComponent},
{path: 'sing-in', component :SingInComponent},
{path:'sing-up',component:SingUpComponent}
];
@NgModule({
  declarations: [
    AppComponent,
     SingUpComponent,
     SingInComponent,
     BasicInformationComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(app_router),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
