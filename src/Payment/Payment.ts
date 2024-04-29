import { Ticket} from "../Ticket/Ticket";

export class Payment  {
    private paymentId: number;
    private amount: string;
    private ticket: Ticket | null;

    constructor(id: number, amount: string, ticket: Ticket | null = null) {
        this.paymentId = id;
        this.amount = amount;
        this.ticket = ticket;
    }

    calculateTotalAmount(): string {
        // Example: For simplicity, return the amount as is
        return this.amount;
    }

    // Getter method for payment ID
    getPaymentId(): number {
        return this.paymentId;
    }

  
}


const ticket1 = new Ticket(1, "Economy Classic", "Vegetarian", "23A");
const payment = new Payment(1, "50.00$", ticket1);
console.log(ticket1);
console.log("Payment ID:", payment.getPaymentId());
console.log("Total Amount:", payment.calculateTotalAmount());

