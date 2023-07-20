import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Venue} from "./models/venue";

@Injectable({
  providedIn: 'root'
})
export class VenuesService {

  constructor(private http: HttpClient) { }
  getVenues(): Observable<Venue[]> {
    return this.http.get<Venue[]>('http://127.0.0.1:8000/api/v1/venues');
  }

}
