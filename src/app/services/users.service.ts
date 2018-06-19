import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  listeUsers:Array<object>;

  constructor(private http:HttpClient) {
    this.getUsers();
  }
  // Appeler les utilisateurs
  getUsers(){
    this.http.get<Array<object>>('assets/modele/utilisateurs.json').subscribe(
      data => {
        this.listeUsers = data;
      }
    );
  }
}
