import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from 'shared/material-module/material-module.module';

@Component({
  selector: 'app-courrier-mon-equipe',
  standalone: true,
  imports: [CommonModule,MaterialModuleModule],
  templateUrl: './courrier-mon-equipe.component.html',
  styleUrl: './courrier-mon-equipe.component.scss'
})
export class CourrierMonEquipeComponent {

}
