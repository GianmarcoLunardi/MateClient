import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pagine/menu/menu.component';
import { UserComponent } from './pagine/user/user.component';

import { FormsModule } from '@angular/forms';
import { FotoComponent } from './pagine/foto/foto.component';
import { HttpClientModule } from "@angular/common/http";
import { ListFotoComponent } from './pagine/list-foto/list-foto.component';
import { UserListComponent } from './pagine/user-list/user-list.component';
import { UserDetailComponent } from './pagine/user-detail/user-detail.component';
import { FotoDetailComponent } from './pagine/foto-detail/foto-detail.component';


// service
import{ImageService} from './services/image.service';
import { JsonComponent } from './pagine/json/json.component';
import { UploadComponent } from './pagine/upload/upload.component'
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserComponent,
    FotoComponent,
    ListFotoComponent,
    UserListComponent,
    UserDetailComponent,
    FotoDetailComponent,
    JsonComponent,
    UploadComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
