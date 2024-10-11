// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    apiUrl: 'http://localhost:8089/api/v1',
    basicUrl: 'http://localhost:8089',
    depart: 'dep',
    arrive: 'arr',
    editorPrefix: 'doc',
    interne: 'Courrier interne',
    supportedMimeTypes:
      'application/vnd.oasis.opendocument.text application/vnd.oasis.opendocument.text-flat-xml application/vnd.oasis.opendocument.text-template application/vnd.oasis.opendocument.presentation application/vnd.oasis.opendocument.presentation-flat-xml application/vnd.oasis.opendocument.presentation-template application/vnd.oasis.opendocument.spreadsheet application/vnd.oasis.opendocument.spreadsheet-flat-xml application/vnd.oasis.opendocument.spreadsheet-template application/pdf image/tiff image/gif image/apng image/bmp image/jpeg image/png',
    max: 250,
    maxlong: 1000,
    min: 1,
    mode: 'premise',
    maxDate: '2070/07/25',
    validationTime: 15,
    log: 'Basic ZGVtby5hZG1pbjp1c2Vy',
    tentative: 10,
    showLang: false,
    hideCodeBar: true,
    hideCapture: false,
    espaceEmetteurShow: false,
    documentIconShow: true,
    hideAchivage: false,
    hideArchive: true,
    hidePassOublie: false,
    hideDocument: true,
    hideDocumentSearch: true,
    hideStatus: false,
    hideRefAuto: false,
    hideDocCodeBar: false,
    HideSuppPartage: true,
    liasonHide: true,
    liasonCourHide: true,
    liasonDocHide: true,
    hideToast: false,
    hideFlux: true,
    maxUpload: 500000000,
    hideDocumentAdd: true,
    hideArchivageRm: true,
    hideHistoriquePartagerCourrier: true,
    footer: "ACAPS"
  };

  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
