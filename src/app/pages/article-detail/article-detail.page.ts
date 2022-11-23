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

  article!: any;

  constructor(private data: ArticlesService, private actR: ActivatedRoute) {
    const id = this.actR.snapshot.params['id'];
    this.article = this.data.getArticle(id).subscribe((res: any) => this.article = res);
  }
   

  ngOnInit() {
    console.log('Hello  '+ this.article.name)
  }

}
