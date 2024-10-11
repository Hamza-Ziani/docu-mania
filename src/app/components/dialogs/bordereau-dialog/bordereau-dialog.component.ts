import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModuleModule } from 'shared/material-module/material-module.module';

@Component({
  selector: 'app-bordereau-dialog',
  standalone: true,
  imports: [CommonModule,MaterialModuleModule],
  templateUrl: './bordereau-dialog.component.html',
  styleUrl: './bordereau-dialog.component.scss'
})
export class BordereauDialogComponent {
    constructor(public dialogRef: MatDialogRef<BordereauDialogComponent>) {}

    onClose(): void {
      this.dialogRef.close();
    }
}
