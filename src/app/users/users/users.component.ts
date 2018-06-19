import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  filtre:number=0;

  constructor(public uService:UsersService) { }

  ngOnInit() {
  }

  showSubmit(o){
    console.log(o);
  }

}
