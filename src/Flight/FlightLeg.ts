export class FlightLeg {
    private flightNumber: number;
    private sameAircraft: string;
    private sameCarrier: string;
    constructor(flightNumber: number, sameAircraft: string, sameCarrier: string){
        this.flightNumber = flightNumber;
        this.sameAircraft = sameAircraft;
        this.sameCarrier = sameCarrier;
    }
    getFlightNumber(){
        return this.flightNumber;
    }
}