import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import d3Tip from 'd3-tip';
import * as topojson from 'topojson-client';
import * as geoSat from 'd3-geo-projection';

@Component({
  selector: 'app-tilt-map',
  templateUrl: './tilt-map.component.html',
  styleUrls: ['./tilt-map.component.scss']
})
export class TiltMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var width = 960,
    height = 960;

var projection = geoSat.geoSatellite()
    .distance(1.1)
    .scale(6000)
    .rotate([76.00, -34.50, 32.12])
    .center([-4, 5])
    .tilt(30)
    .clipAngle(Math.acos(1 / 1.1) * 180 / Math.PI - 1e-6)
    .precision(.3);

var graticule = d3.geoGraticule ()
    .extent([[-93, 27], [-47 + 1e-6, 57 + 1e-6]])
    .step([3, 3]);

var path = d3.geoPath()
    .projection(projection);

var svg = d3.select("#tilt").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path);

d3.json("/assets/us-land.json").then(function(us) {

  svg.append("path")
      .datum(topojson.feature(us, us.objects.land))
      .attr("class", "boundary")
      .attr("d", path);
});

d3.select(self.frameElement).style("height", height + "px");
  }

}
