import { Component } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { IUser } from '../../model/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 
 

  utente : IUser = {
    id : "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    firstName: "Gianmarco",
    lastName: "Lunardi",
    address: "Via Dei Martiri 48",
    city: "Vinci",
    state: "Ue",
    country: "Italy",

    submittedDate : new Date(),
    email: "gianamerco@gmail.com",
    phone: "00390574",
    jobSection : "Lavoratore",
    password:"cambiami",
    ApprovedOn :new  Date(),
  }
 
 /* id_user : number | null,
        Username : string,
        Surname : string,
        City_of_residence : string,
        Date_of_birth : Date,
        Birthplace : string,
        Phone_number : string,
        Country : string,
        University_orwork_sector :string,
        Privacy : string,
        Password : string,
*/

  constructor(private sUser :UserServiceService, private router: Router){
//this.utente = new User();
  }

  // pulsante aggiungi
  aggiungiUser(){

    this.sUser.Add(this.utente);
    this.router.navigate(['/list-user']);

  }

}
