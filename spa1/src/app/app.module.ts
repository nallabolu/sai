import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { CustomerModule } from './customer/customer.module';
import { ShowlistComponent } from './customer/showlist/showlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent, ShowlistComponent]
})
export class AppModule { }
