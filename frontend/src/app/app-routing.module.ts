import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  { path: '', component: FlightSearchComponent },
  { path: 'seats', component: SeatSelectionComponent },
  { path: 'booking', component: BookingFormComponent },
  { path: 'confirmation', component: ConfirmationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
