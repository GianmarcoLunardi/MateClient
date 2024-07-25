import { Data } from "@angular/router";


// Questo è il ImageIn DTO IN sull api
export interface Iimage {
  
     //file_Name : string | null;
     file_Name : string | null;
     id : string ;
     category : string | null;
     state : number | null ;
     brand: string | null;
     model:string | null;
     lens:string | null;
     
     donationOn: Date ;//| null;
     donationBy : string | null;
     approvedOn : Date ;// | null;
     approvedBy : string | null;


}



/*
        vpublic IFormFile? File { get; set; }






    
        vpublic string? Brand { get; set; }
       v public string? Model { get; set; }
        vpublic string? Lens { get; set; }
  
        public DateTime? DonationOn { get; set; }
        public string? DonationBy { get; set; }

        public DateTime? ApprovedOn { get; set; }
        public string? ApprovedBy { get; set; }

        public int? PixelX { get; set; }
        public int? PixelY { get; set; }



*/



  
        
        