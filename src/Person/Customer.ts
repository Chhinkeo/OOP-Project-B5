import { Person } from "./Person";
import { Ticket } from "../Ticket/Ticket";
import { Seat } from "../Airport/Plane/Seat/Seat";

export class Customer extends Person {
    private customerId: string;

    constructor(personId: number, personName: string, personAddress: string, personEmail: string, personPhone: number, customerId: string) {
        super(personId, personName, personAddress, personEmail, personPhone);
        this.customerId = customerId;
    }

    getCustomerId(): string {
        return this.customerId;
    }

    buyTicket(ticket: Ticket) {
        const ticketDetails = ticket.getTicketDetails();
        console.log("Ticket bought by " + this.getPersonName());
        console.log("Ticket details:");
        console.log("Ticket ID:", ticketDetails.ticketId);
        console.log("Fare Basis:", ticketDetails.fareBasis);
        console.log("Meal Type:", ticketDetails.mealType);
        console.log("Seat Number:", ticketDetails.seatNumber);
        console.log("Price:", ticketDetails.price);
        console.log("Refundable:", ticket.canRefund() ? "Yes" : "No");
    }
}

