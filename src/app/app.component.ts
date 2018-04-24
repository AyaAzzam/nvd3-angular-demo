import { Component, OnInit } from '@angular/core';

import 'd3';
import 'nvd3';

@Component({ 
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	/**
    * options object - passed as input to the nvd3 chart.
    */
    private options;

	/**
    * Chart data - passed from the parent component.
    */
    private data;
	   	/**
    * chart object that created by nvd3 chart.
    */
    private chart;

	/**
    * the main svg element for the nvd3 chart.
    */
    private rootSvg;

    ngOnInit() {

    	this.configurateChart();
    	this.prepareChartData();
    }


    configurateChart() {
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
    			},
    			callback : ((chart) => {
    				this.chart = chart;
    				this.rootSvg = d3.select('#chartContainer').select('svg');

	                // start drawing the lines just after the chart is ready.
	                this.drawLine('line-max', 120, '#ff7f0e', 'Max.');
	                this.drawLine('line-min', 60, '#ff7f0e', 'Min.');

	            }),
    			dispatch: {
    				renderEnd: ((event) => {

	        			// remove the lines & texts and redraw them again.

	        			this.removeSvgElement('#line-max');
	        			this.removeSvgElement('#line-max-text');
	        			this.drawLine('line-max', 120, '#ff7f0e', 'Max.');

	        			this.removeSvgElement('#line-min');
	        			this.removeSvgElement('#line-min-text');
	        			this.drawLine('line-min', 60, '#ff7f0e', 'Min.');
	        		})
    			}
    		}
    	}
    }

    prepareChartData() {

    	this.data = [{
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
    	}];
    }

    drawLine(lineId, value, color, text) {
    	var yScale = this.chart.yAxis.scale();
    	var margin = this.chart.margin();
    	var height = this.chart.height();
    	var width = this.rootSvg.style('width').split('px')[0];

    	this.rootSvg.append('line')
    	.style('stroke', color)
    	.style('stroke-width', '1px')
    	.style('stroke-dasharray', '5,10')
    	.attr('id', lineId)
    	.attr('x1', margin.left)
    	.attr('y1', yScale(value) + margin.top)
    	.attr('x2', +width - margin.right)
    	.attr('y2', yScale(value) + margin.top);

    	this.rootSvg.append("text")
    	.style('stroke', color)
    	.attr('id', lineId+'-text')
    	.attr("x", +width - margin.right / 2)
    	.attr("y", yScale(value) + margin.top)
    	.attr("text-anchor", "end")
    	.text(text);	
    }


    removeSvgElement(id) {
    	var svgElement = this.rootSvg.select(id);
    	if(svgElement) {
    		this.rootSvg.select(id).remove();
    	}
    }


}
