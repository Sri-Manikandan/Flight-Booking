package com.flight.booking.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    public BookingModel saveBooking(BookingModel booking) {
        return bookingRepository.save(booking);
    }
}
