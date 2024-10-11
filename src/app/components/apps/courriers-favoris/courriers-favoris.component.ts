import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from 'shared/material-module/material-module.module';
import { MatDrawer } from '@angular/material/sidenav';
import { UpdateCourrierRecentComponent } from 'app/components/dialogs/update-courrier-recent/update-courrier-recent.component';
import { ConfirmationDialogComponent } from 'app/components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { ConfigService } from 'app/components/services/config.service';
interface File {
    name: string;
    date: string;
  }
@Component({
    selector: 'app-courriers-favoris',
    standalone: true,
    imports: [CommonModule, MaterialModuleModule,TranslocoModule],
    templateUrl: './courriers-favoris.component.html',
    styleUrl: './courriers-favoris.component.scss',
    encapsulation: ViewEncapsulation.None, // Disable encapsulation
})
export class CourriersFavorisComponent {
    @ViewChild('slider') slider: ElementRef;
    @ViewChild('matDrawer') matDrawer!: MatDrawer;
    isDrawerOpened: boolean = false;
    drawerMode: 'side' | 'over';
    isFirstItemVisible = true;
    isLastItemVisible = false;
    files: File[] = [];
    currentPage = 0;
    itemsPerPage = 12;
    totalPages = 0;
    constructor(private dialog: MatDialog,
        private translocoService: TranslocoService,
        private configService: ConfigService,
    ) {}

    ngOnInit() {
        // Initialize with some dummy data
        this.files = Array(13).fill(0).map((_, i) => ({
            name: `File ${i + 1}`,
            date: `2024-05-${(i + 1).toString().padStart(2, '0')}`
        }));
        this.totalPages = Math.ceil(this.files.length / this.itemsPerPage);
    }

    get paginatedFiles(): File[] {
        const start = this.currentPage * this.itemsPerPage;
        return this.files.slice(start, start + this.itemsPerPage);
    }

    previousPage() {
        if (this.currentPage > 0) {
            this.currentPage--;
        }
    }

    nextPage() {
        if (this.currentPage < this.totalPages - 1) {
            this.currentPage++;
        }
    }

    goToPage(page: number) {
        if (page >= 0 && page < this.totalPages) {
            this.currentPage = page;
        }
    }

    getPaginationArray(): number[] {
        return Array(this.totalPages).fill(0).map((_, index) => index);
    }
    //  End Pagination Slider:
    // Method to open the drawer
    openDetailsDrawer(id: number) {
        this.matDrawer.open(

        ); // Open the drawer
    }
    // Method to close the drawer
    closeDrawer() {
        this.matDrawer.close();
    }

    onBackdropClicked(): void {
        this.isDrawerOpened = false; // Close the drawer when backdrop is clicked
    }

    openDialog() {
        const dialogRef = this.dialog.open(UpdateCourrierRecentComponent, {});
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }

    openConfirmationDialog() {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent);
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                // Execute delete logic here
                console.log('Item deleted');
            } else {
                console.log('Deletion canceled');
            }
        });
    }

       // Slider logic
       scrollLeft() {
        const sliderElement = this.slider.nativeElement;
        sliderElement.scrollLeft -= 250; // Adjust scroll amount
        this.checkScrollPosition();
    }

    scrollRight() {
        const sliderElement = this.slider.nativeElement;
        sliderElement.scrollLeft += 250; // Adjust scroll amount
        this.checkScrollPosition();
    }

    checkScrollPosition() {
        const sliderElement = this.slider.nativeElement;
        this.isFirstItemVisible = sliderElement.scrollLeft === 0;
        this.isLastItemVisible = sliderElement.scrollLeft + sliderElement.offsetWidth >= sliderElement.scrollWidth;
    }
}
