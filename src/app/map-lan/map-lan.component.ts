import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import d3Tip from 'd3-tip';
import * as topojson from 'topojson-client';
import { map } from 'rxjs/operators';
const places = [
  {
    name: "Dublin",
    type: 'HQ',
    location: {
      latitude: 53.35014,
      longitude: -6.266155
    }
  },
  {
    name: "Moscow",
    type: 'Treasury',
    location: {
      latitude: 55.751244,
      longitude:37.618423
    }
  }
,
  {
    name: "Grand Cayman",
    type: 'IP Holding',
location: {
      latitude: 19.292997,
      longitude:-81.366806
    }
  }
,
  {
    name: "Texas",
    type: 'Manufacturing',
location: {
      latitude: 30.274096,
      longitude: -93.732666
    }
  }
,
  {
    name: "San Jose",
    type: 'Distributor',
location: {
      latitude: 9.934739,
      longitude: -84.087502
    }
  }
,
  {
    name: "Guarultos",
    type: 'Distributor',
location: {
      latitude: -23.454163,
      longitude: -46.534096
    }
  }
,
  {
    name: "Westport",
    type: 'Distributor',
    head: 'yes',
    location: {
      latitude: 53.802132,
      longitude: -9.514347
    }
  }
,
  {
    name: "Annely",
    type: 'Distributor',
location: {
      latitude: 45.903602,
      longitude: 6.115976
    }
  }
,
  {
    name: "Tubilux",
    type: 'Distributor',
location: {
      latitude:41.677347,
      longitude:12.505906
    }
  }
,
  {
    name: "Frankfurt",
    type: 'Distributor',
location: {
      latitude: 50.110924,
      longitude: 8.682127
    }
  }
,
  {
    name: "Istanbul",
    type: 'HQ',
location: {
      latitude: 28.97953,
      longitude: 41.015137
    }
  }
,
  {
    name: "London",
    type: 'Distributor',
location: {
      latitude: 51.50853,
      longitude: -0.076132
    }
  },
  {
    name: "Paris",
    type: 'Distributor',
location: {
      latitude: 48.864716,
      longitude: 2.349014
    }
  },
  {
    name: "Rome",
    type: 'HQ',
location: {
      latitude: 41.906204,
      longitude: 12.507516
    }
  }
,
  {
    name: "Madrid",
    type: 'Distributor',
location: {
      latitude: 40.416775,
      longitude: -3.70379
    }
  },
  {
    name: "Kiev",
    type: 'HQ',
location: {
      latitude: 50.434341,
      longitude: 30.527756
    }
  },
  {
    name: "Warsaw",
    type: 'Distributor',
location: {
      latitude: 52.237049,
      longitude: 21.017532
    }
  },
  {
    name: "Bucharest",
    type: 'Distributor',
location: {
      latitude: 44.439663,
      longitude: 26.096306
    }
  },
  {
    name: "Amsterdam",
    type: 'Distributor',
location: {
      latitude: 52.377956,
      longitude: 4.89707
    }
  },
  {
    name: "Brussels",
    type: 'Distributor',
location: {
      latitude: 50.85045,
      longitude: 4.34878
    }
  },
  {
    name: "Athens",
    type: 'Distributor',
location: {
      latitude: 37.98381,
      longitude: 23.727539
    }
  },
  {
    name: "Prague",
location: {
      latitude: 50.08804,
      longitude: 14.42076
    }
  },
  {
    name: "Lisbon",
    type: 'HQ',
location: {
      latitude: 38.736946,
      longitude: -9.142685
    }
  },
  {
    name: "Stockholm",
location: {
      latitude: 59.334591,
      longitude: 18.06324
    }
  },
  {
    name: "Budapest",
    type: 'Distributor',
location: {
      latitude: 47.497913,
      longitude: 19.040236
    }
  },
  {
    name: "Minsk",
location: {
      latitude: 53.893009,
      longitude: 27.567444
    }
  },
  {
    name: "Belgrade",
    type: 'Distributor',
location: {
      latitude: 44.787197,
      longitude: 20.457273
    }
  },
  {
    name: "Vienna",
location: {
      latitude: 48.210033,
      longitude: 16.363449
    }
  },
  {
    name: "Bern",
    type: 'Distributor',
location: {
      latitude: 46.94809,
      longitude: 7.44744
    }
  },
  {
    name: "Sofia",
location: {
      latitude: 42.698334,
      longitude: 23.319941
    }
  },
  {
    name: "Coppenhagen",
    type: 'Distributor',
location: {
      latitude: 55.676098,
      longitude: 12.568337
    }
  },
  {
    name: "Helsenki",
    type: 'IP Holding',
location: {
      latitude: 60.192059,
      longitude: 24.945831
    }
  },
  {
    name: "Bratislava",
    type: 'Distributor',
location: {
      latitude: 48.148598,
      longitude: 17.107748
    }
  },
  {
    name: "Oslo",
location: {
      latitude: 59.911491,
      longitude: 10.757933
    }
  },
  {
    name: "Dubrobnik",
    type: 'IP Holding',
location: {
      latitude: 42.64807,
      longitude: 18.09216
    }
  },
  {
    name: "Chisinau",
    type: 'Distributor',
location: {
      latitude: 47.00367,
      longitude: 28.907089
    }
  },
  {
    name: "Sarajevo",
location: {
      latitude: 43.85643,
      longitude: 18.413029
    }
  },
  {
    name: "Tirana",
    type: 'IP Holding',
location: {
      latitude: 41.327953,
      longitude: 19.819025
    }
  },
  {
    name: "Kaunas",
    type: 'Distributor',
location: {
      latitude: 54.898521,
      longitude: 23.903597
    }
  },
  {
    name: "Skopje",
    type: 'HQ',
location: {
      latitude: 41.99646,
      longitude: 21.43141
    }
  },
  {
    name: "Ljubljana",
    type: 'IP Holding',
location: {
      latitude: 46.056946,
      longitude: 14.505751
    }
  },
  {
    name: "Riga",
    type: 'HQ',
location: {
      latitude: 56.923946,
      longitude: 24.1371
    }
  },
  {
    name: "Tallinn",
    type: 'Distributor',
location: {
      latitude: 59.436962,
      longitude: 24.753574
    }
  },
  {
    name: "Podjorica",
    type: 'HQ',
location: {
      latitude: 42.442574,
      longitude: 19.268646
    }
  },
  {
    name: "Luxembourg",
    type: 'Distributor',
location: {
      latitude: 49.611622,
      longitude: 6.131935
    }
  },
  {
    name: "Valeta",
location: {
      latitude: 35.89972,
      longitude: 14.51472
    }
  },
  {
    name: "Rejkyavik",
    type: 'Distributor',
location: {
      latitude: 64.128288,
      longitude: -21.827774
    }
  },
  {
    name: "Andorra",
    type: 'Distributor',
location: {
      latitude: 42.506317,
      longitude: 1.521835
    }
  },
  {
    name: "Monaco",
    type: 'HQ',
location: {
      latitude: 43.73333,
      longitude: 7.41667
    }
  }
];

