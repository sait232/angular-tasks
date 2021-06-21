import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
  import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserInfosComponent } from './user-infos/user-infos.component';



@NgModule({
  declarations: [
    AppComponent,
     HeaderComponent,
     FooterComponent,
    
     UserInfosComponent,
  
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   
    ReactiveFormsModule,FormsModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
