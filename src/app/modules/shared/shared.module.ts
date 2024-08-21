import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { ProcessFormErrorsPipe } from './pipes/process-form-errors.pipe';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedComponent } from './shared.component';

@NgModule({
  declarations: [SharedComponent, ProcessFormErrorsPipe],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    NgxDropzoneModule
  ],
  exports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    ProcessFormErrorsPipe,
    NgxDropzoneModule
  ],
})
export class SharedModule { }
