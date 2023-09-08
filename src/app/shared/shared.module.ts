import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { TableComponent } from './table/table.component';
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [TableComponent, SimpleDialogComponent, FormComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [TableComponent, SimpleDialogComponent, FormComponent],
})
export class SharedModule {}
