import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalog } from './catalog';

@Injectable({
  providedIn: 'root'
})
export class CatalogApiService {

  baseURL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  findAll(): Observable<Catalog[]> {
    return this.http.get<Catalog[]>(this.baseURL + 'Icecream');
  }
}
