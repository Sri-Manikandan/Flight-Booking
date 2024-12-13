import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../flight.service';
import { Booking } from '../booking.model';
import { Flight } from '../flight.model';

@Component({
  selector: 'app-booking',
  standalone: false,
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  booking: Booking = { name: '', email: '', flightId: 0, seatNumber: 0 };
  selectedFlight: Flight | null = null;

  constructor(private route: ActivatedRoute, private flightService: FlightService, private router: Router) {}

  ngOnInit(): void {
    const state = history.state;
    if (state && state.seat) {
      this.booking.seatNumber = state.seat;
    }
    if (state && state.flight) {
      this.selectedFlight = state.flight;
      if (this.selectedFlight) {
        this.booking.flightId = this.selectedFlight.id;
      }
    }
  }
  
  bookFlight() {
    console.log('Booking:', this.booking);
    if (this.booking.name && this.booking.email && this.booking.flightId && this.booking.seatNumber) {
      this.flightService.bookFlight(this.booking).subscribe(
        (response) => {
          this.router.navigate(['/confirmation'], { state: { message: response } });
        },
        (error) => {
          console.error('Booking error:', error);
          alert('Booking failed. Please try again.');
        }
      );
    }
  }
}
