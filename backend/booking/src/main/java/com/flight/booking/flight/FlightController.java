package com.flight.booking.flight;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.flight.booking.book.BookingModel;
import com.flight.booking.book.BookingService;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class FlightController {

    @Autowired
    private FlightService flightService;

    @Autowired
    private BookingService bookingService;

    // Endpoint to get all available flights
    @GetMapping("/flights")
    public List<FlightModel> getAvailableFlights() {
        return flightService.getAllFlights();
    }

    @PostMapping("/flights")
    public ResponseEntity<String> saveFlight(@RequestBody List<FlightModel> flight) {
        // Save the booking
        flightService.saveFlight(flight);
        return ResponseEntity.ok("Flight saved successfully");
    }

    // Endpoint to book a flight
    @PostMapping("/book")
    public ResponseEntity<String> bookFlight(@RequestBody BookingModel booking) {
        // Save the booking
        bookingService.saveBooking(booking);
        return ResponseEntity.ok("Booking successful for seat " + booking.getSeatNumber());
    }
}
