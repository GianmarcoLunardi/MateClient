import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from '../../services/image.service';
import { urlBase } from '../../cofigurazioneGlobale';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  listautenti! : IUser[];
  url : string = urlBase + "User" //"http://localhost:19796/api/User"

 constructor( private http : HttpClient, private  root : Router){};
 ngOnInit(){
  this.http.get<IUser[]>(this.url)
  
  .subscribe( (user) => this.listautenti=user
                      , error => console.error(error) 
                      );

                      console.log(this.listautenti) ;
                      console.log("entrato dentro la funzione");
 }

GoTo(){
//console.log(this.root.navigateByUrl("/list-user"));
//this.root.navigateByUrl("/list-user");
//this.router.navigate(['/detail']);
//this.root.


 }

}

