import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'user-posts',
        loadChildren: () => import('../user-posts/user-posts.module').then(m => m.UserPostsPageModule)
      },
      {
        path: 'other-posts',
        loadChildren: () => import('../tab2/other-posts.module').then(m => m.OtherPostsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/user-posts',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/user-posts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
