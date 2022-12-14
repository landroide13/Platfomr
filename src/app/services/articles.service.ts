import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getArticle(idx: any):any{
    return this.http.get<any>(API + "/" + idx);
  }

  getArticles(): any{
    return this.http.get<any>(API);
  }

}

const API = 'http://localhost:8080/api/articles';




