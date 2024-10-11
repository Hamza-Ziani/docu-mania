import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from 'shared/material-module/material-module.module';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-rechercher-document',
  standalone: true,
  imports: [CommonModule,MaterialModuleModule],
  templateUrl: './rechercher-document.component.html',
  styleUrl: './rechercher-document.component.scss'
})
export class RechercherDocumentComponent {

    isChecked: boolean = true; 

  toggleForm(event: MatSlideToggleChange) {
    this.isChecked = event.checked; 
  }
}
