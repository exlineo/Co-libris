import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  serie:object;
  listeSeries:Array<object>;

  constructor(private http:HttpClient) {
    this.serie = {
      title: "Les Fourberies de Scapin",
      author: "Molière",
      publisher: 0,
      collection: 0,
      language: "Français",
      publishedDate: "2016-04-13T12:00:00Z",
      pages: 144,
      cover: "https://images-na.ssl-images-amazon.com/images/I/51JW7IBS-YL._SX345_BO1,204,203,200_.jpg",
      ISBN10: 2013949677,
      ISBN13: 9782013949675
    }
    // Liste de séries
    this.listeSeries=[this.serie, this.serie, this.serie];
    this.getSeries();
  }
  // Récupérer les séries
  getSeries(){
    this.http.get<Array<object>>('assets/modele/series.json').subscribe(
      (data) => {
        console.log(data);
        this.listeSeries = data;
      }
    );
  }
}
