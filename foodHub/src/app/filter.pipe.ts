import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(collection: any[], field: any, value: any): any[] {
    console.log(field + ' ' + value + ' ');

    if (!collection) {
      return [];
    }
    if (!field || !value) {
      return collection;
    }
    // tslint:disable-next-line:radix
    if (parseInt(value, 10) !== NaN) {
      return collection.filter(item => item[field].includes(value));
    }
    else {
      return collection.filter(item => item[field] === value);
    }

  }

}