@Component({
  selector: 'app-map-lan',
  templateUrl: './map-lan.component.html',
  styleUrls: ['./map-lan.component.scss']
})
export class MapLanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let rotated = -20;
    var width = 960,
    height = 600;
var color= d3.scaleOrdinal()
			.domain([1,2,3,4,5,6,7,8,9])
			.range(['#98abc5']);

/*var projection = d3.geo.mercator()
    .scale(800)
    .translate([-500,600]);*/

var projection = d3.geoMercator()
// .scale(1100).translate([-1000,800]);
.scale(153)
        .translate([width/2,height/1.5])
        .rotate([rotated,0,0]);
var path = d3.geoPath()
    .projection(projection);

var svg = d3.select("#map").append("svg")
    .attr("viewBox", "0 0 900 800")
	 .attr("preserveAspectRatio", "xMidYMid meet");
var data;
d3.json("/assets/test.json").then(function(swiss) {

  var cantons = topojson.feature(swiss, swiss.objects.countries);
  
  			//svg.call(tip);
			var group=svg.selectAll("g")
				.data(cantons.features)
				.enter()
				.append("g");
				//.on('mouseover', tip.show)
      			//.on('mouseout', tip.hide)
					
					
					var tip = d3Tip()
							.attr('class', 'd3-tip')
							.offset([-5, 0])
							.style("left", "300px")
							.style("top", "400px")
							.html(function(d) {
								return ('<a class="pin_style" href="+d.nam+" target="_blank">'+d.name +'</a>');
							})
							
						svg.call(tip);


svg.selectAll(".pin")
						  .data(places)
						  .enter().append("circle", ".pin")
              .attr("r", function(d){
                if(d.head == 'yes'){
                  return 5;
                }
                return 3;
              })
              .attr("fill", function(d) {
                if (d.type == 'HQ') {
                  return "MediumBlue";
                } else if (d.type == 'Treasury') {
                  return "DeepPink";
                } else if(d.type == 'Distributor'){
                  return 'Aqua';
                } else if(d.type == 'IP Holding'){
                  return 'yellow';
                }
                return "SaddleBrown";
              })
              .attr('stroke', function(d) {
                if(d.head == 'yes'){
                  return "Blue";
                }
              })
              .attr('storke-opacity', function(d) {
                if(d.head == 'yes'){
                  return '40%';
                }
              })
              .attr('stroke-width', function(d) {
                if(d.head == 'yes'){
                  return '.30%';
                }
              })
						  .attr("transform", function(d) {
							return "translate(" + projection([
							  d.location.longitude,
							  d.location.latitude
							]) + ")";
						  })
						  .on('mouseover', tip.show)
							.on('click', tip.hide);
					
				//var projection = d3.geo.mercator().scale(900).translate([-600,700]);
				var path= d3.geoPath().projection(projection);

				var areas= group.append("path")
					.attr("d", path)
					.attr("class", "area")
				 .attr("fill","#2471A3"); // MAP FILL COLOR WILL BE CHANGE FROM HERE - Sagar
						
});
  }

}
