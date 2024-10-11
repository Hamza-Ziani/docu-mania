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
                type: 'basic',
                icon: 'heroicons_outline:clock',
                link: '/apps/courrier-recents',
            },
            {
                id: 'courriersfavoris',
                title: this._translocoService.translate('navbar.courrierfavoris'),
                type: 'basic',
                icon: 'heroicons_outline:star',
                link: '/apps/courriers-favoris',
            },
            {
                id: 'courrierequipe',
                title: this._translocoService.translate('navbar.courrierequipe'),
                type: 'basic',
                icon: 'heroicons_outline:users',
                link: '/apps/courrier-equipe',
            },
            {
                id: 'courrierstraites',
                title: this._translocoService.translate('navbar.courriertraites'),
                type: 'basic',
                icon: 'heroicons_outline:check-circle',
                link: '/apps/courriers-traites',
            },
            {
                id: 'recherchesfrequentes',
                title: this._translocoService.translate('navbar.recherchefrequentes'),
                type: 'basic',
                icon: 'heroicons_outline:magnifying-glass',
                link: '/apps/recherches-frequentes',
            },
            {
                id: 'referentielcourriers',
                title: this._translocoService.translate('navbar.referentielcourriers'),
                type: 'collapsable',
                icon: 'heroicons_outline:folder',
                children: [
                    {
                        id: 'recherchercourrier',
                        title: this._translocoService.translate('navbar.recherchercourrier'),
                        type: 'basic',
                        icon: 'heroicons_outline:envelope',
                        link: '/apps/rechercher-courrier',
                    },
                    {
                        id: 'rechercherdocument',
                        title: this._translocoService.translate('navbar.rechercherdocument'),
                        type: 'basic',
                        icon: 'heroicons_outline:document',
                        link: '/apps/rechercher-document',
                    },
                ],
            },
            {
                id: 'ajoutercourrier',
                title: this._translocoService.translate('navbar.ajoutercourrier'),
                type: 'basic',
                icon: 'heroicons_outline:plus-circle',
                link: '/apps/ajouter-courrier',
            },
            {
                id: 'ajouterdocument',
                title: this._translocoService.translate('navbar.ajouterdocument'),
                type: 'basic',
                icon: 'heroicons_outline:document-plus',
                link: '/apps/ajouter-document',
            },
            {
                id: 'ajouterliaisons',
                title: this._translocoService.translate('navbar.ajouterliaison'),
                type: 'collapsable',
                icon: 'heroicons_outline:link',
                children: [
                    {
                        id: 'courriercourrier',
                        title: this._translocoService.translate('navbar.courriercourrier'),
                        type: 'basic',
                        icon: 'heroicons_outline:arrows-right-left',
                        link: '/apps/liaison-courrier-courrier',
                    },
                    {
                        id: 'documentcourrier',
                        title: this._translocoService.translate('navbar.documentcourrier'),
                        type: 'basic',
                        icon: 'heroicons_outline:document-arrow-up',
                        link: '/apps/liaison-document-courrier',
                    },
                ],
            },
            {
                id: 'fluxcourriers',
                title: this._translocoService.translate('navbar.fluxcourriers'),
                type: 'basic',
                icon: 'heroicons_outline:arrow-path',
                link: '/apps/flux-courriers',
            },
            {
                id: 'dashboard',
                title: 'Dashboard',
                type: 'basic',
                icon: 'heroicons_outline:presentation-chart-bar',
                link: '/dashboards',
            },
            {
                id: 'reports',
                title: this._translocoService.translate('navbar.reports'),
                type: 'basic',
                icon: 'heroicons_outline:document-chart-bar',
                link: '/apps/reports',
            },
            {
                id: 'preferences',
                title: this._translocoService.translate('navbar.preferences'),
                type: 'basic',
                icon: 'heroicons_outline:cog',
                link: '/apps/preferences',
            },
            {
                id: 'consoleadmin',
                title: 'Console Admin',
                type: 'basic',
                icon: 'heroicons_outline:command-line',
                link: '/dashboards/admin',
            },
            {
                id: 'logout',
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
