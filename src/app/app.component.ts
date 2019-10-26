import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MenuComponent } from './shared/menu/menu.component';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Axis from 'd3-axis';
import * as d3Array from 'd3-array';

import { SAMPLE_DATA } from './data04';

export interface Margin {
    top: number;
    right: number;
    bottom: number;
    left: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'D3 Visualization';

    private margin: Margin;

    private width: number;
    private height: number;

    private svg: any;     // TODO replace all `any` by the right type

    private x: any;
    private y: any;
    private z: any;
    private g: any;

    constructor() {}

    ngOnInit() {
    }


}
