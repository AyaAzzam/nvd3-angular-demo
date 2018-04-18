import { Component, OnInit } from '@angular/core';

import 'd3';
import 'nvd3';

@Component({ 
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


	private options;
	private data;

	ngOnInit() {
		this.options = {
			chart: {
				type: 'lineChart',
				height: 450,
				margin : {
					top: 20,
					right: 20,
					bottom: 50,
					left: 55
				},
				x: function(d){return d.label;},
				y: function(d){return d.value;},
				showValues: true,
				xAxis: {
					axisLabel: 'X Axis'
				},
				yAxis: {
					axisLabel: 'Y Axis',
					axisLabelDistance: -10
				}
			}
		}
		this.data = [
		{
			key: "Cumulative Return",
			values: [
			{
				"label" : 1 ,
				"value" : 29
			} ,
			{
				"label" : 2 ,
				"value" : 0
			} ,
			{
				"label" : 3 ,
				"value" : 32
			} ,
			{
				"label" : 4 ,
				"value" : 196
			} ,
			{
				"label" : 5 ,
				"value" : 0
			} ,
			{
				"label" : 6 ,
				"value" : 98
			} ,
			{
				"label" : 7 ,
				"value" : 3
			} ,
			{
				"label" : 8 ,
				"value" : 5
			}
			]
		}
		];
	}


}
