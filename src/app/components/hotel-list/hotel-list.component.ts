import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelService, Hotel } from './../../services/hotel.service'; // adjust if path differs

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[] = [];

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe({
      next: (data) => {
        this.hotels = data;
      },
      error: (err) => {
        console.error('Error fetching hotels:', err);
      }
    });
  }
}
