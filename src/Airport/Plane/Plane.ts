import { Seat } from "./Seat/Seat";
import { Route } from "../Route/Route";

export class Plane {
    private planeID: string;
    private planeName: string;
    public seats: Seat[];
    public route: Route; // Add Route property

    constructor(planeID: string, planeName: string, seats: Seat[], route: Route) {
        this.planeID = planeID;
        this.planeName = planeName;
        this.seats = seats;
        this.route = route;
        this.numberSeats();
    }

    public getPlaneID(): string {
        return this.planeID;
    }

    public getPlaneName(): string {
        return this.planeName;
    }

    public getRoute(): Route {
        return this.route;
    }

    private numberSeats(): void {
        if (this.seats) {
            this.seats.forEach((seat, index) => {
                seat.setSeatNumber(index + 1);
            });
        }
    }
}

// Define some seats
const seats: Seat[] = [];
for (let i = 0; i < 10; i++) {
    seats.push(new Seat());
}

// Create a route
const route = new Route(1, "FL123");

// Create a plane with the route
const plane = new Plane("ABC123", "Boeing 737", seats, route);

// Retrieve plane information including the route
console.log("Plane ID:", plane.getPlaneID());
console.log("Plane Name:", plane.getPlaneName());
console.log("Route Number:", plane.getRoute().getRouteNumber());
console.log("Flight Number:", plane.getRoute().getFlightNumber());

// Assuming Seat class has a method getSeatNumber()
plane.seats.forEach(seat => {
    console.log("Seat Number:", seat.getSeatNumber());
});
