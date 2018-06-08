import { Component } from '@angular/core';

@Component({
  selector: 'app-colibris',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Colibris';
  alerte:string = "Attention, de nouvelles séries sont disponibles";
  sousTitre:string = "L'applicaiton du CG64 pour la gestion de séries de livres";
}
