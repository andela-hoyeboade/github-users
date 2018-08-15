import {NgModule} from '@angular/core';
import {
  MatIconModule,
  MatDialogModule,
  MatButtonModule,
  MatTableModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatSnackBarModule,
} from '@angular/material';

@NgModule({
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, MatTableModule, MatSnackBarModule],
})

export class MyMaterialModule {
}
