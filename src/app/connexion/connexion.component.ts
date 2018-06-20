import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  user: object = { id: "", mdp: "" };

  constructor(private route:Router, public auth:AuthService) { }

  ngOnInit() {
  }
  testID() {
    console.log(this.user);
  }
  soumission(f) {
    if (f.value.id && f.value.mdp) {
      console.log(f.value);
      this.conne();
      this.route.navigateByUrl("/series");
    }
  }
  // Methode pour se connecter
  conne(){
    this.auth.setId(true, 'prof');
    this.auth.setId(false, 'admin');
  }
}
