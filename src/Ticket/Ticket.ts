export class Ticket {
    private id: number;
    private fareBasis: string;
    private mealType: string;
    private seatNumber: string;
    constructor(id: number, fareBasis:string , mealType:string, seatNumber:string){
        this.id = id;
        this.fareBasis = fareBasis;
        this.mealType = mealType;
        this.seatNumber = seatNumber;
    }


    
}