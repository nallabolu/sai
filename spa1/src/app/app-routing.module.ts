import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShowlistComponent } from './customer/showlist/showlist.component';

const routes: Routes = [{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'showCust', component: ShowlistComponent },
{ path: 'contact', component: ContactComponent },
{ path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
