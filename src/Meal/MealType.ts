export class MeaType {
    private mealType: string;
    private passengerPreferences: string
    constructor(mealType: string, passengerPreferences: string) {
        this.mealType = mealType;
        this.passengerPreferences = passengerPreferences;
    }
}