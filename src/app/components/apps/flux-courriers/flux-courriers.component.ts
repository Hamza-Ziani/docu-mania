import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from 'shared/material-module/material-module.module';

@Component({
  selector: 'app-flux-courriers',
  standalone: true,
  imports: [CommonModule,MaterialModuleModule],
  templateUrl: './flux-courriers.component.html',
  styleUrl: './flux-courriers.component.scss'
})
export class FluxCourriersComponent {

}
