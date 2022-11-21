import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }


  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(API);
  }



}


const API = 'http://localhost:8080/api/categories';


