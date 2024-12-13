package com.flight.booking.book;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<BookingModel, Integer> {
    // Custom query methods can go here
}

