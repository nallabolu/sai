import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.css']
})
export class DistributorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getDistributors(): string[] {
    return ['Sun Pharma', 'Dr. Reddys', 'Lupin', 'Glenmark', 'Mankind'];
  }
}
