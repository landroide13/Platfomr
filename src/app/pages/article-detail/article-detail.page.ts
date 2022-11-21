import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/article';
import { ArticlesService } from 'src/app/services/articles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.page.html',
  styleUrls: ['./article-detail.page.scss'],
})
export class ArticleDetailPage implements OnInit {

  article!: Observable<Article>;

  constructor(private data: ArticlesService, private actR: ActivatedRoute) {
    const id = actR.snapshot.params['id'];
    this.article = this.data.getArticle(id);
   }

  ngOnInit() {
    console.log('Hello'+this.article)
  }

}
