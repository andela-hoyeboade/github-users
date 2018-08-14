import {NgModule} from '@angular/core';
import {
  MatIconModule,
  MatDialogModule,
  MatButtonModule,
  MatTableModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule
} from '@angular/material';

@NgModule({
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, MatTableModule],
})

export class MyMaterialModule {
}
