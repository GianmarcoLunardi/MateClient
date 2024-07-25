import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../model/user';
import { Subscriber } from 'rxjs';
import { ImageService } from '../../services/image.service';
import { urlBase } from '../../cofigurazioneGlobale';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  guid : string = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
  url :  string = urlBase +"User"; // "http://localhost:19796/api/User";
  user! : IUser;


  constructor(private activeRoute: ActivatedRoute,
    private ServiceIm :  ImageService,
    private http:HttpClient){
  }


  //
  ngOnInit(): void {
    this.guid = this.activeRoute.snapshot.params["guid"];
    console.log(this.url+'/'+ this.guid);
    //let id : string = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
    
     this.http.get<IUser>(this.url+'/'+ this.guid)
    .subscribe(x=>{this.user = x ; 
      console.log(x)}
      , error => console.error(error)
    );    
    console.log(this.user.address);
    

    console.log(this.url+'/'+ this.guid);
      
    
    console.log("stampa dell utente") ;
  }
}
