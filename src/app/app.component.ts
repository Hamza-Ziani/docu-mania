import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss'],
    standalone : true,
    imports    : [RouterOutlet,TranslocoModule],
})
export class AppComponent
{

    ngOnInit(): void {
        console.log("SideBarMenuComponent initialized!");
    }
    constructor(private translocoService: TranslocoService) {
        this.translocoService.langChanges$.subscribe((lang: string) => {
          this.updateDirection(lang);
        });
      }

      updateDirection(lang: string): void {
        const htmlElement = document.documentElement;

        if (lang === 'ar') {
          htmlElement.setAttribute('dir', 'rtl');
          htmlElement.setAttribute('lang', 'ar');
        } else {
          htmlElement.setAttribute('dir', 'ltr');
          htmlElement.setAttribute('lang', lang);
        }
      }
}
