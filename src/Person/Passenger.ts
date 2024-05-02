import { Person } from "./Person";

class Passenger extends Person {
    private passengerId: string; 

    constructor(personId: number, personName: string, personAddress: string, personEmail: string, personPhone: number, passengerId: string) {
        super(personId, personName, personAddress, personEmail, personPhone);
        this.passengerId = passengerId;
    }
} 