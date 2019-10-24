import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersBlService } from '../services/users-bl.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  id:string;
  userDetails : ev.User;
  mode : "view" | "edit" = "view";

  constructor(private route : ActivatedRoute, private userBl:UsersBlService) { 
    route.params.pipe(
      tap( params => this.id = params.userId),
      tap( params => params.mode ? this.mode = params.mode : this.mode= 'view'),
      tap( params => {
                this.userDetails = this.userBl.users
                        .find( u => u.login.username == params.userId);
          }
        )
                    ).subscribe();
        }

  ngOnInit() {
  }

}
