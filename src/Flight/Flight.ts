export class Flight{
    private flightNumber: string;
    private departureTime: string;
    private arrivalTime: string;
    private departureAirport: string;
    private arrivalAirport: string;
    constructor(flightNumber: string, departureTime: string, arrivalTime: string,departureAirport: string, arrivalAirport: string){
        this.flightNumber = flightNumber;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.departureAirport = departureAirport;
        this.arrivalAirport = arrivalAirport; 
    }
}