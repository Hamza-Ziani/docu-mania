import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from 'shared/material-module/material-module.module';

@Component({
  selector: 'app-ajouter-liaison-document-courrier',
  standalone: true,
  imports: [CommonModule,MaterialModuleModule],
  templateUrl: './ajouter-liaison-document-courrier.component.html',
  styleUrl: './ajouter-liaison-document-courrier.component.scss'
})
export class AjouterLiaisonDocumentCourrierComponent {

}
