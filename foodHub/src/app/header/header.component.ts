import { Component, OnInit } from '@angular/core';
import { NavLink } from '../nav-link';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mainTitle = 'Food Hub';
  PageHeadLinks: NavLink[] = [
    { link: '/Login', text: 'Login' },
    { link: '/Home', text: 'Home' },
    { link: '/Resturant', text: 'Resturant' },
    { link: '/Details', text: 'Details' },
    { link: '/OrderHistory', text: 'Order History' },
    { link: '/food', text: 'Order Food' }

  ];
  constructor() { }

  ngOnInit() {
  }

}
