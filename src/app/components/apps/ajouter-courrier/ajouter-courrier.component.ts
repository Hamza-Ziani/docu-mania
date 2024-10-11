import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from 'shared/material-module/material-module.module';

@Component({
  selector: 'app-ajouter-courrier',
  standalone: true,
  imports: [CommonModule,MaterialModuleModule],
  templateUrl: './ajouter-courrier.component.html',
  styleUrl: './ajouter-courrier.component.scss'
})
export class AjouterCourrierComponent {

}
