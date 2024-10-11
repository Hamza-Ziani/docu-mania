import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from 'shared/material-module/material-module.module';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-courriers-traites',
    standalone: true,
    imports: [CommonModule, MaterialModuleModule, FormsModule],
    templateUrl: './courriers-traites.component.html',
    styleUrl: './courriers-traites.component.scss',
})
export class CourriersTraitesComponent {
    selectedType: string = '';
    switchType(type: string): void {
        this.selectedType = type;
    }
}
