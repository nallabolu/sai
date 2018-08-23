import { Component, OnInit } from '@angular/core';
import { OrderHistory } from '../order-history';
import { CatalogApiService } from '../catalog-api.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  srchCondition = '';
  orderHistory: OrderHistory[];
  constructor(private service: CatalogApiService) { }

  ngOnInit() {
    this.service.findOrder().subscribe(resp => this.orderHistory = resp);
  }

}
