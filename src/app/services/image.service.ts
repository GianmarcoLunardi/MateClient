import { Injectable } from '@angular/core';
import {IUser} from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iimage } from '../model/Iimage';
import { Observable } from 'rxjs';
import { urlBase } from '../cofigurazioneGlobale';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url : string="http://localhost:19796/api/Image/UploadFoto";
  urlAllPhoto : string =  urlBase + "Image/List";

  // Inizializzazione delgli URL
  urlImage : string = urlBase + "Image/" + "List/";
  urlDownload : string = urlBase + "Image/" + "GetFotoDownload/";



  constructor(private http:HttpClient) { }

  upload(x : Iimage){
    console.log("dentro il service");
    return this.http.post(this.url, x)
    .subscribe(x => console.log("prova del multipart"));
  }
 
  getFoto(guid : string) : Observable<Iimage> {
    //let foto! : Iimagessx;
    return this.http.get<Iimage>('http://localhost:19796/api/Image/Foto/' + guid);
  }

  GetAllPhoto() : Observable<Iimage[]>
  {




    return this.http.get<Iimage[]>(this.urlAllPhoto);
  }
 
  GetAll() : Observable<Iimage[]>
  {
    return  this.http.get<Iimage[]>(this.urlImage)
  //.subscribe(result => {this.listaImage=result;  

  }



}
