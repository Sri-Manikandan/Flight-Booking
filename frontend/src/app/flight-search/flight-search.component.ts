import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight-search',
  standalone: false,
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  flights: any[] = [];
  filteredFlights: any[] = [];
  searchCriteria = { from: '', to: '', departureTime: '' };

  constructor(private flightService: FlightService, private router: Router) {}

  ngOnInit(): void {
    this.getFlights();
  }

  getFlights() {
    this.flightService.getFlights().subscribe(
      (data) => {
        this.flights = data;
        this.filteredFlights = data; // Initially, show all flights
      },
      (error) => {
        console.error('Error fetching flights:', error);
      }
    );
  }

  searchFlights() {
    const { from, to, departureTime } = this.searchCriteria;
    console.log('Searching for flights:', this.flights);
    this.filteredFlights = this.flights.filter(
      (flight) =>
        flight.from.toLowerCase() === from.toLowerCase() &&
        flight.to.toLowerCase() === to.toLowerCase() &&
        flight.departureTime === departureTime
    );
    console.log('Filtered flights:', this.filteredFlights);
  }

  selectFlight(flight: any) {
    const state = { flight };
    this.router.navigate(['/seats'], { state });
  }
}
