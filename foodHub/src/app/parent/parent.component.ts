import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  name = 'crocin';
  response: string;
  constructor() { }

  ngOnInit() {
  }
  onChange(val) {
    this.response = val;
  }
}
