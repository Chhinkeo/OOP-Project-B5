export class Airport{
    private airportName: string;
    private airportID: string;
    private airtgate: string;
    constructor(airportName: string, airportID: string, airtgate: string){
        this.airportName = airportName;
        this.airportID = airportID;
        this.airtgate = airtgate;
    }
}