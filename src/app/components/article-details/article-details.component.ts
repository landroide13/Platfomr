import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/article';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent implements OnInit {

  article!: Observable<Article>;

  constructor(private data: ArticlesService, private actRoute: ActivatedRoute) { 
    const id = actRoute.snapshot.params['id'];
    this.article = this.data.getArticle(id);
  }

  ngOnInit() {}

}
