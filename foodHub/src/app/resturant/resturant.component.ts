import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CatalogApiService } from '../catalog-api.service';
import { ResturantInfo } from '../resturant-info';

@Component({
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.css']
})
export class ResturantComponent implements OnInit {

  restForm: FormGroup;
  constructor(private builder: FormBuilder, private service: CatalogApiService) { }
  resturant: ResturantInfo[];
  frmContent = {
    'id': ['', Validators.required],
    'name': ['', Validators.required],
    'description': ['', Validators.required],
    'cuisine': ['', Validators.required],
    'photo': ['', Validators.required],
    'priceLevel': ['', Validators.required],
    'owner_email': ['', Validators.required]
  };


  ngOnInit() {
    this.restForm = this.builder.group(this.frmContent);
    this.service.findRestOrder().subscribe(resp => this.resturant = resp);
  }

  submit() {
    console.log(this.restForm.value);
    this.service.addRestaurant(this.restForm.value).subscribe(resp => { this.resturant.push(resp); console.log(resp); },
      err => console.log(err));
  }

  edit(val) {
    this.restForm.setValue(val);
  }
  Update() {
    console.log(this.restForm.value);
    this.service.UpdateRestOrder(this.restForm.value).subscribe(resp => {
      const pos = this.resturant.indexOf(resp);
      this.resturant.splice(pos, 0, resp); console.log(resp);
    },
      err => console.log(err));
  }
  Remove(item: any) {
    this.service.DeleteRestOrder(item.id).
      subscribe(resp => {
        const pos = this.resturant.indexOf(item);
        this.resturant.splice(pos, 1);
      });
  }
}
