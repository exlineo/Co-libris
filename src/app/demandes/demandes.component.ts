import { Component, OnInit } from '@angular/core';
import { DemandesService } from '../services/demandes.service';
import { SeriesService } from '../services/series.service';

import { DemandeSeriesPipe } from './demande-series.pipe'

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {

  constructor(public lDemandes:DemandesService, public lSeries:SeriesService) {
    console.log(lDemandes.listeDemandes);
  }

  ngOnInit() {

  }

}
