import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  matSnackBarDefaultConfig: any = {
    duration: 3000,
    verticalPosition: 'top',
    horizontalPosition: 'center',
  };

  constructor(public snackBar: MatSnackBar) {
  }

  getSnackBarPanelClass(messageType): string {
    // Get class matching messageType in style.css
    return {
      info: 'snack-bar-info',
      success: 'snack-bar-success',
      error: 'snack-bar-error',
      warning: 'snack-bar-warning'
    }[messageType]
  }

  toastMessage(message, messageType = 'info') {
    const panelClass = this.getSnackBarPanelClass(messageType);
    this.snackBar.open(message, '', {...this.matSnackBarDefaultConfig, ...{panelClass}});
  }

  toastSuccessMessage(message) {
    this.toastMessage(message,'success');
  }

  toastErrorMessage(message,) {
    this.toastMessage(message, 'error');
  }

  toastWarningMessage(message) {
    this.toastMessage(message, 'warning');
  }

  toastInfoMessage(message) {
    this.toastMessage(message, 'info');
  }
}
