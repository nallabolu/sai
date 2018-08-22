import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { CompAddService } from '../comp-add.service';
import { ShipDetailsComponent } from '../ship-details/ship-details.component';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() itemToAdd: string;
  @Output() result: EventEmitter<string> = new EventEmitter();
  @ViewChild('placeholder', { read: ViewContainerRef }) inspos: ViewContainerRef;
  constructor(private service: CompAddService) { }

  ngOnInit() {
  }
  confirm() {
    this.result.emit(this.itemToAdd + ' Added !!');
    this.service.setViewRef(this.inspos);
    this.service.addComponent(ShipDetailsComponent);
  }
}
