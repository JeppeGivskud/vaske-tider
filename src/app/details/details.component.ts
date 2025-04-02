import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  imports: [ FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent  implements OnInit{
  day: string | null = null;
  time: string | null = null;

  constructor(private route: ActivatedRoute) {}

  @Input() initials: string = "";
  @Output() initialsChange = new EventEmitter<string>();

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.day = params['day'];
      this.time = params['time'];
    });
  }}



