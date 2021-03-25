import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MatSliderModule} from '@angular/material/slider';
import {CdkTableModule} from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';
import {RouterModule, Routes} from '@angular/router';
import { TransportComponent } from './transport/transport.component';
import { HangarComponent } from './hangar/hangar.component';

const routes: Routes = [
  {path: '', component: HangarComponent},
  {path: 'transport', component: TransportComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TransportComponent,
    HangarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSliderModule,
    CdkTableModule,
    MatTableModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
