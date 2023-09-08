import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteCreationComponent } from './site-creation/site-creation.component';
import { SiteListComponent } from './site-list/site-list.component';



@NgModule({
  declarations: [
    SiteCreationComponent,
    SiteListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SiteManagementModule { }
