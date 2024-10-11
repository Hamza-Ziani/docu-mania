import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from 'shared/material-module/material-module.module';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-update-courrier-recent',
    standalone: true,
    templateUrl: './update-courrier-recent.component.html',
    styleUrl: './update-courrier-recent.component.scss',
    imports: [CommonModule, MaterialModuleModule],
})
export class UpdateCourrierRecentComponent {
    closeDialog() {
        // Add your close dialog logic here
        console.log('Dialog closed');
    }

    submitForm() {
        // Add your form submission logic here
        console.log('Form submitted');
    }
}
