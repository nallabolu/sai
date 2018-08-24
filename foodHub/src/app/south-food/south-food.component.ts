import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-south-food',
  templateUrl: './south-food.component.html',
  styleUrls: ['./south-food.component.css']
})
export class SouthFoodComponent implements OnInit {

  southMenu = [{ 'code': 101, 'type': 'BreakFast' },
  { 'code': 102, 'type': 'Lunch' },
  { 'code': 103, 'type': 'Dinner' },
  { 'code': 104, 'type': 'Mid-Night' },

  ];
  constructor() { }

  ngOnInit() {
  }

}
