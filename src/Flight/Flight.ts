export class Flight {
    private flightNumber: string;
    private departureTime: string;
    private arrivalTime: string;
    private departureAirport: string;
    private arrivalAirport: string;

    constructor(
        flightNumber: string,
        departureTime: string,
        arrivalTime: string,
        departureAirport: string,
        arrivalAirport: string
    ) {
        this.flightNumber = flightNumber;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.departureAirport = departureAirport;
        this.arrivalAirport = arrivalAirport; 
    }

    // Method to print flight details
    printFlightDetails(): void {
        console.log("Flight Number: " + this.flightNumber);
        console.log("Departure Airport: " + this.departureAirport);
        console.log("Departure Time: " + this.departureTime);
        console.log("Arrival Airport: " + this.arrivalAirport);
        console.log("Arrival Time: " + this.arrivalTime);
    }
    
}

const flight = new Flight("ABC123", "2024-04-29T08:00:00", "2024-04-29T10:30:00", "JFK", "LAX");
flight.printFlightDetails();
