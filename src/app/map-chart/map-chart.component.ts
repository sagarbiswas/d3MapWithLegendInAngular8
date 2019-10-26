import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import d3Tip from 'd3-tip';
import * as topojson from 'topojson-client';
import { map } from 'rxjs/operators';
export interface Margin {
  top: number;
  right: number;
  bottom: number;
  left: number;
}
export interface Places {
   name: string;
   nam: string;
   location: {
    latitude: number;
    longitude: number;
   };
}
const places = [
  {
    name: '1 Gorkha Rifles',
nam: 'https://en.wikipedia.org/wiki/1_Gorkha_Rifles',
    location: {
      latitude: 30.975441,
      longitude: 76.990228
    }
  },
  {
    name: '3 Gorkha Rifles',
nam: 'https://en.wikipedia.org/wiki/3_Gorkha_Rifles',
    location: {
      latitude: 25.317645,
      longitude: 82.973914
    }
  }
,
  {
    name: '5 Gorkha Rifles',
    nam: 'https://en.wikipedia.org/wiki/5_Gorkha_Rifles',
location: {
      latitude: 25.578773,
      longitude: 91.893254
    }
  }
,
  {
    name: '11 Gorkha Rifles',
    nam: 'https://en.wikipedia.org/wiki/11_Gorkha_Rifles',
location: {
      latitude: 26.846694,
      longitude: 80.946166
    }
  }
,
  {
    name: 'Gharwal Rifles',
    nam: 'https://en.wikipedia.org/wiki/Gharwal_Rifles',
location: {
      latitude: 29.837746,
      longitude: 78.687107
    }
  }
,
  {
    name: 'Brigade of the Guards',
    nam: 'https://en.wikipedia.org/wiki/Brigade_of_the_Guards',
location: {
      latitude: 21.227531,
      longitude: 79.190083
    }
  }
,
  {
    name: 'Bihar Regiment',
nam: 'https://en.wikipedia.org/wiki/Bihar_Regiment',
    location: {
      latitude: 25.620667,
      longitude: 85.049325
    }
  }
,
  {
    name: 'Parachute Regiment',
    nam: 'https://en.wikipedia.org/wiki/Parachute_Regiment',
location: {
      latitude: 12.971599,
      longitude: 77.594563
    }
  }
,
  {
    name: 'Ramgarh Cantonment',
    nam: 'https://en.wikipedia.org/wiki/Ramgarh_Cantonment',
location: {
      latitude: 23.633224,
      longitude: 85.514874
    }
  }
,
  {
    name: 'Madras Regiment',
    nam: 'https://en.wikipedia.org/wiki/Madras_Regiment',
location: {
      latitude: 11.363560,
      longitude: 76.788471
    }
  }
,
  {
    name: 'Grenadiers Regiment',
    nam: 'https://en.wikipedia.org/wiki/Grenadiers_Regiment',
location: {
      latitude: 23.181467,
      longitude: 79.986407
    }
  }
,
  {
    name: 'Maratha Light Infantry',
    nam: 'https://en.wikipedia.org/wiki/Maratha_Light_Infantry',
location: {
      latitude: 15.849695,
      longitude: 74.497674
    }
  },
  {
    name: 'Rajputana Rifles',
    nam: 'https://en.wikipedia.org/wiki/Rajputana_Rifles',
location: {
      latitude: 28.596128,
      longitude: 77.158738
    }
  },
  {
    name: 'Kumaon Regiment',
    nam: 'https://en.wikipedia.org/wiki/Kumaon_Regiment',
location: {
      latitude: 29.643362,
      longitude: 79.432182
    }
  }
,
  {
    name: 'Sikh Light Infantry',
    nam: 'https://en.wikipedia.org/wiki/Sikh_Light_Infantry',
location: {
      latitude: 27.367290,
      longitude: 79.622137
    }
  }
];

@Component({
  selector: 'app-map-chart',
  templateUrl: './map-chart.component.html',
  styleUrls: ['./map-chart.component.scss']
})
export class MapChartComponent implements OnInit {
  private margin: Margin;

  private width = 960;
  private height = 600;
// private places: Places;
  private color: any;
  private projection: any;
  private path: any;
  private data: any;
  // private cantons: any;
  private group: any;
  private tip: any;
  private areas: any;
  private mapJsonUrl = 'https://ucarecdn.com/8e1027ea-dafd-4d6c-bf1e-698d305d4760/world110m2.json';

  constructor() { }

