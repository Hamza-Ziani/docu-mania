import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from 'shared/material-module/material-module.module';

@Component({
  selector: 'app-ajouter-document',
  standalone: true,
  imports: [CommonModule,MaterialModuleModule],
  templateUrl: './ajouter-document.component.html',
  styleUrl: './ajouter-document.component.scss'
})
export class AjouterDocumentComponent {

}
