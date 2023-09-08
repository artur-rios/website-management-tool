import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCreationComponent } from './post-creation/post-creation.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {
    path: 'creation',
    component: PostCreationComponent,
  },
  {
    path: 'list',
    component: PostListComponent,
  },
  {
    path: '**',
    redirectTo: 'list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostManagementRoutingModule {}
