export class Route {
    private routeNumber: number
    private flightName: string
    constructors(routeNumbers: number, flightName: string) {
        this.routeNumber = routeNumbers;
        this.flightName = flightName;
    }
}