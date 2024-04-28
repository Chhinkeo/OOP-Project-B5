export class Baggage {
    private baggageId: string;
    private passengerId: number;
    private flightId: string;
    private noOfBaggage: string;

    constructor(baggageId: string, passengerId: number,flightId: string,noOfBaggage: string) {
        this.baggageId = baggageId;
        this.passengerId = passengerId;
        this.flightId = flightId;
        this.noOfBaggage = noOfBaggage;
    }
}
