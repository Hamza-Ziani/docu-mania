import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MaterialModuleModule } from 'shared/material-module/material-module.module';

@Component({
  selector: 'app-rechercher-courrier',
  standalone: true,
  imports: [CommonModule,MaterialModuleModule,NgIf],
  templateUrl: './rechercher-courrier.component.html',
  styleUrl: './rechercher-courrier.component.scss'
})
export class RechercherCourrierComponent {
    selectedType: string = '';
    switchType(type: string): void {
        this.selectedType = type;
    }

    showAllSearch: boolean = false;

    toggleAllSearch() {
        this.showAllSearch = !this.showAllSearch;
      }
}
