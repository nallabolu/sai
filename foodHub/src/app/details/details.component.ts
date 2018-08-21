import { Component, OnInit } from '@angular/core';
import { Resturant } from '../resturant';
import { CatalogApiService } from '../catalog-api.service';
import { Catalog } from '../catalog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  trendingList: Resturant[];
  icecreamList: Catalog[];
  constructor(private service: CatalogApiService) {
    const karbakery = { id: 101, name: 'Karachi Bakery', status: 'open', rating: 4.5, image: 'assets/images/kara.png' };
    const Paradisebakery = { id: 102, name: 'Paradise Bakery', status: 'open', rating: 5.0, image: 'assets/images/para.jpg' };
    const shahgousebakery = { id: 103, name: 'Shah Gouse Bakery', status: 'close', rating: 3.5, image: 'assets/images/shah.jpg' };
    const Luckybakery = { id: 104, name: 'Lucky Bakery', status: 'open', rating: 3.0, image: 'assets/images/luc.jpg' };

    this.trendingList = [karbakery, Paradisebakery, shahgousebakery, Luckybakery];


  }

  ngOnInit() {
    this.service.findAll().subscribe(data => this.icecreamList = data);
  }

}
