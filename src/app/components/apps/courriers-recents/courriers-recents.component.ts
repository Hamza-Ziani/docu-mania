import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common'; // Import CommonModule
import {
    ChangeDetectorRef,
    Component,
    ElementRef,
    HostListener,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

import {
    ActivatedRoute,
    Router,
    RouterLink,
    RouterOutlet,
} from '@angular/router';
import { Subject } from 'rxjs';
import { MaterialModuleModule } from 'shared/material-module/material-module.module';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UpdateCourrierRecentComponent } from 'app/components/dialogs/update-courrier-recent/update-courrier-recent.component';
import { MatDrawer } from '@angular/material/sidenav';
import { ConfirmationDialogComponent } from 'app/components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { FuseMockApiService } from 'shared/lib/mock-api';
import { ConfigService } from 'app/components/services/config.service';
import { HttpClientModule } from '@angular/common/http';
interface File {
    name: string;
    date: string;
}

@Component({
    selector: 'app-courriers-recents',
    templateUrl: './courriers-recents.component.html',
    styleUrls: ['./courriers-recents.component.scss'],
    encapsulation: ViewEncapsulation.None, // Disable encapsulation
    standalone: true,
    imports: [
        CommonModule,
        MaterialModuleModule,
        RouterOutlet,
        RouterLink,
        NgFor,
        TranslocoModule,
        HttpClientModule
    ],
})
export class CourriersRecentsComponent implements OnInit {
    @ViewChild('slider') slider: ElementRef;
    @ViewChild('matDrawer') matDrawer!: MatDrawer;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    files: File[] = [];
    isFirstItemVisible = true;
    isLastItemVisible = false;
    drawerMode: 'side' | 'over';
    selectedItem: any = null;
    isDrawerOpened: boolean = false;
    currentFileIndex: number = 0;
    files2: File[] = [];
    files3: File[] = [];
    itemsPerPage = 6; // Initial items per page
    totalPages = 0;
    slideIndex = 0;
    slidesToShow = 6; // Default to 6 items
    currentPage = 0;


    constructor(
        private _activatedRoute: ActivatedRoute,
        private dialog: MatDialog,
        private translocoService: TranslocoService,
        private configService: ConfigService,
        private router: Router
    ) {

    }
    // Go To Dashboard :
    navigateToDashboard(): void {
        this.router.navigate(['']);
    }

    // Method to open the drawer
    openDetailsDrawer(id: number) {
        this.matDrawer.toggle();
    }
    // Method to close the drawer
    closeDrawer() {
        this.matDrawer.close();
    }



    ngOnInit() {
      // Initialize with some dummy data
      this.files = Array(20).fill(0).map((_, i) => ({
        name: `File ${i + 1}`,
        date: '07-10-2024',
      }));
      this.totalPages = Math.ceil(this.files.length / this.slidesToShow);
      this.updateSlidesToShow(window.innerWidth); // Set initial slides to show based on window size
    }


    // Pagination Slider:
    @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
      this.updateSlidesToShow(window.innerWidth);
    }

    updateSlidesToShow(width: number) {
      this.slidesToShow = width < 640 ? 2 : 6; // Show 2 items on mobile, 6 on larger screens
      this.totalPages = Math.ceil(this.files.length / this.slidesToShow); // Update total pages
    }

    previousSlide() {
      if (this.slideIndex > 0) {
        this.slideIndex--;
        this.currentPage = Math.floor(this.slideIndex / this.slidesToShow);
      }
    }

    nextSlide() {
      if (this.slideIndex < this.files.length - this.slidesToShow) {
        this.slideIndex++;
        this.currentPage = Math.floor(this.slideIndex / this.slidesToShow);
      }
    }

    previousPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
        this.slideIndex = this.currentPage * this.slidesToShow;
      }
    }

    nextPage() {
      if (this.currentPage < this.totalPages - 1) {
        this.currentPage++;
        this.slideIndex = this.currentPage * this.slidesToShow;
      }
    }

    get visibleFiles() {
      return this.files.slice(this.slideIndex, this.slideIndex + this.slidesToShow);
    }

    updateTotalPages() {
      this.totalPages = Math.ceil(this.files.length / this.slidesToShow);
    }
    // End Pagination Slider:

    // Open Dialog Update :
    openDialogUpdate() {
        const dialogRef = this.dialog.open(UpdateCourrierRecentComponent, {});
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
    // Open Dialog Supprimer :
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

    deleteFile(file: File): void {}
}
