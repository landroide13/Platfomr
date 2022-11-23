import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  authors: any;

  constructor(private data: AuthorsService) {}

  getAuthors(){
    setTimeout(() => {
      this.authors = this.data.getAuthors();
    }, 3000)
  }

  ngOnInit(){
    this.getAuthors()
  }

}
