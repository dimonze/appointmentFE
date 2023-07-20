import { Component, OnInit } from '@angular/core';
import { VenuesService } from './venues.service';
import {Venue} from "./models/venue";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'venue-app';
  venues!: Venue[];

  constructor(private venuesService: VenuesService) { }

  ngOnInit() {
    this.venuesService.getVenues().subscribe((data: Venue[]) => {
      this.venues = data;
    });
  }
}
