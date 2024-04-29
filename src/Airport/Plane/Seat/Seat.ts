export class Seat {
    private seatNumber: number;

    constructor() {
        this.seatNumber = 0;
    }

    public setSeatNumber(seatNumber: number): void {
        this.seatNumber = seatNumber;
    }

    public getSeatNumber(): number {
        return this.seatNumber;
    }
}