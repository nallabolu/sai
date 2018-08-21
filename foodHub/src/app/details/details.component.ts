import { Component, OnInit } from '@angular/core';
import { Resturant } from '../resturant';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  trendingList: Resturant[];
  constructor() {
    const karbakery = { id: 101, name: 'Karachi Bakery', status: 'open', rating: 4.5, image: 'assests/images/kara.png' };
    const Paradisebakery = { id: 102, name: 'Paradise Bakery', status: 'open', rating: 5.0, image: 'assests/images/para.jpg' };
    const shahgousebakery = { id: 103, name: 'Shah Gouse Bakery', status: 'close', rating: 3.5, image: 'assests/images/shah.jpg' };
    const Luckybakery = { id: 104, name: 'Lucky Bakery', status: 'open', rating: 3.0, image: 'assests/images/luc.jpg' };

    this.trendingList = [karbakery, Paradisebakery, shahgousebakery, Luckybakery];


  }

  ngOnInit() {
  }

}