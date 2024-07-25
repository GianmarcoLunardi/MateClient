import { Data } from "@angular/router";
import { Iimage } from "./Iimage";

export class CheckedImage implements Iimage {
    public file_Name: string | null;
    public id: string;
    public category: string | null;
    public state: number | null;
    public brand: string | null;
    public model: string | null;
    public lens: string | null;
    public donationOn: Date | null;
    public donationBy: string | null;
    public approvedOn: Date | null;
    public approvedBy: string | null;
    public select: boolean =  false;

    constructor(x:Iimage){

        this.file_Name= x.file_Name;
        this.id = x.id;
        this.category=x.category;
        this.state = x.state;
        this.brand = x.brand;
        this.model = x.model;
        this.lens = x.lens;
        this.donationOn = x.approvedOn;
        this.donationBy = x.approvedBy;
        this.approvedOn = x.approvedOn;
        this.approvedBy = x.approvedBy;
        //approvedBy: string | null;
       // select: boolean =  false;

    }
}
