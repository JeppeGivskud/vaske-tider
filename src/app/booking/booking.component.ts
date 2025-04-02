import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from '@angular/router';

interface TimeSlot {
  time: string;
  available: boolean;
}

@Component({
  selector: "app-booking",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./booking.component.html",
  styleUrl: "./booking.component.css",
})
export class BookingComponent {
  days = [
    {
      name: "Mandag",
      timeSlots: this.generateTimeSlots(),
    },
    {
      name: "Tirsdag",
      timeSlots: this.generateTimeSlots(),
    },
    {
      name: "Onsdag",
      timeSlots: this.generateTimeSlots(),
    },
    {
      name: "Torsdag",
      timeSlots: this.generateTimeSlots(),
    },
    {
      name: "Fredag",
      timeSlots: this.generateTimeSlots(),
    },
    {
      name: "Lørdag",
      timeSlots: this.generateTimeSlots(),
    },
    {
      name: "Søndag",
      timeSlots: this.generateTimeSlots(),
    },
  ];

  private generateTimeSlots(): TimeSlot[] {
    return [
      { time: "08-11", available: true },
      { time: "11-14", available: true },
      { time: "14-17", available: true },
      { time: "17-19", available: true },
      { time: "19-22", available: true },
    ];
  }

  constructor(private router: Router) {}

  navigateToDetails(dayName: string, slotTime: string): void {
    this.router.navigate(['/details'], { queryParams: { day: dayName, time: slotTime } });
  }

  getImageUrl(): string {
    // This would typically come from an asset or API
    return "https://cdn.builder.io/api/v1/image/assets/TEMP/792fc0487bc40f59d1d9b11ab58d650037722a23?placeholderIfAbsent=true&apiKey=e3c5a4bc6e4f4253907dec5355c91c46";
  }
}
