import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalog } from './catalog';
import { OrderHistory } from './order-history';
import { ResturantInfo } from './resturant-info';

@Injectable({
  providedIn: 'root'
})
export class CatalogApiService {

  baseURL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  findAll(): Observable<Catalog[]> {
    return this.http.get<Catalog[]>(this.baseURL + 'Icecream');
    //  return this.http.get<Catalog[]>(this.baseURL + 'myorders');

  }
  findOrder(): Observable<OrderHistory[]> {
    // return this.http.get<Catalog[]>(this.baseURL + 'Icecream');
    return this.http.get<OrderHistory[]>(this.baseURL + 'myorders');

  }
  addRestaurant(obj: ResturantInfo): Observable<ResturantInfo> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<ResturantInfo>(this.baseURL + 'restaurant', obj, { headers });

  }
  findRestOrder(): Observable<ResturantInfo[]> {
    // return this.http.get<Catalog[]>(this.baseURL + 'Icecream');
    return this.http.get<ResturantInfo[]>(this.baseURL + 'restaurant');

  }
  UpdateRestOrder(obj: ResturantInfo): Observable<ResturantInfo> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.put<ResturantInfo>(this.baseURL + 'restaurant' + '/' + obj.id, obj, { headers });

  }
  DeleteRestOrder(RestID: number): Observable<any> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete(this.baseURL + 'restaurant' + '/' + RestID, { headers });
  }
}
