import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  admin:boolean = false;
  doc:boolean = false;
  prof:boolean = false;

  constructor() {
    console.log("Affichage du prof", this.prof, this['prof']);
  }

  setProf(bool){
    this.prof = bool;
    console.log(typeof(bool.toString()));
    sessionStorage.setItem('prof', bool.toString());
  }
  setId(bool, el){
    this[el] = bool;
    console.log(typeof(bool.toString()));
    sessionStorage.setItem(el, bool.toString());
  }
  // Récupérer le prof dans le sessions Storage
  getProf(){
    if(sessionStorage.getItem('prof')){
      this.prof = eval(sessionStorage.getItem('prof'));
    }
  }
  deconne(){
    this.prof = false;
    sessionStorage.setItem('prof', 'false');
    this.admin = false;
    this.doc = false;
  }
}
