import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  getAuthor(idx: any):any{
    return this.http.get<any>(API + "/" + idx);
  }

  getAuthors(): any{
    return this.http.get<any>(API);
  }


}

const API = 'http://localhost:8080/api/authors';
