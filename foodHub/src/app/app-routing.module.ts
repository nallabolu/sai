import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResturantComponent } from './resturant/resturant.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

const routes: Routes = [{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'Resturant', component: ResturantComponent },
{ path: 'OrderHistory', component: OrderHistoryComponent },
{ path: '**', redirectTo: 'Resturant' }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
