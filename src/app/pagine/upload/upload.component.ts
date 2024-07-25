import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent implements OnInit {
  @Input()
  requiredfiletype : string = "json";

  FileCaricato!:string;


  ngOnInit(): void {
    
  }

  onFileSelected(event: Event){
    console.log(event);
  } 


}
