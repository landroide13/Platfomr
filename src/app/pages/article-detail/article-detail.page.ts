import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.page.html',
  styleUrls: ['./article-detail.page.scss'],
})
export class ArticleDetailPage implements OnInit {

  article: any;
  constructor(private artServ: ArticlesService, private actR: ActivatedRoute) {}

  getArticle(){
    const id = this.actR.snapshot.params['id'];
    this.article = this.artServ.getArticle(id).subscribe((res: any) => this.article = res);
  }
   

  ngOnInit() {
    this.getArticle();
  }

}
