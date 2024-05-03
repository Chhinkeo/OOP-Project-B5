export class Baggage {
    private baggageId: string;
    private passengerId: number;
    private passengerName: string;
    private flightId: string;
    private numberOfBaggage: number;
    private totalWeight: number;

    constructor(baggageId: string, passengerId: number, passengerName: string, flightId: string, numberOfBaggage: number, totalWeight: number) {
        this.baggageId = baggageId;
        this.passengerId = passengerId;
        this.passengerName = passengerName;
        this.flightId = flightId;
        this.numberOfBaggage = numberOfBaggage;
        if (totalWeight > 30) {
            throw new Error("Total weight cannot exceed 30 kg.");
        }
        this.totalWeight = totalWeight;
    }

    baggageDetails(): void {
        console.log("Baggage Details:");
        console.log("Passenger:", this.passengerName);
        console.log("Baggage ID:", this.baggageId);
        console.log("Passenger ID:", this.passengerId);
        console.log("Flight ID:", this.flightId);
        console.log("Number of Baggage:", this.numberOfBaggage);
        console.log("Total Weight:", this.totalWeight);
    }

    calculateAdditionalCharge(weightLimit: number, extraChargePerKg: number): number {
        if (this.totalWeight > weightLimit) {
            const excessWeight = this.totalWeight - weightLimit;
            const additionalCharge = excessWeight * extraChargePerKg;
            return additionalCharge;
        } else {    
            return 0; 
        }
    }
}

// Example usage
const passengerName = "Sreyluch";
const passengerId = 123;
const baggageId = "B123";
const flightId = "ABC123";
const numberOfBaggage = 2;
const totalWeight = 25;

const baggage = new Baggage(baggageId, passengerId, passengerName, flightId, numberOfBaggage, totalWeight);
baggage.baggageDetails();
const weightLimit = 20;
const extraChargePerKg = 5;

const additionalCharge = baggage.calculateAdditionalCharge(weightLimit, extraChargePerKg);
if (additionalCharge > 0) {
    const totalPrice = additionalCharge + (numberOfBaggage * extraChargePerKg); 
    console.log("Total price for excess baggage weight:", totalPrice);
} else {
    console.log("No additional charge for baggage within weight limit.");
}
