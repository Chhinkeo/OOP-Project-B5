import { Plane } from "../Airport/Plane/Plane";
import { Route } from "./Route/Route";


export class Airport {
    private airportName: string;
    private airportID: string;
    private airtgate: string;
    private parkedPlanes: Plane[];

    constructor(airportName: string, airportID: string, airtgate: string) {
        this.airportName = airportName;
        this.airportID = airportID;
        this.airtgate = airtgate;
        this.parkedPlanes = [];
    }

    public getAirportName(): string {
        return this.airportName;
    }

    public getAirportID(): string {
        return this.airportID;
    }

    public getAirgate(): string {
        return this.airtgate;
    }

    public placePlane(plane: Plane): void {
        this.parkedPlanes.push(plane);
    }

    public getPlanes(): Plane[] {
        return this.parkedPlanes;
    }
}

// Create an instance of the Airport class
const airport = new Airport("New York International Airport", "JFK", "Gate 23");

// Create a plane
const plane = new Plane("ABC123", "Boeing 737", [], new Route(1, "FL123"));

// Place the plane at the airport
airport.placePlane(plane);

// Access airport information
console.log("Airport Name:", airport.getAirportName());
console.log("Airport ID:", airport.getAirportID());
console.log("Airgate:", airport.getAirgate());

// Retrieve parked planes
const parkedPlanes = airport.getPlanes();
console.log("Parked Planes:", parkedPlanes);
