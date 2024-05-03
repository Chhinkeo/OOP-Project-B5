
import { Payment } from "./src/Payment/Payment";
import { Ticket } from "./src/Ticket/Ticket";
import { MealType } from "./src/Meal/MealType";
import { Seat } from "./src/Airport/Plane/Seat/Seat";
import { Passenger } from "./src/Person/Passenger";
import { Customer } from "./src/Person/Customer";

// payments//

// const seatNumber = "12A";

// const ticket1 = new Ticket(1, "Economy Classic", MealType.Vegetarian, seatNumber, Seat.Flex, 500);

// const payment = new Payment(1, "50.00$", ticket1);

// console.log("Ticket:", ticket1);
// console.log("Payment ID:", payment.getPaymentId());
// console.log("Total Amount:", payment.calculateTotalAmount()); 

//------------------------------------------------------------------------------------------------

//customer//

// const customer1 = new Customer(1, "KEO", "street 371, Obekkom, Sensok", "keo@gmail.com", 1234567890, "CUS-0001");

// const ticket1 = new Ticket(12345, "Flex", "Vegetarian", "12A", Seat.Flex, 400);

// customer1.buyTicket(ticket1);

//-------------------------------------------------------------------------------------------------

//passinger//
const passenger1 = new Passenger(1, "KEO", "street 371, Obekkom, Sensok", "keo@gmail.com", 85596979899, "PAS-0001");

passenger1.displayPassengerInformation();

//-------------------------------------------------------------------------------------------------
