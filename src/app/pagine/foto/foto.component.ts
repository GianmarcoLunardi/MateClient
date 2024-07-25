import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { Iimage } from '../../model/Iimage';
import { ImageService } from '../../services/image.service';
import { IuserMenu } from '../../model/iuser-menu';
import { UserListComponent } from '../user-list/user-list.component';




@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrl: './foto.component.css'
})
export class FotoComponent {
  //Dato : ImageClass = new ImageClass();

  primo : IuserMenu = {
    id : "",
    name: "none"
  };


  UserMenu! : IuserMenu[] ;// = new Array<IuserMenu>();

  Dato: Iimage = {
    id:"",
    //file_Name: "", /// "4.gif",
    file_Name: '',
    category: "Labeled",
    state: 1,
    brand: "Brand",
    model: "Model",
    lens: "lens",
    donationOn: new Date() ,
    donationBy: "Donato Da",
    approvedOn: new Date(),
    approvedBy: "approvato da"
  };




// caricamento delfile 
  fileName = '';

  constructor(private http: HttpClient,
    private service: UserServiceService,
    private setviceI: ImageService
  ) {
  }

  OnFileSelected(event: any) {
    //this.Dato.file = <File>event.target.file[0];
    //this.Dato.file = <File>event.target.file[0];
    console.log("dentro levento on changwe");
    console.log(event.target.files);
  }

  onSubmit(FormFoto: NgForm) {
    //console.log(FormFoto.value);
    //console.log(this.category);
  }
  /// File video per l upload dei file
  //  https://www.youtube.com/watch?v=YkvqLNcJz3Y
  CaricaFormFoto() {

    console.log("Form Inviato");
 
    this.setviceI.upload(this.Dato);

    // chiamata alla post
    //console.log(this.category);
  }


  // Caricamento Dei file

  onFileSelected(event:any) {
    console.log("diaooooooo");
    const file:File = event.target.files[0];
    console.log(file);



    if (file) {

        //this.fileName = file.name;
        this.Dato.file_Name = file.name;
        const formData = new FormData();
       //console.log(file);
       console.log("dentro la procedura om change");
        console.log(this.Dato.file_Name);
        //formData.append("thumbnail", file);

        //const upload$ = this.http.post("/api/thumbnail-upload", formData);

        //upload$.subscribe();
    }


        
}



ngOnInit(){


  this.http.get<Array<IuserMenu>>('http://localhost:19796/api/User/GetMenu')
  .subscribe(result =>{this.UserMenu=result;} 
  , error => console.error(error) );

this.UserMenu.push(this.primo);

this.Dato.approvedOn = new Date();
this.Dato.donationOn = new Date();

  console.log("Foto - Menu Utenti");
  console.log(this.Dato.donationOn);
//console.log(this.UserMenu);


/*
  this.http.get<Array<IuserMenu>>("http://localhost:19796/api/User/GetMenu")
  .subscribe(res => this.UserMenu = res);

  console.log(this.UserMenu);
  */
}


}
