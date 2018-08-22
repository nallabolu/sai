import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() itemToAdd: string;
  @Output() result: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  confirm() {
    this.result.emit(this.itemToAdd + ' Added !!');
  }
}
