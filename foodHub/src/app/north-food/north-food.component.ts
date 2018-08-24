import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-north-food',
  templateUrl: './north-food.component.html',
  styleUrls: ['./north-food.component.css']
})
export class NorthFoodComponent implements OnInit {

  northMenu = [{ 'code': 101, 'type': 'North - BreakFast' },
  { 'code': 102, 'type': 'Lunch' },
  { 'code': 103, 'type': 'Dinner' },
  { 'code': 104, 'type': 'Mid-Night' },

  ];
  constructor() { }

  ngOnInit() {
  }

}
