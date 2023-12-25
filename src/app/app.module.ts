import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import{ FormsModule}from '@angular/forms';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { FirstpageComponent } from './firstpage/firstpage.component';

const routes:Routes=[
  {path:'second',component:SecondpageComponent},
  {path:'',component:FirstpageComponent},
  {path:'third',component:ThirdpageComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    SecondpageComponent,
    ThirdpageComponent,
    FirstpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
