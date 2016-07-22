/**
 * Created by Administrator on 2/23/2016.
 */

//    Drill Pipe Guage Inner
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
        .domain([0, 10000])
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



//  small  Drill Pipe Guage Inner
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
        .domain([0, 10000])
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


//   Casing Guage Inner
//    Second Guage Inner
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
    .tickPadding(18)
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


//  small Casing Guage Inner

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

//    First Guage Outer
var opts = {
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
    colorStop: '#29abe2',    // Stoke color INCREASED with needle
    strokeColor: '#fff',   // Rest of color IN arc
    generateGradient: true

};
var target = document.getElementById('myCanvas'); // your canvas element
var gauge1 = new Donut(target).setOptions(opts); // create sexy gauge!
gauge1.maxValue = 10000; // set max gauge value
gauge1.animationSpeed = 12; // set animation speed (32 is default value)


//small First Guage Outer
var opts_s1 = {

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
    colorStop: '#29abe2',    // Stoke color INCREASED with needle
    strokeColor: '#fff',   // Rest of color IN arc
    generateGradient: true

};
var target_s1 = document.getElementById('myCanvas_s1'); // your canvas element
var gauge1_s1 = new Donut(target_s1).setOptions(opts_s1); // create sexy gauge!
gauge1_s1.maxValue = 10000; // set max gauge value
gauge1_s1.animationSpeed = 12; // set animation speed (32 is default value)


//   II Guage Outer
var opts2 = {
    lines: 12, // The number of lines to draw
    angle: 0.26, // The length of each line
    lineWidth: 0.06, // The line thickness
    pointer: {
        length: 0.82, // The radius of the inner circle
        strokeWidth: 0.071, // The rotation offset
        color: '#000000' // Fill color
    },
    limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
    colorStart: '#000000',   // Colors
    colorStop: '#69959c',    // Stoke color INCREASED with needle
    strokeColor: '#fff',   // Rest of color IN arc
    generateGradient: true

};
var target2 = document.getElementById('myCanvas2'); // your canvas element
var gauge2 = new Donut(target2).setOptions(opts2); // create sexy gauge!
gauge2.maxValue = 10000; // set max gauge value
gauge2.animationSpeed = 12; // set animation speed (32 is default value)

//Small II guage
var opts2_s2 = {
    lines: 12, // The number of lines to draw
    angle: 0.26, // The length of each line
    lineWidth: 0.06, // The line thickness
    pointer: {
        length: 0.82, // The radius of the inner circle
        strokeWidth: 0.071, // The rotation offset
        color: '#000000' // Fill color
    },
    limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
    colorStart: '#000000',   // Colors
    colorStop: '#69959c',    // Stoke color INCREASED with needle
    strokeColor: '#fff',   // Rest of color IN arc
    generateGradient: true

};
var target2_s2 = document.getElementById('myCanvas2_s2'); // your canvas element
var gauge2_s2 = new Donut(target2_s2).setOptions(opts2_s2); // create sexy gauge!
gauge2_s2.maxValue = 10000; // set max gauge value
gauge2_s2.animationSpeed = 12; // set animation speed (32 is default value)



var opts3 = {
    lines: 12, // The number of lines to draw
    angle: 0.08, // The length of each line
    lineWidth: 0.15, // The line thickness
    pointer: {
        length: 0.82, // The radius of the inner circle
        strokeWidth: 0.071, // The rotation offset
        color: '#000000' // Fill color
    },
    limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
    colorStart: '#fbb03b',   // Colors
    colorStop: '#fbb03b',    // Stoke color INCREASED with needle
    strokeColor: '#fff',   // Rest of color IN arc
    generateGradient: true

};
var target3 = document.getElementById('myCanvas3'); // your canvas element
var gauge3 = new Donut(target3).setOptions(opts3); // create sexy gauge!
gauge3.maxValue = 100; // set max gauge value
gauge3.animationSpeed = 12; // set animation speed (32 is default value)



//small choke % 1
var opts3_s3 = {
    lines: 12, // The number of lines to draw
    angle: 0.08, // The length of each line
    lineWidth: 0.15, // The line thickness
    pointer: {
        length: 0.82, // The radius of the inner circle
        strokeWidth: 0.071, // The rotation offset
        color: '#000000' // Fill color
    },
    limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
    colorStart: '#fbb03b',   // Colors
    colorStop: '#fbb03b',    // Stoke color INCREASED with needle
    strokeColor: '#fff',   // Rest of color IN arc
    generateGradient: true

};
var target3_s3 = document.getElementById('myCanvas3_s3'); // your canvas element
var gauge3_s3 = new Donut(target3_s3).setOptions(opts3_s3); // create sexy gauge!
gauge3_s3.maxValue = 100; // set max gauge value
gauge3_s3.animationSpeed = 12; // set animation speed (32 is default value)


