import { Component, Injectable } from '@angular/core';
import { FuseNavigationItem } from 'shared/components/navigation';
import { cloneDeep } from 'lodash-es';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { ConfigService } from 'app/components/services/config.service';
import { FuseMockApiService } from 'shared/lib/mock-api';
import { HttpClientModule } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
@Component({
    selector     : 'side-bar-menu',
    templateUrl  : './side-bar-menu.component.html',
    styleUrls    : ['./side-bar-menu.component.scss'],
    standalone   : true,
    imports      : [
        TranslocoModule,
        HttpClientModule,
    ],
})
export class SideBarMenuComponent {
    private readonly _defaultNavigation: FuseNavigationItem[];

    constructor(
        private _fuseMockApiService: FuseMockApiService,
        private _translocoService: TranslocoService,
        private configService: ConfigService,

    ) {
        // Set default navigation with translated titles
        this._defaultNavigation = this.getDefaultNavigation();
        this.registerHandlers();

    }



    private getDefaultNavigation(): FuseNavigationItem[] {
        return [
            {
                id: 'courriersrecents',
                title: this._translocoService.translate('navbar.courrierrecent'),
                // title: 'Courriers recents',
                // title: 'navbar.courrierrecent',
                type: 'basic',
                icon: 'heroicons_outline:clock',
                link: '/apps/courrier-recents',
            },
            {
                id: 'Courriers favoris',
                title: 'Courriers favoris',
                type: 'basic',
                icon: 'heroicons_outline:star',
                link: '/apps/courriers-favoris',
            },
            {
                id: 'Courriers a Mon Equipe',
                title: 'Courriers a Mon Equipe',
                type: 'basic',
                icon: 'heroicons_outline:users',
                link: '/apps/courrier-equipe',
            },
            {
                id: 'Courriers Traites',
                title: 'Courriers Traites',
                type: 'basic',
                icon: 'heroicons_outline:check-circle',
                link: '/apps/courriers-traites',
            },
            {
                id: 'Recherches Frequentes',
                title: 'Recherches Frequentes',
                type: 'basic',
                icon: 'heroicons_outline:magnifying-glass',
                link: '/apps/recherches-frequentes',
            },
            {
                id: 'Referentiel Des Courriers',
                title: 'Referentiel Des Courriers',
                type: 'collapsable',
                icon: 'heroicons_outline:folder',
                children: [
                    {
                        id: 'Rechercher Courrier',
                        title: 'Rechercher Courrier',
                        type: 'basic',
                        icon: 'heroicons_outline:envelope',
                        link: '/apps/rechercher-courrier',
                    },
                    {
                        id: 'Rechercher Document',
                        title: 'Rechercher Document',
                        type: 'basic',
                        icon: 'heroicons_outline:document',
                        link: '/apps/rechercher-document',
                    },
                ],
            },
            {
                id: 'Ajouter Courrier',
                title: 'Ajouter Courrier',
                type: 'basic',
                icon: 'heroicons_outline:plus-circle',
                link: '/apps/ajouter-courrier',
            },
            {
                id: 'Ajouter Document',
                title: 'Ajouter Document',
                type: 'basic',
                icon: 'heroicons_outline:document-plus',
                link: '/apps/ajouter-document',
            },
            {
                id: 'Ajouter Liaisons',
                title: 'Ajouter Liaisons',
                type: 'collapsable',
                icon: 'heroicons_outline:link',
                children: [
                    {
                        id: 'Courrier a Courrier',
                        title: 'Courrier a Courrier',
                        type: 'basic',
                        icon: 'heroicons_outline:arrows-right-left',
                        link: '/apps/liaison-courrier-courrier',
                    },
                    {
                        id: 'Document a Courrier',
                        title: 'Document Courrier',
                        type: 'basic',
                        icon: 'heroicons_outline:document-arrow-up',
                        link: '/apps/liaison-document-courrier',
                    },
                ],
            },
            {
                id: 'Flux Courriers ',
                title: 'Flux Courriers',
                type: 'basic',
                icon: 'heroicons_outline:arrow-path',
                link: '/apps/flux-courriers',
            },
            {
                id: 'Dashboard',
                title: 'Dashboard',
                type: 'basic',
                icon: 'heroicons_outline:presentation-chart-bar',
                link: '/dashboards',
            },
            {
                id: 'Reports',
                title: 'Reports',
                type: 'basic',
                icon: 'heroicons_outline:document-chart-bar',
                link: '/apps/reports',
            },
            {
                id: 'Preferences',
                title: 'Preferences',
                type: 'basic',
                icon: 'heroicons_outline:cog',
                link: '/apps/preferences',
            },
            {
                id: 'Console Admin',
                title: 'Console Admin',
                type: 'basic',
                icon: 'heroicons_outline:command-line',
                link: '/dashboards/admin',
            },
            {
                id: 'Logout',
                title: 'Logout',
                type: 'basic',
                icon: 'heroicons_outline:arrow-right-on-rectangle',
                link: 'sign-in',
            },
        ];
    }


    // private updateNavigationTitles(translations: any): void {
    //     this._defaultNavigation.forEach(item => {
    //       if (translations[item.title]) {
    //         item.title = translations[item.title];
    //       }
    //       if (item.children) {
    //         this.updateChildrenTitles(item.children, translations);
    //       }
    //     });
    //   }

    //   private updateChildrenTitles(children: FuseNavigationItem[], translations: any): void {
    //     children.forEach(child => {
    //       if (translations[child.title]) {
    //         child.title = translations[child.title];
    //       }
    //       if (child.children) {
    //         this.updateChildrenTitles(child.children, translations);
    //       }
    //     });
    //   }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Navigation - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService.onGet('api/common/navigation').reply(() => {
            // Return the response
            return [
                200,
                {
                    default: cloneDeep(this._defaultNavigation),
                },
            ];
        });
    }

}
