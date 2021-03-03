import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'airport';

  constructor(private http: HttpClient) { }

  get() {
    console.log("Xyi");
    this.http.get('http://localhost:8081/')
      .subscribe(s => console.log(s));
  }

}
