import { CommonModule } from '@angular/common';
import { Component, Inject, ViewChild } from '@angular/core';
import { MaterialModuleModule } from 'shared/material-module/material-module.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDrawer } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-file-exporter',
  standalone: true,
  imports: [CommonModule,MaterialModuleModule,RouterOutlet],
  templateUrl: './file-exporter.component.html',
  styleUrl: './file-exporter.component.scss'
})
export class FileExporterComponent {
    dataSource: MatTableDataSource<any>;
    @ViewChild('matDrawer') matDrawer!: MatDrawer;
    drawerMode: 'side' | 'over';
    isDrawerOpened: boolean = false;
    isChecked: boolean = false; // Add this property to track checkbox state
    @ViewChild(MatSort) sort: MatSort;
    displayedColumns: string[] = ['select', 'document', 'type', 'date', 'actions', 'proprietaire', 'details'];
    documents: any[] = [
        { id: 1, document: 'document test', type: 'Type 1', date: new Date('2024-08-27T03:59:04'), proprietaire: 'Hamza' },
      ];


    constructor(

      ) {}

// Method to open the drawer
openDetailsFile(id: number) {
    this.matDrawer.toggle();
}
// Method to close the drawer
closeDrawer() {
    this.matDrawer.close();
}
    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.documents);
    }

  // Method to handle checkbox toggle
  onCheckboxChange(event: any): void {
    this.isChecked = event.checked;
  }


}
