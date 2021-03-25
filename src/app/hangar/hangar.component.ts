import {Component, OnInit} from '@angular/core';
import {AirportService} from '../service/airport.service';
import {Transport} from '../models/Transport';
import {Hangar} from '../models/Hangar';
import {Pilot} from '../models/Pilot';


@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {
  title = 'airport';

  constructor(private airportService: AirportService) { }

  ngOnInit(): void {
  }

  saveTransport(transport: Transport) {
    this.airportService.saveTransport(transport)
      .subscribe(res => console.log(res));
  }

  saveHangar(hangar: Hangar) {
    this.airportService.saveHangar(hangar)
      .subscribe(res => console.log(res));
  }

  savePilot(pilot: Pilot) {
    this.airportService.savePilot(pilot)
      .subscribe(res => console.log(res));
  }


}
