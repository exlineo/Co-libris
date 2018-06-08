import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  user: object = { id: "", mdp: "" };

  constructor(private route:Router) { }

  ngOnInit() {
  }
  testID() {
    console.log(this.user);
  }
  soumission(f) {
    if (f.value.id && f.value.mdp) {
      console.log(f.value);
      this.route.navigateByUrl("/series");
    }
  }
}
