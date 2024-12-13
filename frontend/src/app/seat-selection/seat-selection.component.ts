import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seat-selection',
  standalone: false,
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})
export class SeatSelectionComponent implements OnInit {
  seats = Array.from({ length: 20 }, (_, i) => i + 1);
  selectedSeat: number | null = null;
  flight: any;

  constructor(private router: Router) {
    const state = history.state;
    this.flight = state.flight;
  }

  ngOnInit(): void {
    if (!this.flight) {
      alert('No flight selected!');
      this.router.navigate(['/']);
    }
  }

  selectSeat(seat: number) {
    this.selectedSeat = seat;
  }

  proceed() {
    const state = { flight: this.flight, seat: this.selectedSeat };
    this.router.navigate(['/booking'], { state });
  }
}
