export class MealType {
    private type: string;
    private passengerPreference: string;
    constructor(type: string, passengerPreference: string) {
        this.type = type;
        this.passengerPreference = passengerPreference;
    }
    getType() {
        return this.type;
    }
    getPassengerPreference() {
        return this.passengerPreference;
    }
}