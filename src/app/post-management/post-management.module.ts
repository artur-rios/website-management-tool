import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostManagementRoutingModule } from './post-management-routing.module';
import { PostCreationComponent } from './post-creation/post-creation.component';
import { PostListComponent } from './post-list/post-list.component';


@NgModule({
  declarations: [
    PostCreationComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    PostManagementRoutingModule
  ]
})
export class PostManagementModule { }
