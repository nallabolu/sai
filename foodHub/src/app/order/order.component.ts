import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  item: string;
  ItemList: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  submit(value) {

    if (this.item == null || this.item === '') {
      alert('Please enter proper value');
    } else {
      this.ItemList.push(this.item);
      this.item = '';
    }
  }
}
