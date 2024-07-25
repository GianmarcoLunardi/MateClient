import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iimage } from '../../model/Iimage';
import { ImageService } from '../../services/image.service';
import { ActivatedRoute, Data } from "@angular/router";
import { urlBase } from '../../cofigurazioneGlobale';

@Component({
  selector: 'app-foto-detail',
  templateUrl: './foto-detail.component.html',
  styleUrl: './foto-detail.component.css'
})
export class FotoDetailComponent {
  
  // State
  State : Array<string> = ["uploaded",
      "dowloaded",
      "pending",
      "rejected",
      "eligible",
      "assigned",
      "completed" ]


  //guid : string = 'bc58bc5c-cc3c-4c2e-87eb-002ba689b083';
  guid: string = this.activeRoute.snapshot.params["guid"];
///Image/
  url : string = urlBase +'Image/GetFotoDetail/'+ this.guid;
  //url : string ="http://localhost:19796/api/Image/GetFotoDetail/"+ this.guid ;


  


  foto! : Iimage ;
  state : string[] = [
    'uploaded', 'dowloaded', 'pending',
    'rejected', 'eligible', 'assigned', 'completed'

  ];

  constructor(private http: HttpClient, private sImage:ImageService,
    private activeRoute: ActivatedRoute){}

ngOnInit(){
   //this.guid = this.activeRoute.snapshot.params["guid"];
  this.http.get<Iimage>(this.url)
  .subscribe(x=>this.foto = x);


  console.log('Prova della get foto');
  console.log(this.state[0]);

}


ConvertiData( x: Date | null) : string {

  if (x != null ) return x.toDateString(); else 
  return "";
}
}