var opts4 = {
    lines: 12, // The number of lines to draw
    angle: 0.08, // The length of each line
    lineWidth: 0.15, // The line thickness
    pointer: {
        length: 0.82, // The radius of the inner circle
        strokeWidth: 0.071, // The rotation offset
        color: '#000000' // Fill color
    },
    limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
    colorStart: '#fbb03b',   // Colors
    colorStop: '#fbb03b',    // Stoke color INCREASED with needle
    strokeColor: '#fff',   // Rest of color IN arc
    generateGradient: true

};
var target4 = document.getElementById('myCanvas4'); // your canvas element
var gauge4 = new Donut(target4).setOptions(opts4); // create sexy gauge!
gauge4.maxValue = 100; // set max gauge value
gauge4.animationSpeed = 12; // set animation speed (32 is default value)


//small choke % 2

var opts4_s4 = {
    lines: 12, // The number of lines to draw
    angle: 0.08, // The length of each line
    lineWidth: 0.15, // The line thickness
    pointer: {
        length: 0.82, // The radius of the inner circle
        strokeWidth: 0.071, // The rotation offset
        color: '#000000' // Fill color
    },
    limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
    colorStart: '#fbb03b',   // Colors
    colorStop: '#fbb03b',    // Stoke color INCREASED with needle
    strokeColor: '#fff',   // Rest of color IN arc
    generateGradient: true

};
var target4_s4 = document.getElementById('myCanvas4_s4'); // your canvas element
var gauge4_s4 = new Donut(target4_s4).setOptions(opts4_s4); // create sexy gauge!
gauge4_s4.maxValue = 100; // set max gauge value
gauge4_s4.animationSpeed = 12; // set animation speed (32 is default value)



function chart_plot() {
//    var ly = $(window).height();
//    var lx = $(window).width();
//
//    var chrtht=(440*ly)/1080;

    var dataXMLLine = "<chart formatnumberscale='0'  showRealTimeValue='0' showShadow='0'  showToolTip='1' tooltipbgcolor='fff' tooltipbordercolor='fff'  yAxisMaxValue='10000' connectNullData='1' dataStreamURL='/press/"+rig_id+"' refreshInterval='1' drawAnchors='1' anchorRadius='1' showBorder='0' chartBottomMargin='30' showLegend='0' legendPosition='below' bgAlpha='0,0' numVDivLines='4' showValues='0' outcnvBaseFontColor='000000' alternateHGridAlpha='100' alternateHGridColor='f2f2f2' canvasBorderThickness='1' canvasBorderAlpha='100' canvasBorderColor='cccccc'  hoverCapBorderColor='f1f1f2' hoverCapBgColor='f1f1f2'  showAnchors='1' canvaspadding='0' showPlotBorder='0' plotborderthickness='1' divlineborderthickness='2' divlinecolor='f1f1f2' divlinealpha='100'><styles><definition><style name='myCaptionFont' type='font' font='Verdana' align='left' size='18' bold='1' underline='1'/></definition><application><apply toObject='Caption' styles='myCaptionFont' /></application></styles><categories><category label='Start'/></categories><dataset seriesName='Drill' color='29abe2'  lineThickness='2'><set value='0'/></dataset><dataset seriesName='Casing' color='69959c' dashed='1' lineThickness='2'><set value='0'/></dataset></chart>";

    /*  document.getElementsByName
     FusionCharts.setCurrentRenderer('javascript');

     var multiline = new FusionCharts('Charts/RealTimeLine.swf', 'chart-2', '100%','105%', '0', '1');
     multiline.setXMLData(dataXMLLine);
     multiline.setTransparent(true);
     multiline.render('multiline');*/

    var multiline = new FusionCharts({
        "type": "realtimeline",
        "renderAt": "multiline",
        "width": "100%",
        "height": "105%",
        "dataFormat": "xml",
        "dataSource": dataXMLLine

    });
    multiline.render();
}
var rig_id=1;
$(function(){



    chart_plot();



    $('#data').append(alarmcontent());
    $('.f2').append(alarm_footer());
    $('.f1').append(userinfo());
    user_name();

    //here get selected rigname
    var rigname = window.localStorage.getItem("rgnm");
    //   $('#rig_lbl').text(rigname); //display rigname


//        window.onload = CALL_Chart;
//        window.onresize=CALL_Chart;
    //making stylish alram start
    $('.tlt').textillate({
        // the default selector to use when detecting multiple texts to animate
        selector: '.texts',

        // enable looping
        loop: true,

        // sets the minimum display time for each text before it is replaced
        minDisplayTime: 2000,

        // sets the initial delay before starting the animation

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




});
function show_dialog() {
    $('#data').modal();

}
/*
 function randomValue() {

 $.get('/valarm', {}, function (data) {
 JSON.stringify(data);
 //document.write(gdata[0].mani);
 //console.log(data.message.Cluster[2].DBL[0].Val);
 drill=data.message.Cluster[0].DBL[0].Val;
 casing=data.message.Cluster[0].DBL[8].Val;

 // acc = 5000;
 var value = Math.round(Math.random() * 200);
 arrow1.setValue(drill);
 arrow2.setValue(casing);

 // axis1.setBottomText(parseInt(drill) + "");//annular
 //        axis2.setBottomText(parseInt(casing) + "");//annular



 });
 }

 */