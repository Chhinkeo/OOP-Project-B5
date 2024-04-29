export class FlightLeg {
    private flightNumber: string;
    private flightName: string;
    constructor(flightNumber: string, flightName: string) {
        this.flightNumber = flightNumber;
        this.flightName = flightName;
    }
    getFlightNumber() {
        return this.flightNumber;
    }
    getFlightName() {
        return this.flightName;
    }
}