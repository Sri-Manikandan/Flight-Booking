import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: false,
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  confirmationMessage: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const state = history.state;
    if (state && state.message) {
      this.confirmationMessage = state.message;
    } else {
      this.confirmationMessage = 'No confirmation details available.';
    }
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
