import { Seat } from "../Airport/Plane/Seat/Seat";
import { MealType } from "../Meal/MealType";

export class Ticket {
    setMeal(meal: MealType) {
        throw new Error("Method not implemented.");
    }
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

    getTicketDetails(): any {
        return {
            ticketId: this.ticketId,
            fareBasis: this.fareBasis,
            mealType: this.mealType,
            seatNumber: this.seatNumber,
            price: this.price,
            seatType: this.seatType
        };
    }

    
}
