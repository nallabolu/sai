import { Component, OnInit } from '@angular/core';
import { CommService } from 'src/app/comm.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {
  info: string;

  constructor(private service: CommService) { }

  ngOnInit() {
    this.service.currentMessage.subscribe(msg => this.info = msg);
  }

}
