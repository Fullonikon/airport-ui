import { Component, OnInit } from '@angular/core';
import {Transport} from '../models/Transport';
import {AirportService} from '../service/airport.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {

  displayedColumns: string[] = ['tailNumber', 'type',
    'capacity', 'flightRange', 'model'];
  transports: Transport[];

  constructor(private airportService: AirportService) { }

  ngOnInit(): void {
    this.getTransport();
  }

  getTransport() {
    this.airportService.getTransport()
      .subscribe(response => this.transports = response);
  }

}
