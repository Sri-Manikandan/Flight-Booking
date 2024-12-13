package com.flight.booking.flight;

import org.springframework.data.jpa.repository.JpaRepository;


public interface FlightRepository extends JpaRepository<FlightModel, Integer> {

}
