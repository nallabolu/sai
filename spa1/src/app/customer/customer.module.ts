import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowlistComponent } from './showlist/showlist.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ShowlistComponent],
  declarations: [ShowlistComponent]
})
export class CustomerModule { }
