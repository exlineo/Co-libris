import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandesService {

  listeDemandes:Array<object>;

  constructor(private http:HttpClient) {
    this.getDemandes();
  }

  // Obtenir la liste des colleges
  getDemandes(){
    this.http.get<Array<object>>('assets/modele/demandes.json').subscribe(
      (data) => {
        console.log("Demandes", data);
        this.listeDemandes = data;
      }
    );
  }
}
