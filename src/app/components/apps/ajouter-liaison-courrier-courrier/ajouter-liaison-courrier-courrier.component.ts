import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from 'shared/material-module/material-module.module';

@Component({
  selector: 'app-ajouter-liaison-courrier-courrier',
  standalone: true,
  imports: [CommonModule,MaterialModuleModule],
  templateUrl: './ajouter-liaison-courrier-courrier.component.html',
  styleUrl: './ajouter-liaison-courrier-courrier.component.scss'
})
export class AjouterLiaisonCourrierCourrierComponent {

}
