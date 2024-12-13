package com.flight.booking.flight;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlightService {

    @Autowired
    private FlightRepository flightRepository;

    public List<FlightModel> getAllFlights() {
        return flightRepository.findAll();
    }

    public void saveFlight(List<FlightModel> flight) {
        flightRepository.saveAll(flight);
    }
}

