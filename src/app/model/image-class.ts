import { Data } from "@angular/router";
import { Iimage } from "./Iimage";

export class ImageClass  {
    public file : File | null = null;
    public name : string | null = null;
    public category : string | null = null;
    public _State : number | null = null;
    public file_Name: string | null = null;
    public brand: string | null = null;
    public drand:string | null = null;
    public model:string | null = null;
    public lens:string | null = null;
    public size:number | null = null;
    public donationOn: Data | null = null;
    public donationBy : string | null = null;
    public approvedOn : Data | null = null;
    public approvedBy : string | null = null;
    constructor(
        id? : string ,
        name? : string,
        _State? : number,
        file_Name?: string,
        category?: string,
        brand?:string,
        model?:string,
        lens?:string,
        size?:number,
        donationOn?: Data,
        donationBy? : string,
        approvedOn? : Data,
        approvedBy?: string


   ){}
}
