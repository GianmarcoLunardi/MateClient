import { Component, OnInit } from '@angular/core';
//import { UserServiceService } from '../../services/user-service.service';
import {ImageService} from '../../services/image.service';
import { HttpClient } from '@angular/common/http';

import { saveAs } from "file-saver";

import { Iimage } from '../../model/Iimage';
import { CheckedImage } from '../../model/checked-image';
import { urlBase } from '../../cofigurazioneGlobale';


@Component({
  selector: 'app-list-foto',
  templateUrl: './list-foto.component.html',
  styleUrl: './list-foto.component.css'
})
export class ListFotoComponent {
//listaImage : Image[] 
 // records : Image[];
 //urlImage : string ="http://localhost:19796/api/Image/List";
 
 urlImage : string = urlBase + "Image/" + "List/";

 urlDownload : string = urlBase + "Image/" + "GetFotoDownload/";

url :string = urlBase + "Image/" ;
 listaImage! : Iimage[];
 ListaImageChecked! : CheckedImage[];

 // Esempio Di Approvazione
 // Guid Utente , Guidi Image
//id Utente:     d3dcb476-8028-4821-3790-08dc8ed97b37
// immagine id:   bc58bc5c-cc3c-4c2e-87eb-002ba689b083

IdUtente : string = "d3dcb476-8028-4821-3790-08dc8ed97b37"
IdImage : string = "bc58bc5c-cc3c-4c2e-87eb-002ba689b083";


 //listChecke 
 
 //servicex.ListAllImages();
  constructor(private http : HttpClient ,
    private service : ImageService
  ){
    console.log("siamo dentro ilcostruttor");
    //console.log( this.listaImage.map<CheckedImage>(x => new CheckedImage(x)) );

  }
    //console.log(servicex.listaImage);
  //console.log(this.servicex.ListAllImages2()); 
  //console.log("stampa La losta record del ");,
  //this.records= this.servicex.ListAllImages2();
  //console.log(this.servicex.ListAllImages2()); 

  //console.log(this.records);
  
changeSelect(e :Event){
  //
  //const check = $event.target.checked;
  console.log("controllo");
console.log(e);
  
}

ngOnInit() {
  
  console.log("Desntro l iniziaslizzazione");


  this.http.get<Iimage[]>(this.urlImage)
  .subscribe(result => {this.listaImage=result;

    console.log("Lista delle Foto");
    console.log(this.listaImage);
   this.ListaImageChecked = result.map<CheckedImage>(x => new CheckedImage(x));
   console.log(this.ListaImageChecked);
   console.log(this.listaImage);

  } 
  , error => console.error(error) );
/*
  const result = this.listaImage.map<CheckedImage>(x => new CheckedImage(x));
 console.log(result);
  */
 
 
//this.listaImage = this.service.GetAllPhoto().subscribe(x=>x);





  //let z  =  new CheckedImage(this.listaImage[0]);
  //console.log(this.listaImage[0]);
  //console.log(this.ListaImageChecked);

}

    //https://www.youtube.com/watch?v=zL58GoOx_F8
  clickDownload( event : Event) {
     
    // Fare Il Download asrticolo
    // https://dev.to/broggi/how-to-download-a-file-in-angular-net-58ki


 this.ListaImageChecked.forEach(
  x => {
    if (x.select) this.FotoDownload( x.id, x.file_Name!) } );
 // this.FotoDownload( "bc58bc5c-cc3c-4c2e-87eb-002ba689b083", "Example.jpg");


  }


  FotoDownload( FileId : string , FileName : string){
    console.log("cliccato iul download");
    console.log(this.urlDownload + FileId);
    return this.http.get(this.urlDownload + FileId, { responseType: 'blob' })
    .subscribe(data => saveAs(data, FileName));
    ;
  }

  FotoCambiaSato(FotoId : string){
    this.IdImage = FotoId;

    console.log(this.url + "GetFotoApproved/" + this.IdUtente + '/' +this.IdImage);
    //this.IdUtente rimane quello di default
    return this.http.get(this.url + "GetFotoApproved/" + this.IdUtente + '/' +this.IdImage)
      .subscribe(x => x);

  }
}








