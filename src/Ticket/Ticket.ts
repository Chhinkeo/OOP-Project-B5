export class Ticket {
    private ticketId: number;
    private fareBasis: string;
    private mealType: string;
    private seatNumber: string;
    constructor(id: number, fareBasis:string , mealType:string, seatNumber:string){
        this.ticketId = id;
        this.fareBasis = fareBasis;
        this.mealType = mealType;
        this.seatNumber = seatNumber;
    }

    ticketDetails(): void {
        console.log("Ticket Details:");
        console.log("ID:", this.ticketId);
        console.log("Fare Basis:", this.fareBasis);
        console.log("Meal Type:", this.mealType);
        console.log("Seat Number:", this.seatNumber);
    }
    canRefund(): boolean {
        return this.fareBasis.toLowerCase() === "flex";
    }

    
}


const ticket1 = new Ticket(1, "Economy Classic", "Vegetarian", "23A");
ticket1.ticketDetails();
console.log("Can refund:", ticket1.canRefund() ? "Yes" : "No");

const ticket2 = new Ticket(2, "Flex", "Meal", "23A");
ticket2.ticketDetails();
console.log("Can refund:", ticket2.canRefund() ? "Yes" : "No");