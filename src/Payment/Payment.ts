export class Payment {
    private paymentId :number;
    private amount :string;
    constructor(id :number, amount :string) {
        this.paymentId = id;
        this.amount = amount;
    }
}