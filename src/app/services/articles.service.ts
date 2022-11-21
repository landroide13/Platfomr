import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../article';
import { Type } from '../type';

import { Author } from '../author';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getArticle(idx: any): Observable<Article>{
    return this.http.get<Article>(API + "/" + idx);
  }

  getArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(API);
  }

  /*
  getTypes(): Observable<Type[]>{
    return this.http.get<Type[]>(API);
  }

  getAuthors(): Observable<Author[]>{
    return this.http.get<Author[]>(API);
  }
 */
  
}

const API = 'http://localhost:8080/api/articles';




