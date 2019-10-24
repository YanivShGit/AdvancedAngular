import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';


const routes: Routes = [
  {path:'', redirectTo : 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {
    path : 'users',
    component : UsersComponent,
    canActivate: 
    children : [
      { path : ':userId' , component : UserDetailsComponent}
    ]
  },  {path: '**', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
