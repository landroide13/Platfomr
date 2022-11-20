import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getArticle(idx: any): Observable<Article>{
    return this.http.get<Article>(API + "/id/" + idx);
  }

  getArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(API);
  }

}

const API = 'http://localhost:8080/api/articles';




