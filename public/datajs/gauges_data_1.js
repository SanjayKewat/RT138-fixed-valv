/**
 * Created by Administrator on 2/23/2016.
 */
//    tickSize(major_tck, minor_tick, 5)

//    Annular Guage Inner
var svg = d3.select("#speedometer")
    .append("svg:svg")
    .attr("width", 500)
    .attr("height", 450);


var gauge = iopctrl.arcslider()
    .radius(125)
    .events(false)
    .indicator(iopctrl.defaultGaugeIndicator);
gauge.axis().orient("out")
    .normalize(true)
    .ticks(11)
    .tickSubdivide(3)
    .tickSize(20, 10, 5)
    .tickPadding(20)//number padding
    .scale(d3.scale.linear()
        .domain([0, 6000])
        .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

var segDisplay = iopctrl.segdisplay()
    .width(95)
    .digitCount(5)
    .negative(false)
    .decimals(0);

svg.append("g")
    .attr("class", "segdisplay")
    .attr("transform", "translate(148, 280)")
    .call(segDisplay);

svg.append("g")
    .attr("class", "rampSweep")
    .style("fill", "#7bdeff");



svg.append("g")
    .attr("class", "gauge")
    .call(gauge);


//    small Annular Guage Inner
var svg_s1 = d3.select("#speedometer_s1")
    .append("svg:svg")
    .attr("width", 400)
    .attr("height", 350);


var gauge_s1 = iopctrl.arcslider()
    .radius(100)
    .events(false)
    .indicator(iopctrl.defaultGaugeIndicator);
gauge_s1.axis().orient("out")
    .normalize(true)
    .ticks(11)
    .tickSubdivide(3)
    .tickSize(20, 10, 5)
    .tickPadding(15)
    .scale(d3.scale.linear()
        .domain([0, 6000])
        .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

var segDisplay_s1 = iopctrl.segdisplay()
    .width(77)
    .digitCount(4)
    .negative(false)
    .decimals(0);

svg_s1.append("g")
    .attr("class", "segdisplay")
    .attr("transform", "translate(140, 240)")
    .call(segDisplay_s1);

svg_s1.append("g")
    .attr("class", "rampSweep")
    .style("fill", "#7bdeff");



svg_s1.append("g")
    .attr("class", "gauge")
    .call(gauge_s1);


//    Accumulator Guage Inner

var svg_2 = d3.select("#speedometer2")
    .append("svg:svg")
    .attr("width", 500)
    .attr("height", 450);



var gauge_2 = iopctrl.arcslider()
    .radius(125)
    .events(false)
    .indicator(iopctrl.defaultGaugeIndicator);
gauge_2.axis().orient("out")
    .normalize(true)
    .ticks(11)
    .tickSubdivide(3)
    .tickSize(20, 10, 5)
    .tickPadding(15)
    .scale(d3.scale.linear()
        .domain([0, 10000])
        .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

var segDisplay_2 = iopctrl.segdisplay()
    .width(95)
    .digitCount(5)
    .negative(false)
    .decimals(0);

svg_2.append("g")
    .attr("class", "segdisplay")
    .attr("transform", "translate(148, 280)")
    .call(segDisplay_2);

svg_2.append("g")
    .attr("class", "rampSweep")
    .style("fill", "#7bdeff");



svg_2.append("g")
    .attr("class", "gauge")
    .call(gauge_2);

//small

var svg_2_s2 = d3.select("#speedometer2_s2")
    .append("svg:svg")
    .attr("width", 400)
    .attr("height", 350);



var gauge_2_s2 = iopctrl.arcslider()
    .radius(100)
    .events(false)
    .indicator(iopctrl.defaultGaugeIndicator);
gauge_2_s2.axis().orient("out")
    .normalize(true)
    .ticks(11)
    .tickSubdivide(3)
    .tickSize(20, 10, 5)
    .tickPadding(15)
    .scale(d3.scale.linear()
        .domain([0, 10000])
        .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

var segDisplay_2_s2 = iopctrl.segdisplay()
    .width(95)
    .digitCount(5)
    .negative(false)
    .decimals(0);

svg_2_s2.append("g")
    .attr("class", "segdisplay")
    .attr("transform", "translate(130, 240)")
    .call(segDisplay_2_s2);

svg_2_s2.append("g")
    .attr("class", "rampSweep")
    .style("fill", "#7bdeff");



svg_2_s2.append("g")
    .attr("class", "gauge")
    .call(gauge_2_s2);


//    III Manifold Guage Inner
var svg_3 = d3.select("#speedometer3")
    .append("svg:svg")
    .attr("width", 500)
    .attr("height", 450);



var gauge_3 = iopctrl.arcslider()
    .radius(125)
    .events(false)
    .indicator(iopctrl.defaultGaugeIndicator);
gauge_3.axis().orient("out")
    .normalize(true)
    .ticks(11)
    .tickSubdivide(3)
    .tickSize(20, 10, 5)
    .tickPadding(15)
    .scale(d3.scale.linear()
        .domain([0, 10000])
        .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

var segDisplay_3 = iopctrl.segdisplay()
    .width(95)
    .digitCount(5)
    .negative(false)
    .decimals(0);

svg_3.append("g")
    .attr("class", "segdisplay")
    .attr("transform", "translate(148, 280)")
    .call(segDisplay_3);

svg_3.append("g")
    .attr("class", "rampSweep")
    .style("fill", "#7bdeff");



svg_3.append("g")
    .attr("class", "gauge")
    .call(gauge_3);

//small
var svg_3_s3 = d3.select("#speedometer3_s3")
    .append("svg:svg")
    .attr("width", 400)
    .attr("height", 350);



var gauge_3_s3 = iopctrl.arcslider()
    .radius(100)
    .events(false)
    .indicator(iopctrl.defaultGaugeIndicator);
gauge_3_s3.axis().orient("out")
    .normalize(true)
    .ticks(11)
    .tickSubdivide(3)
    .tickSize(20, 10, 5)
    .tickPadding(15)
    .scale(d3.scale.linear()
        .domain([0, 10000])
        .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

var segDisplay_3_s3 = iopctrl.segdisplay()
    .width(95)
    .digitCount(5)
    .negative(false)
    .decimals(0);

svg_3_s3.append("g")
    .attr("class", "segdisplay")
    .attr("transform", "translate(130, 240)")
    .call(segDisplay_3_s3);

svg_3_s3.append("g")
    .attr("class", "rampSweep")
    .style("fill", "#7bdeff");



svg_3_s3.append("g")
    .attr("class", "gauge")
    .call(gauge_3_s3);


//    IV RigAir Guage Inner
var svg_4 = d3.select("#speedometer4")
    .append("svg:svg")
    .attr("width", 500)
    .attr("height", 450);



var gauge_4 = iopctrl.arcslider()
    .radius(125)
    .events(false)
    .indicator(iopctrl.defaultGaugeIndicator);
gauge_4.axis().orient("out")
    .normalize(true)
    .ticks(11)
    .tickSubdivide(3)
    .tickSize(20, 10, 5)
    .tickPadding(15)
    .scale(d3.scale.linear()
        .domain([0, 300])
        .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

var segDisplay_4 = iopctrl.segdisplay()
    .width(60)
    .digitCount(3)
    .negative(false)
    .decimals(0);

svg_4.append("g")
    .attr("class", "segdisplay")
    .attr("transform", "translate(170, 280)")
    .call(segDisplay_4);

svg_4.append("g")
    .attr("class", "rampSweep")
    .style("fill", "#7bdeff");



svg_4.append("g")
    .attr("class", "gauge")
    .call(gauge_4);

//small

var svg_4_s4 = d3.select("#speedometer4_s4")
    .append("svg:svg")
    .attr("width", 400)
    .attr("height", 350);



var gauge_4_s4 = iopctrl.arcslider()
    .radius(100)
    .events(false)
    .indicator(iopctrl.defaultGaugeIndicator);
gauge_4_s4.axis().orient("out")
    .normalize(true)
    .ticks(11)
    .tickSubdivide(3)
    .tickSize(20, 10, 5)
    .tickPadding(15)
    .scale(d3.scale.linear()
        .domain([0, 300])
        .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

var segDisplay_4_s4 = iopctrl.segdisplay()
    .width(60)
    .digitCount(3)
    .negative(false)
    .decimals(0);

svg_4_s4.append("g")
    .attr("class", "segdisplay")
    .attr("transform", "translate(140, 240)")
    .call(segDisplay_4_s4);

svg_4_s4.append("g")
    .attr("class", "rampSweep")
    .style("fill", "#7bdeff");



svg_4_s4.append("g")
    .attr("class", "gauge")
    .call(gauge_4_s4);



//    V Shearboost Guage Inner
var svg_5 = d3.select("#speedometer5")
    .append("svg:svg")
    .attr("width", 500)
    .attr("height", 450);



var gauge_5 = iopctrl.arcslider()
    .radius(125)
    .events(false)
    .indicator(iopctrl.defaultGaugeIndicator);
gauge_5.axis().orient("out")
    .normalize(true)
    .ticks(11)
    .tickSubdivide(3)
    .tickSize(20, 10, 5)
    .tickPadding(15)
    .scale(d3.scale.linear()
        .domain([0, 10000])
        .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

var segDisplay_5 = iopctrl.segdisplay()
    .width(95)
    .digitCount(5)
    .negative(false)
    .decimals(0);

svg_5.append("g")
    .attr("class", "segdisplay")
    .attr("transform", "translate(148, 280)")
    .call(segDisplay_5);

svg_5.append("g")
    .attr("class", "rampSweep")
    .style("fill", "#7bdeff");



svg_5.append("g")
    .attr("class", "gauge")
    .call(gauge_5);

//small
var svg_5_s5 = d3.select("#speedometer5_s5")
    .append("svg:svg")
    .attr("width", 400)
    .attr("height", 350);



var gauge_5_s5 = iopctrl.arcslider()
    .radius(100)
    .events(false)
    .indicator(iopctrl.defaultGaugeIndicator);
gauge_5_s5.axis().orient("out")
    .normalize(true)
    .ticks(11)
    .tickSubdivide(3)
    .tickSize(20, 10, 5)
    .tickPadding(15)
    .scale(d3.scale.linear()
        .domain([0, 10000])
        .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

var segDisplay_5_s5 = iopctrl.segdisplay()
    .width(95)
    .digitCount(5)
    .negative(false)
    .decimals(0);

svg_5_s5.append("g")
    .attr("class", "segdisplay")
    .attr("transform", "translate(130, 240)")
    .call(segDisplay_5_s5);

svg_5_s5.append("g")
    .attr("class", "rampSweep")
    .style("fill", "#7bdeff");



svg_5_s5.append("g")
    .attr("class", "gauge")
    .call(gauge_5_s5);


var opts = {

    lines: 12, // The number of lines to draw
    angle: 0.25, // The length of each line
    lineWidth: 0.06, // The line thickness
    pointer: {
        length: 0.82, // The radius of the inner circle
        strokeWidth: 0.071, // The rwotation offset
        color: '#000000' // Fill color
    },
    limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
    colorStart: '#000000',   // Colors
    colorStop: '#6cd6cf',    // Stoke color INCREASED with needle
    strokeColor: '#fff',   // Rest of color IN arc
    generateGradient: true

};
var target = document.getElementById('myCanvas'); // your canvas element
var gauge1 = new Donut(target).setOptions(opts); // create sexy gauge!
gauge1.maxValue = 6000; // set max gauge value
gauge1.animationSpeed = 12; // set animation speed (32 is default value)

//    First Guage Outer


var opts_s1 = {

    lines: 12, // The number of lines to draw
    angle: 0.25, // The length of each line
    lineWidth: 0.06, // The line thickness
    pointer: {
        length: 0.82, // The radius of the inner circle
        strokeWidth: 0.071, // The rwotation offset
        color: '#000000' // Fill color
    },
    limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
    colorStart: '#000000',   // Colors
    colorStop: '#6cd6cf',    // Stoke color INCREASED with needle
    strokeColor: '#fff',   // Rest of color IN arc
    generateGradient: true

};
var target_s1 = document.getElementById('myCanvas_s1'); // your canvas element
var gauge1_s1 = new Donut(target_s1).setOptions(opts_s1); // create sexy gauge!
gauge1_s1.maxValue = 6000; // set max gauge value
gauge1_s1.animationSpeed = 12; // set animation speed (32 is default value)

//    First small Guage Outer




//   II Guage Outer
var opts2 = {
    lines: 12, // The number of lines to draw
    angle: 0.25, // The length of each line
    lineWidth: 0.06, // The line thickness
    pointer: {
        length: 0.82, // The radius of the inner circle
        strokeWidth: 0.071, // The rotation offset
        color: '#000000' // Fill color
    },
    limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
    colorStart: '#000000',   // Colors
    colorStop: '#0071bc',    // Stoke color INCREASED with needle
    strokeColor: '#fff',   // Rest of color IN arc
    generateGradient: true

};
var target2 = document.getElementById('myCanvas2'); // your canvas element
var gauge2 = new Donut(target2).setOptions(opts2); // create sexy gauge!
gauge2.maxValue = 10000; // set max gauge value
gauge2.animationSpeed = 12; // set animation speed (32 is default value)

//Small
var opts2_s2 = {
    lines: 12, // The number of lines to draw
    angle: 0.25, // The length of each line
    lineWidth: 0.06, // The line thickness
    pointer: {
        length: 0.82, // The radius of the inner circle
        strokeWidth: 0.071, // The rotation offset
        color: '#000000' // Fill color
    },
    limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
    colorStart: '#000000',   // Colors
    colorStop: '#0071bc',    // Stoke color INCREASED with needle
    strokeColor: '#fff',   // Rest of color IN arc
    generateGradient: true

};
var target2_s2 = document.getElementById('myCanvas2_s2'); // your canvas element
var gauge2_s2 = new Donut(target2_s2).setOptions(opts2_s2); // create sexy gauge!
gauge2_s2.maxValue = 10000; // set max gauge value
gauge2_s2.animationSpeed = 12; // set animation speed (32 is default value)


//   III Guage Outer
var opts3 = {
    lines: 12, // The number of lines to draw
    angle: 0.25, // The length of each line
    lineWidth: 0.06, // The line thickness
    pointer: {
        length: 0.82, // The radius of the inner circle
        strokeWidth: 0.071, // The rotation offset
        color: '#000000' // Fill color
    },
    limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
    colorStart: '#000000',   // Colors
    colorStop: '#50527A',    // Stoke color INCREASED with needle
    strokeColor: '#fff',   // Rest of color IN arc
    generateGradient: true

};
var target3 = document.getElementById('myCanvas3'); // your canvas element
var gauge3 = new Donut(target3).setOptions(opts3); // create sexy gauge!
gauge3.maxValue = 10000; // set max gauge value
gauge3.animationSpeed = 12; // set animation speed (32 is default value)

//small

var opts3_s3 = {
    lines: 12, // The number of lines to draw
    angle: 0.25, // The length of each line
    lineWidth: 0.06, // The line thickness
    pointer: {
        length: 0.82, // The radius of the inner circle
        strokeWidth: 0.071, // The rotation offset
        color: '#000000' // Fill color
    },
    limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
    colorStart: '#000000',   // Colors
    colorStop: '#50527A',    // Stoke color INCREASED with needle
    strokeColor: '#fff',   // Rest of color IN arc
    generateGradient: true

};
var target3_s3 = document.getElementById('myCanvas3_s3'); // your canvas element
var gauge3_s3 = new Donut(target3_s3).setOptions(opts3_s3); // create sexy gauge!
gauge3_s3.maxValue = 10000; // set max gauge value
gauge3_s3.animationSpeed = 12; // set animation speed (32 is default value)


//   IV Guage Outer
var opts4 = {
    lines: 12, // The number of lines to draw
    angle: 0.25, // The length of each line
    lineWidth: 0.06, // The line thickness
    pointer: {
        length: 0.82, // The radius of the inner circle
        strokeWidth: 0.071, // The rotation offset
        color: '#000000' // Fill color
    },
    limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
    colorStart: '#000000',   // Colors
    colorStop: '#835C3B',    // Stoke color INCREASED with needle
    strokeColor: '#fff',   // Rest of color IN arc
    generateGradient: true

};
var target4 = document.getElementById('myCanvas4'); // your canvas element
var gauge4 = new Donut(target4).setOptions(opts4); // create sexy gauge!
gauge4.maxValue = 300; // set max gauge value
gauge4.animationSpeed = 12; // set animation speed (32 is default value)

//small
var opts4_s4 = {
    lines: 12, // The number of lines to draw
    angle: 0.25, // The length of each line
    lineWidth: 0.06, // The line thickness
    pointer: {
        length: 0.82, // The radius of the inner circle
        strokeWidth: 0.071, // The rotation offset
        color: '#000000' // Fill color
    },
    limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
    colorStart: '#000000',   // Colors
    colorStop: '#835C3B',    // Stoke color INCREASED with needle
    strokeColor: '#fff',   // Rest of color IN arc
    generateGradient: true

};
var target4_s4 = document.getElementById('myCanvas4_s4'); // your canvas element
var gauge4_s4 = new Donut(target4_s4).setOptions(opts4_s4); // create sexy gauge!
gauge4_s4.maxValue = 300; // set max gauge value
gauge4_s4.animationSpeed = 12; // set animation speed (32 is default value)


//   V Guage Outer
var opts5 = {
    lines: 12, // The number of lines to draw
    angle: 0.25, // The length of each line
    lineWidth: 0.06, // The line thickness
    pointer: {
        length: 0.82, // The radius of the inner circle
        strokeWidth: 0.071, // The rotation offset
        color: '#000000' // Fill color
    },
    limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
    colorStart: '#000000',   // Colors
    colorStop: '#006666',    // Stoke color INCREASED with needle
    strokeColor: '#fff',   // Rest of color IN arc
    generateGradient: true

};
var target5 = document.getElementById('myCanvas5'); // your canvas element
var gauge5 = new Donut(target5).setOptions(opts5); // create sexy gauge!
gauge5.maxValue = 10000; // set max gauge value
gauge5.animationSpeed = 12; // set animation speed (32 is default value)

var opts5_s5 = {
    lines: 12, // The number of lines to draw
    angle: 0.25, // The length of each line
    lineWidth: 0.06, // The line thickness
    pointer: {
        length: 0.82, // The radius of the inner circle
        strokeWidth: 0.071, // The rotation offset
        color: '#000000' // Fill color
    },
    limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
    colorStart: '#000000',   // Colors
    colorStop: '#006666',    // Stoke color INCREASED with needle
    strokeColor: '#fff',   // Rest of color IN arc
    generateGradient: true

};
var target5_s5 = document.getElementById('myCanvas5_s5'); // your canvas element
var gauge5_s5 = new Donut(target5_s5).setOptions(opts5_s5); // create sexy gauge!
gauge5_s5.maxValue = 10000; // set max gauge value
gauge5.animationSpeed = 12; // set animation speed (32 is default value)

var rig_id=1;
var dataXML1 = "<chart formatnumberscale='0' yAxisMaxValue='6000'  showRealTimeValue='0' showShadow='0'  showToolTip='1' tooltipbgcolor='fff' tooltipbordercolor='fff' connectNullData='1' dataStreamURL='/annarea/"+rig_id+"' refreshInterval='1' canvasBgColor='FFFFFF' drawAnchors='1' anchorRadius='1' showBorder='0'  numberPrefix='' chartBottomMargin='50' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' alternateHGridAlpha='100' alternateHGridColor='f2f2f2' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='cccccc'  hoverCapBorderColor='f1f1f2' hoverCapBgColor='f1f1f2' plotGradientColor='6cd6cf' plotFillColor='6cd6cf' plotfillalpha='20' showAnchors='1' canvaspadding='0' showPlotBorder='0' plotborderthickness='1' divlineborderthickness='2' divlinecolor='f1f1f2' divlinealpha='100'><styles><definition><style name='myCaptionFont' type='font' font='Verdana' align='left' size='18' bold='1' underline='1'/></definition><application><apply toObject='Caption' styles='myCaptionFont' /></application></styles><categories><category label='Start'/></categories><dataset seriesName='Annular'><set value='0'/></dataset></chart>";

var dataXML2 = "<chart formatnumberscale='0' yAxisMaxValue='10000' showRealTimeValue='0' showShadow='0'  showToolTip='1' tooltipbgcolor='fff' tooltipbordercolor='fff' connectNullData='1' dataStreamURL='/accarea/"+rig_id+"' refreshInterval='1' canvasBgColor='FFFFFF' drawAnchors='1' anchorRadius='1' showBorder='0'  numberPrefix='' chartBottomMargin='50' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' alternateHGridAlpha='100' alternateHGridColor='f2f2f2' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='cccccc'  hoverCapBorderColor='f1f1f2' hoverCapBgColor='f1f1f2' plotGradientColor='0071bc' plotFillColor='0071bc' plotfillalpha='20' showAnchors='1' canvaspadding='0' showPlotBorder='0' plotborderthickness='1' divlineborderthickness='2' divlinecolor='f1f1f2' divlinealpha='100'><styles><definition><style name='myCaptionFont' type='font' font='Verdana' align='left' size='18' bold='1' underline='1'/></definition><application><apply toObject='Caption' styles='myCaptionFont' /></application></styles><categories><category label='Start'/></categories><dataset seriesName='Accumulator'><set value='0'/></dataset></chart>";

var dataXML3 = "<chart formatnumberscale='0'  yAxisMaxValue='10000' showRealTimeValue='0' showShadow='0'  showToolTip='1' tooltipbgcolor='fff' tooltipbordercolor='fff' connectNullData='1' manageResize='0' dataStreamURL='/maniarea/"+rig_id+"' refreshInterval='1' canvasBgColor='FFFFFF' drawAnchors='1' anchorRadius='1' showBorder='0'  numberPrefix='' chartBottomMargin='50' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' alternateHGridAlpha='100' alternateHGridColor='f2f2f2' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='cccccc'  hoverCapBorderColor='f1f1f2' hoverCapBgColor='f1f1f2' plotGradientColor='50527A' plotFillColor='29abe2' plotfillalpha='20' showAnchors='1' canvaspadding='0' showPlotBorder='0' plotborderthickness='1' divlineborderthickness='2' divlinecolor='f1f1f2' divlinealpha='100'><styles><definition><style name='myCaptionFont' type='font' font='Verdana' align='left' size='18' bold='1' underline='1'/></definition><application><apply toObject='Caption' styles='myCaptionFont' /></application></styles><categories><category label='Start'/></categories><dataset seriesName='Manifold'><set value='0'/></dataset></chart>";

var dataXML5 = "<chart formatnumberscale='0'  yAxisMaxValue='300' showRealTimeValue='0' showShadow='0'  showToolTip='1' tooltipbgcolor='fff' tooltipbordercolor='fff' connectNullData='1' dataStreamURL='/rgair/"+rig_id+"' refreshInterval='1' canvasBgColor='FFFFFF' drawAnchors='1' anchorRadius='1' showBorder='0'  numberPrefix='' chartBottomMargin='50' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' alternateHGridAlpha='100' alternateHGridColor='f2f2f2' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='cccccc'  hoverCapBorderColor='f1f1f2' hoverCapBgColor='f1f1f2' plotGradientColor='835C3B' plotFillColor='835C3B' plotfillalpha='20' showAnchors='1' canvaspadding='0' showPlotBorder='0' plotborderthickness='1' divlineborderthickness='2' divlinecolor='f1f1f2' divlinealpha='100'><styles><definition><style name='myCaptionFont' type='font' font='Verdana' align='left' size='18' bold='1' underline='1'/></definition><application><apply toObject='Caption' styles='myCaptionFont' /></application></styles><categories><category label='Start'/></categories><dataset seriesName='Rig Air'><set value='0'/></dataset></chart>";

var dataXML4 = "<chart formatnumberscale='0'  yAxisMaxValue='10000' showRealTimeValue='0' showShadow='0'  showToolTip='1' tooltipbgcolor='fff' tooltipbordercolor='fff' connectNullData='1' dataStreamURL='/bsarea/"+rig_id+"' refreshInterval='1' canvasBgColor='FFFFFF' drawAnchors='1' anchorRadius='1' showBorder='0'  numberPrefix='' chartBottomMargin='50' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='4' showValues='0' canvasbgalpha='60' canvasbgangle='90' outcnvBaseFontColor='000000' alternateHGridAlpha='100' alternateHGridColor='f2f2f2' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='cccccc'  hoverCapBorderColor='f1f1f2' hoverCapBgColor='f1f1f2' plotGradientColor='006666' plotFillColor='006666' plotfillalpha='20' showAnchors='1' canvaspadding='0' showPlotBorder='0' plotborderthickness='1' divlineborderthickness='2' divlinecolor='f1f1f2' divlinealpha='100'><styles><definition><style name='myCaptionFont' type='font' font='Verdana' align='left' size='18' bold='1' underline='1'/></definition><application><apply toObject='Caption' styles='myCaptionFont' /></application></styles><categories><category label='Start'/></categories><dataset seriesName='Shear Boost'><set value='0'/></dataset></chart>";

//var dataXMLLine = "<chart formatnumberscale='0' showShadow='0' showToolTip='1' toolTipBgColor='000000'  yAxisMaxValue='10000' showRealTimeValue='1' connectNullData='1' dataStreamURL='/dpress' refreshInterval='1' drawAnchors='0' showBorder='0' chartBottomMargin='50' showLegend='0' legendPosition='below' bgAlpha='0,0' numVDivLines='4' showValues='0' outcnvBaseFontColor='000000' alternateHGridAlpha='100' alternateHGridColor='f2f2f2' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='cccccc'  hoverCapBorderColor='f1f1f2' hoverCapBgColor='f1f1f2'  showAnchors='1' canvaspadding='0' showPlotBorder='0' plotborderthickness='1' divlineborderthickness='2' divlinecolor='f1f1f2' divlinealpha='100'><styles><definition><style name='myCaptionFont' type='font' font='Verdana' align='left' size='18' bold='1' underline='1'/></definition><application><apply toObject='Caption' styles='myCaptionFont' /></application></styles><categories><category label='Start'/></categories><dataset seriesName='Annular' color='6cd6cf'  lineThickness='2'><set value='0'/></dataset><dataset seriesName='Accumulator' color='0071bc' dashed='1' lineThickness='2'><set value='0'/></dataset><dataset seriesName='Manifold' color='29abe2' lineThickness='2'><set value='0'/></dataset><dataset seriesName='RigAr' color='003caf' dashed='1' lineThickness='2'><set value='0'/></dataset><dataset seriesName='Shrbst' color='006666' dashed='1' lineThickness='2'><set value='0'/></dataset></chart>";

var dataXMLLine = "<chart formatnumberscale='0'  showRealTimeValue='0' showShadow='0'  showToolTip='1' tooltipbgcolor='fff' tooltipbordercolor='fff'  yAxisMaxValue='10000' connectNullData='1' dataStreamURL='/dpress/"+rig_id+"' refreshInterval='1' drawAnchors='1' anchorRadius='1' showBorder='0' chartBottomMargin='50' showLegend='0' legendPosition='below' bgAlpha='0,0' numVDivLines='4' showValues='0' outcnvBaseFontColor='000000' alternateHGridAlpha='100' alternateHGridColor='f2f2f2' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='cccccc'  hoverCapBorderColor='f1f1f2' hoverCapBgColor='f1f1f2'  showAnchors='1' canvaspadding='0' showPlotBorder='0' plotborderthickness='1' divlineborderthickness='2' divlinecolor='f1f1f2' divlinealpha='100'><styles><definition><style name='myCaptionFont' type='font' font='Verdana' align='left' size='18' bold='1' underline='1'/></definition><application><apply toObject='Caption' styles='myCaptionFont' /></application></styles><categories><category label='Start'/></categories><dataset showLabels='0' seriesName='Annular' color='6cd6cf' showValues='0'  lineThickness='2'><set value='0'/></dataset><dataset seriesName='Accumulator' color='0071bc' dashed='1' lineThickness='2'><set value='0'/></dataset><dataset seriesName='Manifold' color='50527A' lineThickness='2'><set value='0'/></dataset><dataset seriesName='Rig Air' color='835C3B' dashed='1' lineThickness='2'><set value='0'/></dataset><dataset seriesName='Shear Boost' color='006666' dashed='1' lineThickness='2'><set value='0'/></dataset></chart>";


function chart_plot()
{


    /*  document.getElementsByName
     FusionCharts.setCurrentRenderer('javascript');*/

    /* var salesChart = new FusionCharts('Charts/RealTimeStackedArea.swf', 'Area-1',  '100%','405', '0', '1');
     salesChart.setXMLData(dataXML1);
     salesChart.setTransparent(true);
     salesChart.render('a1');

     var salesChart2 = new FusionCharts('Charts/RealTimeStackedArea.swf', 'Area-2', '100%','405', '0', '1');
     salesChart2.setXMLData(dataXML2);
     salesChart2.setTransparent(true);
     salesChart2.render('a2');


     var salesChart3 = new FusionCharts('Charts/RealTimeStackedArea.swf', 'Area-3', '100%','405', '0', '1');
     salesChart3.setXMLData(dataXML3);
     salesChart3.setTransparent(true);
     salesChart3.render('a3');

     var salesChart4 = new FusionCharts('Charts/RealTimeStackedArea.swf', 'Area-4', '100%', '405', '0', '1');
     salesChart4.setXMLData(dataXML4);
     salesChart4.setTransparent(true);
     salesChart4.render('a4');

     var salesChart5 = new FusionCharts('Charts/RealTimeStackedArea.swf', 'Area-5', '100%', '405', '0', '1');
     salesChart5.setXMLData(dataXML5);
     salesChart5.setTransparent(true);
     salesChart5.render('a5');
     //linearea_3

     var multiline = new FusionCharts('Charts/RealTimeLine.swf', 'chart-2', '100%', '110%', '0', '1');
     multiline.setXMLData(dataXMLLine);
     multiline.setTransparent(true);
     multiline.render('multiline');*/


    var myChart = new FusionCharts({
        "type": "realtimestackedarea",
        "renderAt": "a1",
        "width": "100%",
        "height": "405",
        "dataFormat": "xml",
        "dataSource": dataXML1

    });
    myChart.render();

    var myChart2 = new FusionCharts({
        "type": "realtimestackedarea",
        "renderAt": "a2",
        "width": "100%",
        "height": "405",
        "dataFormat": "xml",
        "dataSource": dataXML2

    });
    myChart2.render();


    var myChart3 = new FusionCharts({
        "type": "realtimestackedarea",
        "renderAt": "a3",
        "width": "100%",
        "height": "405",
        "dataFormat": "xml",
        "dataSource": dataXML3

    });
    myChart3.render();

    var myChart4 = new FusionCharts({
        "type": "realtimestackedarea",
        "renderAt": "a4",
        "width": "100%",
        "height": "405",
        "dataFormat": "xml",
        "dataSource": dataXML4

    });
    myChart4.render();

    var myChart5 = new FusionCharts({
        "type": "realtimestackedarea",
        "renderAt": "a5",
        "width": "100%",
        "height": "405",
        "dataFormat": "xml",
        "dataSource": dataXML5

    });
    myChart5.render();

    var multiline = new FusionCharts({
        "type": "realtimeline",
        "renderAt": "multiline",
        "width": "100%",
        "height": "110%",
        "dataFormat": "xml",
        "dataSource": dataXMLLine

    });

    multiline.render();
}

var nxt,prev,gidx;

//$(function(){

$(document).ready(function(){
    var rig_id=1;
    chart_plot();
    $('#data').append(alarmcontent());
    $('.f2').append(alarm_footer());
    $('.f1').append(userinfo());
    user_name();

    //here get selected rigname
    var rigname = window.localStorage.getItem("rgnm");
//    console.log(rigname);
    $('#rig_lbl').text(rigname); //display rigname


    //making stylish alram start
    $('.tlt').textillate({
        // the default selector to use when detecting multiple texts to animate
        selector: '.texts',

        // enable looping
        loop: true,

        // sets the minimum display time for each text before it is replaced
        minDisplayTime: 2000,

        // sets the initial delay before starting the animation
        // (note that depending on the in effect you may need to manually apply
        // visibility: hidden to the element before running this plugin)
        initialDelay: 0,

        // set whether or not to automatically start animating
        autoStart: true,

        // custom set of 'in' effects. This effects whether or not the
        // character is shown/hidden before or after an animation
        inEffects: [],

        // custom set of 'out' effects
        outEffects: ['hinge'],

        // in animation settings
        in: {
            // set the effect name
            effect: 'fadeInLeftBig',

            // set the delay factor applied to each consecutive character
            delayScale: 1.5,

            // set the delay between each character
            delay: 50,

            // set to true to animate all the characters at the same time
            sync: true,

            // randomize the character sequence
            // (note that shuffle doesn't make sense with sync = true)
            shuffle: false,

            // reverse the character sequence
            // (note that reverse doesn't make sense with sync = true)
            reverse: false,

            // callback that executes once the animation has finished
            callback: function () { }
        },

        // out animation settings.
        out: {
            effect: 'fadeOutRight',
            delayScale: 1.5,
            delay: 50,
            sync: true,
            shuffle: false,
            reverse: false,
            callback: function () { }
        },

        // callback that executes once textillate has finished
        callback: function () {

        }
    });

//    End stylish alram

    //Get Query String
    var urlParams,id;
    (window.onpopstate = function () {
        var match,
            pl     = /\+/g,  // Regex for replacing addition symbol with a space
            search = /([^&=]+)=?([^&]*)/g,
            decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
            query  = window.location.search.substring(1);

        urlParams = {};
        while (match = search.exec(query))
            urlParams[decode(match[1])] = decode(match[2]);
    })();

//            alert(urlParams["id"]);
    if(document.location.search.length) {
        // query string exists

        id=parseInt(urlParams["id"]);
    } else {
        // no query string exists
        id=1;
    }



//            alert(id);
    for (i=1;i<6;i++)
    {
        if (i==id)
        {
            $('#gauge_'+i).show();
            $('#linearea_'+i).show();
            continue;

        }
        $('#gauge_'+i).hide();
        $('#linearea_'+i).hide();
    }
    gidx=id;
    assign_text(id);

    nxt=id;
    if(id==1)
    {
        prev=0;
    }
    prev=id-1;
    user_name();

});


function nxt_gug()
{
    nxt++;
    //   alert(nxt);
    if(nxt<6)
    {

        for (i=1;i<6;i++)
        {
            if (i==nxt)
            {
                $('#gauge_'+i).show();
                $('#linearea_'+i).show();
                continue;
                prev=nxt;

            }
            $('#gauge_'+i).hide();
            $('#linearea_'+i).hide();
            prev=nxt;
        }
    }
    if(nxt==6)
    {
        nxt=5;
        prev=5;
    }
    assign_text(nxt);
//alert(nxt);

}

function prv_gug()
{
    prev--;
//        alert(prev);
    if((prev==0)||(prev<0))
    {
        prev=1;
        nxt=1;
    }
    if(prev<6)
    {
        for (i=1;i<6;i++)
        {
            if ((i==prev)&&(prev!=0))
            {
                $('#gauge_'+i).show();
                $('#linearea_'+i).show();
                continue;
                nxt=prev;
                assign_text(prev);

            }
            nxt=prev;
            $('#gauge_'+i).hide();
            $('#linearea_'+i).hide();
        }

    }

    assign_text(prev);

}


function assign_text(id)
{
    if(id==1)
    {
        $('#info').text('ANNULAR PRESSURE');
    }
    else if(id==2)
    {
        $('#info').text('ACCUMULATOR PRESSURE');
    }
    else if(id==3)
    {
        $('#info').text('MANIFOLD PRESSURE');
    }
    else if(id==4)
    {
        $('#info').text('SHEAR BOOST PRESSURE');
    }
    else if(id==5)
    {

        $('#info').text('RIG AIR PRESSURE');
    }
    cresize(id);
}

function cresize(i)
{
    //alert(i);
    FusionCharts.setCurrentRenderer('javascript');

    if(i==1){

        /* var salesChart = new FusionCharts('Charts/RealTimeStackedArea.swf', 'cht1-'+(i+1), '100%', '110%', '0', '1');
         salesChart.setXMLData(dataXML1);
         salesChart.setTransparent(true);
         salesChart.render('a1');*/

        var myChart = new FusionCharts({
            "type": "realtimestackedarea",
            "renderAt": "a1",
            "width": "100%",
            "height": "110%",
            "dataFormat": "xml",
            "dataSource": dataXML1

        });

        myChart.render();

        $('#info').text('ANNULAR PRESSURE');
    }
    else if(i==2){

        /* var salesChart2 = new FusionCharts('Charts/RealTimeStackedArea.swf', 'cht1-'+(i+1), '100%', '110%', '0', '1');
         salesChart2.setXMLData(dataXML2);
         salesChart2.setTransparent(true);
         salesChart2.render('a2');*/

        var myChart2 = new FusionCharts({
            "type": "realtimestackedarea",
            "renderAt": "a2",
            "width": "100%",
            "height": "110%",
            "dataFormat": "xml",
            "dataSource": dataXML2

        });
        myChart2.render();

        $('#info').text('ACCUMULATOR PRESSURE');
    }
    else if(i==3){

        /*    var salesChart3 = new FusionCharts('Charts/RealTimeStackedArea.swf', 'cht1-'+(i+1), '100%', '110%', '0', '1');
         salesChart3.setXMLData(dataXML3);
         salesChart3.setTransparent(true);
         salesChart3.render('a3');*/

        var myChart3 = new FusionCharts({
            "type": "realtimestackedarea",
            "renderAt": "a3",
            "width": "100%",
            "height": "110%",
            "dataFormat": "xml",
            "dataSource": dataXML3

        });
        myChart3.render();

        $('#info').text('MANIFOLD PRESSURE');
    }
    else if(i==4){


        /* var salesChart4 = new FusionCharts('Charts/RealTimeStackedArea.swf', 'cht1-'+(i+1), '100%', '110%', '0', '1');
         salesChart4.setXMLData(dataXML4);
         salesChart4.setTransparent(true);
         salesChart4.render('a4');*/

        var myChart4 = new FusionCharts({
            "type": "realtimestackedarea",
            "renderAt": "a4",
            "width": "100%",
            "height": "110%",
            "dataFormat": "xml",
            "dataSource": dataXML4

        });
        myChart4.render();


        $('#info').text('SHEAR BOOST PRESSURE');
    }
    else if(i==5){


        /*      var salesChart5 = new FusionCharts('Charts/RealTimeStackedArea.swf', 'cht1-'+(i+1), '100%', '110%', '0', '1');
         salesChart5.setXMLData(dataXML5);
         salesChart5.setTransparent(true);
         salesChart5.render('a5');*/

        var myChart5 = new FusionCharts({
            "type": "realtimestackedarea",
            "renderAt": "a5",
            "width": "100%",
            "height": "110%",
            "dataFormat": "xml",
            "dataSource": dataXML5

        });
        myChart5.render();

        $('#info').text('RIG AIR PRESSURE');
    }

}



function show_dialog() {
    $('#data').modal();

}