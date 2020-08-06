import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
const app_router :Routes=[
{path:'' ,component: AppComponent},
{path: 'sing-in', component :SingInComponent},
{path:'sing-up',component:SingUpComponent}
];
@NgModule({
  declarations: [
    AppComponent,
     SingUpComponent,
     SingInComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(app_router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
