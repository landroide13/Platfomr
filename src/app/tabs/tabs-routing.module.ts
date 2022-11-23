import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children:[
          {
            path:'',
            loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          },
          {
            path: 'pages/article-detail/:id',
            loadChildren: () => import('../pages/article-detail/article-detail.module').then( m => m.ArticleDetailPageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children:[
          {
            path: '',
            loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          },
          {
            path: 'pages/category-list',
            loadChildren: () => import('../pages/category-list/category-list.module').then( m => m.CategoryListPageModule)
          }
        ]
        
      },
      {
        path: 'tab3',
        children:[
          {
            path:'',
            loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          },
          {
            path: 'pages/author-list/:id',
            loadChildren: () => import('../pages/author-list/author-list.module').then( m => m.AuthorListPageModule)

          }
        ]
        
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
