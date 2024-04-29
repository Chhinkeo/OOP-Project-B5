import { Seat } from "./Seat/Seat";

export class Plane {
    private planeID: string;
    private planeName: string;
    public seats: Seat[];

    constructor(planeID: string, planeName: string, seats: Seat[]) {
        this.planeID = planeID;
        this.planeName = planeName;
        this.seats = seats;
        this.numberSeats();
    }

    public getPlaneID(): string {
        return this.planeID;
    }

    public getPlaneName(): string {
        return this.planeName;
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

// Create a plane
const plane = new Plane("ABC123", "Boeing 737", seats);

// Retrieve plane information
console.log("Plane ID:", plane.getPlaneID());
console.log("Plane Name:", plane.getPlaneName());

// Assuming Seat class has a method getSeatNumber()
plane.seats.forEach(seat => {
    console.log("Seat Number:", seat.getSeatNumber());
});
