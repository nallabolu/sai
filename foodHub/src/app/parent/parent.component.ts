import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { SalesmenComponent } from '../salesmen/salesmen.component';
import { DistributorsComponent } from '../distributors/distributors.component';
import { CommService } from '../comm.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterContentInit {

  name = 'crocin';
  response: string;
  @ViewChild(SalesmenComponent) salesmen: SalesmenComponent;
  @ViewChild(DistributorsComponent) distributors: DistributorsComponent;

  distList: string[];
  salesmenList: string[];
  resp: string;
  constructor(private service: CommService) { }

  ngOnInit() {
    this.service.change('Send Items Urgent by Delivery Boy !!');
     this.service.currentMessage.subscribe(fromSib => this.resp);
  }
  onChange(val) {
    this.response = val;
  }
  showDetails() {
    this.distList = this.distributors.getDistributors();
    this.salesmenList = this.salesmen.getSalesMen();

  }
  ngAfterContentInit(): void {
    this.showDetails();
  }
}
