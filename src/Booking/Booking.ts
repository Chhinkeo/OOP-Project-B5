export class Booking {
    private flightNumber: string;
    private time: number;
    private date: string;
    private description: string;
    private price : string;
    constructor( flightNumber: string, time: number, description: string, price: string ) {
        this.flightNumber = flightNumber;
        this.time = time;
        this.description = description;
        this.price = price;
    }
    
}