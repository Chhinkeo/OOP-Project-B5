import { Person } from "./Person";
import { Ticket } from "../Ticket/Ticket";


class Customer extends Person {
    private customerId: string;

    constructor(personId: number, personName: string, personAddress: string, personEmail: string, personPhone: number, customerId: string) {
        super(personId, personName, personAddress, personEmail, personPhone);
        this.customerId = customerId;
    }

    getCustomerId(): string {
        return this.customerId;
    }

    buyTicket(ticket: Ticket) {
        console.log("Ticket bought by"  + ": "+ this.getPersonName());
        ticket.ticketDetails();
        console.log("Refundable:", ticket.canRefund() ? "Yes" : "No");
    }
}

const customer1 = new Customer(1, "John Doe", "123 Main St", "john@example.com", 1234567890, "CUST123");
const customer2 = new Customer(2, "keo", "124 Main St", "keo@example.com", 1234567890, "CUST124");
const customer3 = new Customer(3, "hi", "125 Main St", "hi@example.com", 1234567890, "CUST125");
const ticket = new Ticket(3, "Business", "Non-Vegetarian", "10F");

customer1.buyTicket(ticket);
customer2.buyTicket(ticket);
customer3.buyTicket(ticket);