  ngOnInit() {
   
    var colorScale = d3.scaleThreshold()
    .domain([100000, 1000000, 10000000, 30000000, 100000000, 500000000])
    .range(d3.schemeBlues[7]);
    // countries which have states, needed to toggle visibility
    // for USA/ etc. either show countries or states, not both
    var chartDiv = document.getElementById("map");
    const width = chartDiv.clientWidth;
    let rotated = 90;
    const height = 600;
    var usa, canada; 
    var states; //track states
    //track where mouse was clicked
    var initX;
    //track scale only rotate when s === 1
    var s = 1;
    var mouseClicked = false;


    var projection = d3.geoMercator()
        .scale(153)
        .translate([width/2,height/1.5])
        .rotate([rotated,0,0]); //center on USA because 'murica

    var zoom = d3.zoom()
         .scaleExtent([1, 20])
         .on("zoom", zoomed);

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height).attr("fill","#2471A3")
          //track where user clicked down
          .on("mousedown", function() {
             d3.event.preventDefault(); 
             //only if scale === 1
             if(s !== 1) return;
               initX = d3.mouse(this)[0];
               mouseClicked = true;
          })
          .on("mouseup", function() {
              if(s !== 1) return;
              rotated = rotated + ((d3.mouse(this)[0] - initX) * 360 / (s * width));
              mouseClicked = false;
          })
        .call(zoom);


      function rotateMap(endX) {
        projection.rotate([rotated + (endX - initX) * 360 / (s * width),0,0])
            g.selectAll('path')       // re-project path data
           .attr('d', path).attr("fill","#2471A3");
      }
    //for tooltip 
    var offsetL = document.getElementById('map').offsetLeft+10;
    var offsetT = document.getElementById('map').offsetTop+10;

    var path = d3.geoPath()
        .projection(projection);

    var tooltip = d3.select("#map")
         .append("div")
         .attr("class", "tooltip hidden");

    //need this for correct panning
    var g = svg.append("g");

    //det json data and draw it
    d3.json("/assets/test.json").then(function(world: any) {
      // if(error) return console.error(error);
       console.log('ff' + JSON.stringify(world));
      //countries
      g.append("g")
          .attr("class", "boundary")
        .selectAll("boundary")
          .data(topojson.feature(world, world.objects.countries).features)
          .enter().append("path")
          .attr("name", function(d) {return d.properties.name;})
          .attr("id", function(d) { return d.id;})
          .on('click', selected)
          .on("mousemove", showTooltip)
          .on("mouseout",  function(d,i) {
              tooltip.classed("hidden", true);
           })
          .attr("d", path).style("fill", "#2471A3");

      usa = d3.select('#USA');
      canada = d3.select('#CAN');
        
      //states
      g.append("g")
          .attr("class", "boundary state hidden")
        .selectAll("boundary")
          .data(topojson.feature(world, world.objects.states).features)
          .enter().append("path")
          .attr("name", function(d) { return d.properties.name;})
          .attr("id", function(d) { return d.id;})
          .on('click', selected)
          .on("mousemove", showTooltip)
          .on("mouseout",  function(d,i) {
              tooltip.classed("hidden", true);
           })
          .attr("d", path).attr("d", path).attr("fill", "#2471A3").style("fill", "#2471A3");

      states = d3.selectAll('.state');
    });

    function showTooltip(d) {
      const label = d.properties.name;
      var mouse = d3.mouse(svg.node())
        .map( function(d) { return parseInt(d); } );
      tooltip.classed("hidden", false)
        .attr("style", "left:"+(mouse[0]+offsetL)+"px;top:"+(mouse[1]+offsetT)+"px")
        .html(label);
    }

    function selected() {
      d3.select('.selected').classed('selected', false);
      d3.select(this).classed('selected', true);
    }


    function zoomed() {
      var t = d3.event.translate;
      s = d3.event.scale; 
      var h = 0;

      t[0] = Math.min(
        (width/height)  * (s - 1), 
        Math.max( width * (1 - s), t[0] )
      );

      t[1] = Math.min(
        h * (s - 1) + h * s, 
        Math.max(height  * (1 - s) - h * s, t[1])
      );

      zoom.translate(t);
      if(s === 1 && mouseClicked) {
        rotateMap(d3.mouse(this)[0])
        return;
      }

      g.attr("transform", "translate(" + t + ")scale(" + s + ")");

      //adjust the stroke width based on zoom level
      d3.selectAll(".boundary")
        .style("stroke-width", 1 / s).style("fill", "#2471A3");;
      
      //toggle state/USA visability
      if(s > 1.5) {
        states
          .classed('hidden', false);
        usa
          .classed('hidden', true);
        canada
          .classed('hidden', true);
      } else {
      states
        .classed('hidden', true);
      usa
        .classed('hidden', false);
      canada
        .classed('hidden', false);
    }
  }
  }
}
    // this.mercatorBounds();
