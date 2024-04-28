class Customer extends Person {
    private customerId: string;

    constructor(personId: number, personName: string, personAddress: string, personEmail: string, personPhone: number, customerId: string) {
        super(personId, personName, personAddress, personEmail, personPhone);
        this.customerId = customerId;
    }

    getCustomerId(): string {
        return this.customerId;
    }
}