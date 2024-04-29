

export class Route {
    private routeNumber: number;
    private flightNumber: string;

    constructor(routeNumber: number, flightNumber: string) {
        this.routeNumber = routeNumber;
        this.flightNumber = flightNumber;
    }

    getRouteNumber() {
        return this.routeNumber;
    }

    getFlightNumber() {
        return this.flightNumber;
    }
}

// Create a new Route instance
const route = new Route(1, "FL123");

// Access route information
console.log("Route Number:", route.getRouteNumber());
console.log("Flight Number:", route.getFlightNumber());