//     d3.json('/assets/test.topojson').then(function(worldJson: any) {
//       console.log('d3assets' + worldJson);
//        const projection = this.getProjection();
//         const path = d3.geoPath().projection( projection );
//         const svg = d3.select('.map').append('svg')
//     .attr('width', this.width)
//     .attr('height', this.height);
//     svg.selectAll( 'path.land' )
//         .data( topojson.feature( worldJson, worldJson.objects.countries ).features )
//         .enter().append( 'path' )
//         .attr( 'class', 'land' )
//         .attr( 'd', path );
//     });
//     this.getProjection();
//   }

// mercatorBounds: any = function(projection) {
//   // tslint:disable-next-line:no-debugger
//   debugger;
//   console.log('projection' + projection);
// // find the top left and bottom right of current projection
// const maxlat = 83,
//     yaw = projection.rotate()[ 0 ],
//     xymax = projection( [ -yaw + 180 - 1e-6, -maxlat ] ),
//     xymin = projection( [ -yaw - 180 + 1e-6, maxlat ] );

//  return [ xymin, xymax ];
// };
// getProjection: any = function(worldJson) {
//   // tslint:disable-next-line:no-debugger
//   debugger;
//   // create a first guess for the projection
//   console.log('get into getProjection');
// let scale = 1;
//   const offset = [ this.width / 2, this.height / 2 ];
//    const projection = d3.geoEquirectangular().scale( scale ).rotate( [0, 0] ).center([0, 5]).translate( offset );
//    const bounds = this.mercatorBounds( projection );
//    let scaleExtent;

//   scale = this.width / (bounds[ 1 ][ 0 ] - bounds[ 0 ][ 0 ]);
//   scaleExtent = [ scale, 10 * scale ];

//   projection
//     .scale( scaleExtent[ 0 ] );

// return projection;
// };






















//   private mapInit() {
//     this.color = d3.scaleOrdinal()
//     .domain([1, 2, 3, 4, 5, 6, 7, 8, 9])
//     .range(['#98abc5']);
//     // this.projection = d3.geoMercator().scale(1100).translate([-1000, 800]);
//     // this.path = d3.geoPath()
//     // .projection(this.projection);
//   }
// private d3Json() {
//   this.projection = d3.geoMercator().scale(1100).translate([-1000, 800]);
//   this.path = d3.geoPath()
//   .projection(this.projection);
//   const svg = d3.select('#map').append('svg')
//   .attr('viewBox', '0 0 900 800')
//   .attr('preserveAspectRatio', 'xMidYMid meet');
//   console.log('ccccc');
//   d3.json('/assets/test.topojson').then(function(swiss: any) {
//     console.log('ddddd' + JSON.stringify(swiss));
//     // this.cantons = topojson.mesh(swiss, swiss.objects.india);
//     const dataValue = swiss;
//       const cantons = topojson.feature(swiss, swiss.objects.india);
//       console.log('cantons' + JSON.stringify(cantons));
//       const group = svg.selectAll('g')
//       .data(topojson.feature(swiss, swiss.objects.india).features)
//       .enter()
//       .append('g');
//       const tip = d3Tip()
//           .attr('class', 'd3-tip')
//           .offset([-5, 0])
//           .style('left', '300px')
//           .style('top', '400px')
//           .html(function(d) {
//             return ('<a href=' + d.nam + ' target="_blank">' + d.name + '</a>');
//           });
//         svg.call(tip);
//         svg.selectAll('.pin')
//           .data(places)
//           .enter().append('circle', '.pin')
//           .attr('r', 5)
//           .attr('transform', function(d) {
//           return 'translate(' + this.projection([
//             d.location.longitude,
//             d.location.latitude
//           ]) + ')';
//           })
//           .on('mouseover', this.tip.show)
//           .on('click', this.tip.hide);
//       // var projection = d3.geo.mercator().scale(900).translate([-600,700]);
//       this.path = d3.geo.path().projection(this.projection);
//       this.areas = group.append('path')
//       .attr('d', this.path)
//       .attr('class', 'area')
//       .attr('fill', 'steelblue');
//       });
// }
// private topojsonFun(data) {
//    // tslint:disable-next-line:no-debugger
//    debugger;
//   return topojson.feature(data, data.objects.india);
// }




