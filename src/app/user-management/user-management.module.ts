import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    UserCreationComponent,
    UserListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserManagementModule { }
