import { Component, OnInit } from '@angular/core';
import { UsersBlService } from './services/users-bl.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  get users(){ return this.usersBl.users; }
  constructor(private usersBl : UsersBlService) { 
    usersBl.getUsers(11);
  }

  ngOnInit() {
  }

}
