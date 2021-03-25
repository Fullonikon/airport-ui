import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Transport} from '../models/Transport';
import {Observable} from 'rxjs';
import {Hangar} from '../models/Hangar';
import {Pilot} from '../models/Pilot';

@Injectable({
  providedIn: 'root',
})
export class AirportService {
  url = 'http://localhost:8081/';

  constructor(private http: HttpClient) { }

  saveTransport(transport: Transport): Observable<any> {
    return this.http.post(this.url + 'saveTransport', transport);
  }

  savePilot(pilot: Pilot): Observable<any> {
    return this.http.post(this.url + 'savePilot',  pilot);
  }

  saveHangar(hangar: Hangar): Observable<any> {
    return this.http.post(this.url + 'saveHangar', hangar);
  }

  getTransport(): Observable<Transport[]> {
    return this.http.get<Transport[]>(this.url + 'findAllTransport');
  }


}
