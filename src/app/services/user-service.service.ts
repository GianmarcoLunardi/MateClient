import { Injectable } from '@angular/core';
import {IUser} from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iimage } from '../model/Iimage';
import { Observable } from 'rxjs';
import { ImageClass } from '../model/image-class';
import {IuserMenu} from'../model/iuser-menu';
import { urlBase } from '../cofigurazioneGlobale';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  // /api/Image/List
  urlImage : string ="http://localhost:19796/api/Image/List";
  urlUser : string = urlBase + "User/";

  urlProva : string ="http://localhost:5000/api/Image/UploadFotoProva2";
 
  // 


// Dj
_http:any;


  //lista: User[] = [];
  listaImage! : Iimage[];
  


  headers = new Headers({ 'Content-Type': 'multipart/form-data' });

  constructor( private http:HttpClient) { 
    this._http = http;
  }

  //https://www.youtube.com/watch?v=wbevohBVlDQ

  // Metodo di inserimento di una foto



Add(utente : IUser){
  return this.http.post(this.urlUser, utente)
  .subscribe(x => console.log("entrata del post"))
}

  // visualizza la lista di tutti  i files

  ListAllImages  (){
    this.http.get<Iimage[]>(this.urlImage)
        .subscribe(arg=> {
          this.listaImage =arg;

         } );
  }
  


  // https://gabrieleromanato.com/2024/01/angular-creare-e-usare-i-servizi
  // Metodo 2
  ListAllImages2   () : Observable<Iimage[]>{
  
    
       /* .subscribe(p =>// this.listaImage = arg;
          {
          this.listaImage = p;  console.log("xxxxxxx");
         console.log(this.listaImage);
         console.log(" xxxxxxx");
        }
         );  
*/
       
    return  this.http.get<Iimage[]>(this.urlImage);
  }

  // Metodo Cher Sestitutisce la lista dehli utenmti e il loro codic Guid
GetMenuUsers () {

  return this.http.get<Array<IuserMenu>>(this.urlUser + "GetMenu");

}

}

