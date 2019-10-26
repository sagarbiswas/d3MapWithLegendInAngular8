import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapChartComponent } from './map-chart/map-chart.component';
import { MapLanComponent } from './map-lan/map-lan.component';
import { TiltMapComponent } from './tilt-map/tilt-map.component';

const routes: Routes = [{
  component: MapChartComponent, path: 'map'
}, {
  component: MapLanComponent, path: ''
},
{
  component: TiltMapComponent, path: 'tilt'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
