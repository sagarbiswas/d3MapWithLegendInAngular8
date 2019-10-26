import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatOptionModule, MatSelectModule,MatButtonModule, MatCheckboxModule,
  MatIconModule, MatSidenavModule, MatToolbarModule, MatFormFieldModule, MatNativeDateModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapChartComponent } from './map-chart/map-chart.component';
import { MapLanComponent } from './map-lan/map-lan.component';
import { MenuComponent } from './shared/menu/menu.component';
import { TiltMapComponent } from './tilt-map/tilt-map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapChartComponent,
    MapLanComponent,
    MenuComponent,
    TiltMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
