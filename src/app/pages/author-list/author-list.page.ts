import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/services/authors.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.page.html',
  styleUrls: ['./author-list.page.scss'],
})
export class AuthorListPage implements OnInit {
  
  author:any;

  articles: any;

  constructor(private data: AuthorsService, private route: ActivatedRoute) { 
    const id = this.route.snapshot.params['id'];
    this.author = this.data.getAuthor(id).subscribe((res: any) => this.author = res);
  }

  ngOnInit() {
  }

}
