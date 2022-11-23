import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  articles:any;
  category:any;

  constructor(private data: ArticlesService) {}

  getArticles(){
    setTimeout(() => {
      this.articles = this.data.getArticles();
    }, 3000)
  }


  ngOnInit(){
    this.getArticles();
  }




}
