import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  socialItem = [{ name: 'Facebook', class: 'fa fa-facebook-square' },
  { name: 'Google', class: 'fa fa-google' },
  { name: 'WhatsApp', class: 'fa fa-instagram' }];
  partners = ['Zomato', 'Swiggy', 'Food Panda'];
  constructor() { }

  ngOnInit() {
  }

}
