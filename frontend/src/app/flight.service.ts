import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from './booking.model'; // Create a Booking model
import { Flight } from './flight.model';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  // Get all flights
  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(`${this.apiUrl}/flights`);
  }

  // Book a flight (handle plain text response)
  bookFlight(booking: Booking): Observable<string> {
    return this.http.post(`${this.apiUrl}/book`, booking, { responseType: 'text' });
  }
}
