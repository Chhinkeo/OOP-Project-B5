
import { Payment } from "./src/Payment/Payment";
import { Ticket } from "./src/Ticket/Ticket";
import { MealType } from "./src/Meal/MealType";
import { Seat } from "./src/Airport/Plane/Seat/Seat";









// payments//

const seatNumber = "12A";

const ticket1 = new Ticket(1, "Economy Classic", MealType.Vegetarian, seatNumber, Seat.Flex, 500);

const payment = new Payment(1, "50.00$", ticket1);

console.log("Ticket:", ticket1);
console.log("Payment ID:", payment.getPaymentId());
console.log("Total Amount:", payment.calculateTotalAmount()); 
