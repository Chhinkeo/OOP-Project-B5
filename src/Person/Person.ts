abstract class Person{
    private personId: number;
    private personName: string;
    private personAddress: string;
    private personEmail: string;
    private PersonPhone: number;
    constructor (personId: number, personName: string, personAddress: string, personEmail: string, personPhone: number){
        this.personId = personId;
        this.personName = personName;
        this.personAddress = personAddress;
        this.personEmail = personEmail;
        this.PersonPhone = personPhone;
    }
    getPersonId(): number {
        return this.personId;
    }
    getPersonName(): string {
        return this.personName;
    }
    getPersonAddress(): string {
        return this.personAddress;
    }
    getPersonEmail(): string {
        return this.personEmail;
    }
    getPersonPhone(): number {
        return this.PersonPhone;
    }
}