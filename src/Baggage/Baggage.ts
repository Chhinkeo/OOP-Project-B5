export class Baggage {
    private baggageId: string;
    private passengerId: number;
    private passengerName: string; // Store the passenger's name
    private flightId: string;
    private numberOfBaggage: number;

    constructor(baggageId: string, passengerId: number, passengerName: string, flightId: string, numberOfBaggage: number) {
        this.baggageId = baggageId;
        this.passengerId = passengerId;
        this.passengerName = passengerName; // Assign passengerName to the property
        this.flightId = flightId;
        this.numberOfBaggage = numberOfBaggage;
    }

    baggageDetails(): void {
        console.log("Baggage Details:");
        console.log("Passenger:", this.passengerName); 
        console.log("Baggage ID:", this.baggageId);
        console.log("Passenger ID:", this.passengerId);
        console.log("Flight ID:", this.flightId);
        console.log("Number of Baggage:", this.numberOfBaggage);
    }
}

const passengerName = "Sreyluch";
const passengerId = 123;
const baggageId = "B123";
const flightId = "ABC123";
const numberOfBaggage = 2;

const passengerBaggage = new Baggage(baggageId, passengerId, passengerName, flightId, numberOfBaggage);
passengerBaggage.baggageDetails();
