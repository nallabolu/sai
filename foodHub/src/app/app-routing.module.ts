import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResturantComponent } from './resturant/resturant.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { DetailsComponent } from './details/details.component';
import { OrderComponent } from './order/order.component';
import { UniversalGuardGuard } from './universal-guard.guard';
import { FoodComponent } from './food/food.component';
import { NorthFoodComponent } from './north-food/north-food.component';
import { SouthFoodComponent } from './south-food/south-food.component';

const routes: Routes =
  [{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'Home', component: DetailsComponent },
  { path: 'Resturant', component: ResturantComponent },
  {
    path: 'food', component: FoodComponent, children: [
      { path: 'north', component: NorthFoodComponent },
      { path: 'south', component: SouthFoodComponent }]
  },
  { path: 'Resturant', component: ResturantComponent },
  { path: 'Details', component: OrderComponent },
  { path: 'OrderHistory', component: OrderHistoryComponent, canActivate: [UniversalGuardGuard] },
  { path: 'Login', component: LoginComponent },
  { path: 'Login/:next', component: LoginComponent },
  { path: '**', redirectTo: 'Login' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
