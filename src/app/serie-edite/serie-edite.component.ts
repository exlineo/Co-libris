import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-serie-edite',
  templateUrl: './serie-edite.component.html',
  styleUrls: ['./serie-edite.component.css']
})
export class SerieEditeComponent implements OnInit {
  serieActuelle:object;
  idSerie:number;
  constructor(private routeParams:ActivatedRoute, public lSeries:SeriesService) { }

  ngOnInit() {
    this.routeParams.params.subscribe(
      params => {
        console.log(params);
        this.idSerie = +params['josue'];
        this.serieActuelle = this.lSeries.listeSeries[+params['josue']];
        console.log(this.serieActuelle);
      }
    );
  }
  // Mise à jour de la série
  edite(f:NgForm){
    console.log(f.value);
    this.lSeries.listeSeries[this.idSerie] = f.value;
  }

}
