import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pagine
import { UserComponent } from './pagine/user/user.component';
import { FotoComponent } from './pagine/foto/foto.component';
import { ListFotoComponent } from './pagine/list-foto/list-foto.component';
import { UserListComponent } from './pagine/user-list/user-list.component';
import { JsonComponent } from './pagine/json/json.component';

//pagine Utententi
import{UserDetailComponent} from'./pagine/user-detail/user-detail.component';
import { FotoDetailComponent } from './pagine/foto-detail/foto-detail.component';

const routes: Routes = [
  {path:'utente', component:UserComponent},
  {path:'foto', component:FotoComponent},
  {path:'list-foto', component:ListFotoComponent},
  {path:'list-user', component:UserListComponent},
  {path:'detail-foto/:guid', component:FotoDetailComponent},
  {path:'detail-user/:guid', component:UserDetailComponent},
  {path:'json', component:JsonComponent},

  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
