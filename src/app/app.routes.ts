import { Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    { path: "booking", component: BookingComponent },
    { path: "details", component: DetailsComponent },

];
