import { Customer } from "./Customer";

export class Passenger extends Customer {
    private passengerId: string; 

    constructor(personId: number, personName: string, personAddress: string, personEmail: string, personPhone: number, passengerId: string) {
        super(personId, personName, personAddress, personEmail, personPhone, passengerId);
        this.passengerId = passengerId;
    }

    getPassengerId(): string {
        return this.passengerId;
    }

    displayPassengerInformation(): void {
        console.log("Passenger Information:");
        console.log("Passenger ID:", this.getPassengerId());
        console.log("Customer ID:", this.getCustomerId());
        console.log("Person ID:", this.getPersonId());
        console.log("Name:", this.getPersonName());
        console.log("Address:", this.getPersonAddress());
        console.log("Email:", this.getPersonEmail());
        console.log("Phone:", this.getPersonPhone());
    }
} 


