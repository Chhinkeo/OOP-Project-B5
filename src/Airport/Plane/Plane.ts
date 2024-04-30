import { TypeSeat } from "./Seat/Seat";
import { Route } from "../Route/Route";

export class Plane {
    private planeID: string;
    private planeName: string;
    public seats: TypeSeat[];
    public route: Route;

    constructor(planeID: string, planeName: string, seats: TypeSeat[], route: Route) {
        this.planeID = planeID;
        this.planeName = planeName;
        this.seats = seats;
        this.route = route;
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

    public getSeatTypes(): string[] {
        return this.seats.map(seat => seat.toString());
    }

    public generateSeatNumbers(seatType: TypeSeat): string[] {
        const prefix = seatType.substring(0, 1).toUpperCase();
        const seatNumbers: string[] = [];
        for (let i = 1; i <= 10; i++) {
            seatNumbers.push(`${prefix}${i}`);
        }
        return seatNumbers;
    }
}

const seats: TypeSeat[] = [
    TypeSeat.bussinessSeat,
    TypeSeat.classicSeat,
    TypeSeat.flexSeat
];

const route1 = new Route(1, "FL123");
const route2 = new Route(2, "FL007");

const plane1 = new Plane("ABC123", "Boeing 737", seats, route1);
const plane2 = new Plane("ABC124", "Polo 168", seats, route2);

console.log("Plane ID:", plane1.getPlaneID());
plane1.seats.forEach(seatType => {
    console.log("Seat Type:", seatType);
    console.log("Seat Numbers:");
    plane1.generateSeatNumbers(seatType).forEach(seatNumber => {
        console.log("\t", seatNumber);
    });
});

console.log("Plane ID:", plane2.getPlaneID());
plane2.seats.forEach(seatType => {
    console.log("Seat Type:", seatType);
    console.log("Seat Numbers:");
    plane2.generateSeatNumbers(seatType).forEach(seatNumber => {
        console.log("\t", seatNumber);
    });
});
