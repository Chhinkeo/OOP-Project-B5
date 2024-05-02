import { Ticket } from "../Ticket/Ticket";

export class Payment {
    private paymentId: number;
    private amount: string;
    private ticket: Ticket | null;

    constructor(paymentId: number, amount: string, ticket: Ticket | null = null) {
        this.paymentId = paymentId;
        this.amount = amount;
        this.ticket = ticket;
    }

    calculateTotalAmount(): string {

        return this.amount;
    }

    getPaymentId(): number {
        return this.paymentId;
    }

    getAmount(): string {
        return this.amount;
    }

    setAmount(newAmount: string) {
        if (!newAmount || isNaN(parseFloat(newAmount))) {
            throw new Error("Invalid amount");
        }
        this.amount = newAmount;
    }

    getTicket(): Ticket | null {
        return this.ticket;
    }

    setTicket(newTicket: Ticket | null) {
        this.ticket = newTicket;
    }
}

const ticket1 = new Ticket(1, "Economy Classic", "Vegetarian", "23A");
const payment = new Payment(1, "50.00$", ticket1);

console.log("Ticket:", ticket1);
console.log("Payment ID:", payment.getPaymentId());
console.log("Total Amount:", payment.calculateTotalAmount());
