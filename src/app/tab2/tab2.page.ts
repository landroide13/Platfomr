import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../category';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  categories!: Observable<Category[]>;

  constructor(private data: CategoriesService) {}

  getCategories(){
    setTimeout(() => {
      this.categories = this.data.getCategories();
    }, 3000)
  }

  ngOnInit(){
    this.getCategories();    
  }

}
