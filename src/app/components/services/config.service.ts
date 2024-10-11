import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http:HttpClient,private loc:Location) {

  }
//   public mode=environment.mode
  public c : any={
    "sideBar": {
    AJOUTERCOURRIER: "",
    AJOUTERDOCUEMT: "",
    AJOUTERLIAISON: "",
    COURRIERCOURRIER: "",
    DOCUMENTCOURRIER: "",
    COURRIERARCHIVES: "",
    COURRIEREQUIPE: "",
    RECHERCHERCOURRIER: "",
    RECHERCHERDOCUEMT: "",
    COURRIERRECENT: "",
    COURRIERTRAITES: "",
    FLUXCOURRIERS: "",
    COURRIERFAVORIS: "",
    PREFERENCES: "",
    RECHARCHEFREQUENTES: "",
    REPORTS: "",
    SEARCHRESULT: "",
    }


  }


//   getConfigLang(p='fr')
//   {
//     this.lang=p
//     this.http.get("assets/configs/"+this.lang +".json").subscribe(r=>{
//       //console.log(r)
//       this.c=r;
//       // //console.log(      this.config)

//     })
//   // this.loadTheme(this.lang)
//   }

  public goBack(){
    this.loc.back()
  }

}
