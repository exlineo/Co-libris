import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-creation-serie',
  templateUrl: './creation-serie.component.html',
  styleUrls: ['./creation-serie.component.css']
})
export class CreationSerieComponent implements OnInit {

  isbnPrefix:number=978;
  isbnSuffix:number;

  constructor(public lSeries:SeriesService) {

  }

  ngOnInit() {
  }

}
