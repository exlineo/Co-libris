import { Component, OnInit, Input } from '@angular/core';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-listeseries',
  templateUrl: './listeseries.component.html',
  styleUrls: ['./listeseries.component.css']
})
export class ListeSeriesComponent implements OnInit {
  titre:string;
  @Input() alerteListe:string;
  
  constructor(public lSeries:SeriesService) {
    this.titre = "Liste des séries disponibles";
  }
  // Le composant est initialisé
  ngOnInit() {
    
    console.log(this.alerteListe);
  }

}
