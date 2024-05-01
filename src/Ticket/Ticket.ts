import { Seat } from "../Airport/Plane/Seat/Seat";
export class Ticket {
    private ticketId: number;
    private fareBasis: string;
    private mealType: string;
    private seatNumber: string;
    private price: number;
    private seatType: Seat;

    constructor(ticketId: number, fareBasis: string, mealType: string, seatNumber: string, seatType: Seat, price: number) {
        this.ticketId = ticketId;
        this.fareBasis = fareBasis;
        this.mealType = mealType;
        this.seatNumber = seatNumber;
        this.seatType = seatType;
        this.price = price;
    }

    comparePriceWithFareBasis(fareBasis: string, fareBasisPriceMap: { [fareBasis: string]: number }): void {
        if (fareBasisPriceMap.hasOwnProperty(fareBasis)) {
            const fareBasisPrice = fareBasisPriceMap[fareBasis];
            console.log(`Ticket Price based on fare basis '${fareBasis}': ${fareBasisPrice}`);
        } else {
            console.log(`Fare basis '${fareBasis}' not found.`);
        }
    }

    canRefund(): boolean {
        return this.seatType === Seat.Flex;
    }
}

const ticket1 = new Ticket(12345, "Flex", "Vegetarian", "12A", Seat.Flex, 400);
const ticket2 = new Ticket(12346, "Classic", "Baby meal", "13A", Seat.Flex, 444);
const ticket3 = new Ticket(13456, "Business", "12B", "14A", Seat.Flex, 500);

const fareBasisPriceMap = {
    "Flex": 400,
    "Classic": 444,
    "Business": 500,
};

ticket1.comparePriceWithFareBasis("Flex", fareBasisPriceMap);
ticket2.comparePriceWithFareBasis("Classic", fareBasisPriceMap);
ticket3.comparePriceWithFareBasis("Business", fareBasisPriceMap);
