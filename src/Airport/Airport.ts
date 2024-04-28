export class Airport{
    private airportID: string
    private airportName: string
    private gates: string
    constructor(airportID: string, airportName: string, gates: string){
        this.airportID = airportID;
        this.airportName = airportName;
        this.gates = gates;
    }
}