import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DistributorsComponent } from './distributors/distributors.component';
import { SalesmenComponent } from './salesmen/salesmen.component';
import { SiblingComponent } from './sibling/sibling.component';
import { HighlightDirective } from './highlight.directive';
import { ShipDetailsComponent } from './ship-details/ship-details.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { FilterPipe } from './filter.pipe';
import { LoginComponent } from './login/login.component';
import { ResturantComponent } from './resturant/resturant.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailsComponent,
    FooterComponent,
    MenuComponent,
    OrderComponent,
    ParentComponent,
    ChildComponent,
    DistributorsComponent,
    SalesmenComponent,
    SiblingComponent,
    HighlightDirective,
    ShipDetailsComponent,
    OrderHistoryComponent,
    FilterPipe,
    LoginComponent,
    ResturantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [HttpClient],
  entryComponents: [ShipDetailsComponent],
  bootstrap: [AppComponent, LoginComponent]

  // bootstrap: [AppComponent]
})
export class AppModule { }
