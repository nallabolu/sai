import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.component.html',
  styleUrls: ['./show-menu.component.css']
})
export class ShowMenuComponent implements OnInit {
  code: any;
  data: string;
  menu: Map<string, string>;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.menu = new Map();
    this.menu.set('101', 'assets/images/idi.jpg');
    this.menu.set('102', 'assets/images/curd.jpg');
    this.menu.set('103', 'assets/images/dal.jpg');
    this.menu.set('104', 'assets/images/meal.jpg');
  }

  ngOnInit() {
    this.route.params.subscribe(parms => {
      this.code = parms['code'];
      this.data = this.menu.get(this.code);
    });
  }

}
