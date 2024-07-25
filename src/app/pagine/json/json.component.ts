import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrl: './json.component.css'
})
export class JsonComponent implements OnInit {
  FileCaricato! : File;
  ngOnInit(): void {
    
  }

  onFileSelected(event: any){
    console.log(event);
    this.FileCaricato = <File>event.target.files[0];
    console.log("ciao mi sei cambiato");
  }

}
