import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from 'shared/material-module/material-module.module';
import { SearchResultComponent } from "../search-result/search-result.component";
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-recherches-frequentes',
  standalone: true,
  imports: [CommonModule, MaterialModuleModule, SearchResultComponent],
  templateUrl: './recherches-frequentes.component.html',
  styleUrl: './recherches-frequentes.component.scss'
})
export class RecherchesFrequentesComponent {
    @ViewChild('matDrawer') matDrawer!: MatDrawer;

    result : boolean = false;

      // Method to open the drawer
      openDetailsDrawer(id: number) {
        this.matDrawer.open(); // Open the drawer
    }
    // Method to close the drawer
    closeDrawer() {
        this.matDrawer.close();
    }
}
