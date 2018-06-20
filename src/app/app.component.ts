import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-colibris',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Colibris';
  alerte:string = "Attention, de nouvelles séries sont disponibles";
  sousTitre:string = "L'applicaiton du CG64 pour la gestion de séries de livres";
  constructor(private router:Router, public auth:AuthService){
    
    auth.getProf();

    console.log(auth.prof);
    if(!auth.prof){
      this.router.navigateByUrl('/connexion');
    }
  }
}
