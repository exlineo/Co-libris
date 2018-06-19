import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../services/series.service';
import { SerieModele } from '../modele/serie.modele';
import { FiltreSeriePipe } from './filtreisbn.pipe';

@Component({
  selector: 'app-creation-serie',
  templateUrl: './creation-serie.component.html',
  styleUrls: ['./creation-serie.component.css']
})
export class CreationSerieComponent implements OnInit {

  isbnPrefix:number=978;
  isbnSuffix:number;
  isbn13:number;

  college:object;

  serieActuelle:object;

  constructor(public lSeries:SeriesService, private pipe:FiltreSeriePipe) {}

  ngOnInit() {
  }

  getSerieActuelle(){
    if(this.isbn13>0){
      this.serieActuelle = this.pipe.transform(this.lSeries.listeSeries, this.isbn13)[0];
      console.log(this.serieActuelle);
    }else{
      this.serieActuelle = null;
    }
  }
}
