/**
 * Created by Administrator on 2/23/2016.
 */
var lx=window.innerWidth;
$(function() {

    $('#data').append(alarmcontent());
    $('.f2').append(alarm_footer());
    $('.f1').append(userinfo());
    user_name();

    //here get selected rigname
    var rigname = window.localStorage.getItem("rgnm");
//    console.log(rigname);
    //  $('#rig_lbl').text(rigname); //display rigname

//    window.onload = resize;
    window.onresize=change;

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


    $("#valve-div1").hover(function(){
        $("#valve-div1").css({"background-color":"#cccccc",'cursor':'pointer','opacity':.4,'border':'1px black solid'});
        $("#valve-div").css({"background-color":"#cccccc",'cursor':'pointer','opacity':.4,'border':'1px black solid','border-bottom':'none'});
    },function(){
        $("#valve-div1").css({"background-color":"transparent",'border':'none'});
        $("#valve-div").css({"background-color":"transparent",'border':'none'});
    });

    $("#valve-div").hover(function(){
        $("#valve-div1").css({"background-color":"#cccccc",'cursor':'pointer','opacity':.4,'border':'1px black solid'});
        $("#valve-div").css({"background-color":"#cccccc",'cursor':'pointer','opacity':.4,'border':'1px black solid','border-bottom':'none'});
    },function(){
        $("#valve-div1").css({"background-color":"transparent",'border':'none'});
        $("#valve-div").css({"background-color":"transparent",'border':'none'});
    });
});

function show_dialog() {
    $('#data').modal();

}
var opts = {
    lines: 12, // The number of lines to draw
    angle: 0.27, // The length of each line
    lineWidth: 0.1, // The line thickness
    pointer: {
        length: 0.9, // The radius of the inner circle
        strokeWidth: 0.30, // The rotation offset
        color: '#000000' // Fill color
    },
    limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
    colorStart: '#7bdeff',   // Colors
    colorStop: '#7bdeff',    // Stoke color INCREASED with needle
    strokeColor: '#bdbfc1',   // Rest of color IN arc
    generateGradient: true

};
var target = document.getElementById('myCanvas'); // your canvas element
var gauge1 = new Donut(target).setOptions(opts); // create sexy gauge!
gauge1.maxValue = 6000; // set max gauge value
gauge1.animationSpeed = 20; // set animation speed (32 is default value)


var target = document.getElementById('myCanvas_s1'); // your canvas element
var gauge1_s1 = new Donut(target).setOptions(opts); // create sexy gauge!
gauge1_s1.maxValue = 6000; // set max gauge value
gauge1_s1.animationSpeed = 20; // set animation speed (32 is default value)


var opts2 = {
    lines: 12, // The number of lines to draw
    angle: 0.27, // The length of each line
    lineWidth: 0.1, // The line thickness
    pointer: {
        length: 0.9, // The radius of the inner circle
        strokeWidth: 0.30, // The rotation offset
        color: '#000000' // Fill color
    },
    limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
    colorStart: '#7bdeff',   // Colors
    colorStop: '#7bdeff',    // Stoke color INCREASED with needle
    strokeColor: '#bdbfc1',   // Rest of color IN arc
    generateGradient: true

};
var target2 = document.getElementById('myCanvas2'); // your canvas element
var gauge2 = new Donut(target2).setOptions(opts2); // create sexy gauge!
gauge2.maxValue = 10000; // set max gauge value
gauge2.animationSpeed = 20; // set animation speed (32 is default value)

var target2 = document.getElementById('myCanvas2_s1'); // your canvas element
var gauge2_s1 = new Donut(target2).setOptions(opts2); // create sexy gauge!
gauge2_s1.maxValue = 10000; // set max gauge value
gauge2_s1.animationSpeed = 20; // set animation speed (32 is default value)

var opts3 = {
    lines: 12, // The number of lines to draw
    angle: 0.27, // The length of each line
    lineWidth: 0.1, // The line thickness
    pointer: {
        length: 0.9, // The radius of the inner circle
        strokeWidth: 0.30, // The rotation offset
        color: '#000000' // Fill color
    },
    limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
    colorStart: '#7bdeff',   // Colors
    colorStop: '#7bdeff',    // Stoke color INCREASED with needle
    strokeColor: '#bdbfc1',   // Rest of color IN arc
    generateGradient: true

};
var target3 = document.getElementById('myCanvas3'); // your canvas element
var gauge3 = new Donut(target3).setOptions(opts3); // create sexy gauge!
gauge3.maxValue = 10000; // set max gauge value
gauge3.animationSpeed = 20; // set animation speed (32 is default value)

var target3 = document.getElementById('myCanvas3_s1'); // your canvas element
var gauge3_s1 = new Donut(target3).setOptions(opts3); // create sexy gauge!
gauge3_s1.maxValue = 10000; // set max gauge value
gauge3_s1.animationSpeed = 20; // set animation speed (32 is default value)

var opts4 = {
    lines: 12, // The number of lines to draw
    angle: 0.27, // The length of each line
    lineWidth: 0.1, // The line thickness
    pointer: {
        length: 0.9, // The radius of the inner circle
        strokeWidth: 0.30, // The rotation offset
        color: '#000000' // Fill color
    },
    limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
    colorStart: '#7bdeff',   // Colors
    colorStop: '#7bdeff',    // Stoke color INCREASED with needle
    strokeColor: '#bdbfc1',   // Rest of color IN arc
    generateGradient: true

};
var target4 = document.getElementById('myCanvas4'); // your canvas element
var gauge4 = new Donut(target4).setOptions(opts4); // create sexy gauge!
gauge4.maxValue = 10000; // set max gauge value
gauge4.animationSpeed = 20; // set animation speed (32 is default value)

var target4 = document.getElementById('myCanvas4_s1'); // your canvas element
var gauge4_s1 = new Donut(target4).setOptions(opts4); // create sexy gauge!
gauge4_s1.maxValue = 10000; // set max gauge value
gauge4_s1.animationSpeed = 20; // set animation speed (32 is default value)

var opts5 = {
    lines: 12, // The number of lines to draw
    angle: 0.27, // The length of each line
    lineWidth: 0.1, // The line thickness
    pointer: {
        length: 0.9, // The radius of the inner circle
        strokeWidth: 0.30, // The rotation offset
        color: '#000000' // Fill color
    },
    limitMax: 'false',   // If true, the pointer will not go past the end of the gauge
    colorStart: '#7bdeff',   // Colors
    colorStop: '#7bdeff',    // Stoke color INCREASED with needle
    strokeColor: '#bdbfc1',   // Rest of color IN arc
    generateGradient: true

};
var target5 = document.getElementById('myCanvas5'); // your canvas element
var gauge5 = new Donut(target5).setOptions(opts5); // create sexy gauge!
gauge5.maxValue = 300; // set max gauge value
gauge5.animationSpeed = 20; // set animation speed (32 is default value)


var target5 = document.getElementById('myCanvas5_s1'); // your canvas element
var gauge5_s1 = new Donut(target5).setOptions(opts5); // create sexy gauge!
gauge5_s1.maxValue = 300; // set max gauge value
gauge5_s1.animationSpeed = 20; // set animation speed (32 is default value)


//chart1

function change() {

    lx = window.innerWidth;
    if (lx > 1445) {
        if (gauge11.radius() == 17) {

            svg.remove(gauge11);
            svg2.remove(gauge12);
            svg3.remove(gauge13);
            svg4.remove(gauge14);
            svg5.remove(gauge15);

            svg = d3.select("#chartdiv")
                .append("svg:svg")
                .attr("width", 150)
                .attr("height", 100);


            gauge11 = iopctrl.arcslider()
                .radius(22)
                .events(false)
                .indicator(iopctrl.defaultGaugeIndicator);
            gauge11.axis().orient("out")
                .normalize(true)
                .ticks(0)
                .tickSubdivide(3)
                .tickSize(0, 0, 0)
                .tickPadding(20)//number padding
                .scale(d3.scale.linear()
                    .domain([0, 6000])
                    .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

            segDisplay1 = iopctrl.segdisplay()
                .width(0)
                .digitCount(0)
                .negative(false)
                .decimals(0);

            svg.append("g")
                .attr("class", "segdisplay")
                .attr("transform", "translate(148, 280)")
                .call(segDisplay1);

            svg.append("g")
                .attr("class", "rampSweep")
                .style("fill", "#7bdeff");


            svg.append("g")
                .attr("class", "gauge")
                .call(gauge11);


            svg2 = d3.select("#chartdiv2")
                .append("svg:svg")
                .attr("width", 150)
                .attr("height", 100);


            gauge12 = iopctrl.arcslider()
                .radius(22)
                .events(false)
                .indicator(iopctrl.defaultGaugeIndicator);
            gauge12.axis().orient("out")
                .normalize(true)
                .ticks(0)
                .tickSubdivide(3)
                .tickSize(0, 0, 0)
                .tickPadding(20)//number padding
                .scale(d3.scale.linear()
                    .domain([0, 10000])
                    .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

            segDisplay2 = iopctrl.segdisplay()
                .width(0)
                .digitCount(0)
                .negative(false)
                .decimals(0);

            svg2.append("g")
                .attr("class", "segdisplay")
                .attr("transform", "translate(148, 280)")
                .call(segDisplay2);

            svg2.append("g")
                .attr("class", "rampSweep")
                .style("fill", "#7bdeff");



            svg2.append("g")
                .attr("class", "gauge")
                .call(gauge12);

            svg3 = d3.select("#chartdiv3")
                .append("svg:svg")
                .attr("width", 150)
                .attr("height", 100);


            gauge13 = iopctrl.arcslider()
                .radius(22)
                .events(false)
                .indicator(iopctrl.defaultGaugeIndicator);
            gauge13.axis().orient("out")
                .normalize(true)
                .ticks(0)
                .tickSubdivide(3)
                .tickSize(0, 0, 0)
                .tickPadding(20)//number padding
                .scale(d3.scale.linear()
                    .domain([0, 10000])
                    .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

            segDisplay3 = iopctrl.segdisplay()
                .width(0)
                .digitCount(0)
                .negative(false)
                .decimals(0);

            svg3.append("g")
                .attr("class", "segdisplay")
                .attr("transform", "translate(148, 280)")
                .call(segDisplay3);

            svg3.append("g")
                .attr("class", "rampSweep")
                .style("fill", "#7bdeff");



            svg3.append("g")
                .attr("class", "gauge")
                .call(gauge13);

            svg4 = d3.select("#chartdiv4")
                .append("svg:svg")
                .attr("width", 150)
                .attr("height", 100);


            gauge14 = iopctrl.arcslider()
                .radius(22)
                .events(false)
                .indicator(iopctrl.defaultGaugeIndicator);
            gauge14.axis().orient("out")
                .normalize(true)
                .ticks(0)
                .tickSubdivide(3)
                .tickSize(0, 0, 0)
                .tickPadding(20)//number padding
                .scale(d3.scale.linear()
                    .domain([0, 10000])
                    .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

            segDisplay4 = iopctrl.segdisplay()
                .width(0)
                .digitCount(0)
                .negative(false)
                .decimals(0);

            svg4.append("g")
                .attr("class", "segdisplay")
                .attr("transform", "translate(148, 280)")
                .call(segDisplay4);

            svg4.append("g")
                .attr("class", "rampSweep")
                .style("fill", "#7bdeff");



            svg4.append("g")
                .attr("class", "gauge")
                .call(gauge14);

            svg5 = d3.select("#chartdiv5")
                .append("svg:svg")
                .attr("width", 150)
                .attr("height", 100);


            gauge15 = iopctrl.arcslider()
                .radius(22)
                .events(false)
                .indicator(iopctrl.defaultGaugeIndicator);
            gauge15.axis().orient("out")
                .normalize(true)
                .ticks(0)
                .tickSubdivide(3)
                .tickSize(0, 0, 0)
                .tickPadding(20)//number padding
                .scale(d3.scale.linear()
                    .domain([0, 300])
                    .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

            segDisplay5 = iopctrl.segdisplay()
                .width(0)
                .digitCount(0)
                .negative(false)
                .decimals(0);

            svg5.append("g")
                .attr("class", "segdisplay")
                .attr("transform", "translate(148, 280)")
                .call(segDisplay5);

            svg5.append("g")
                .attr("class", "rampSweep")
                .style("fill", "#7bdeff");



            svg5.append("g")
                .attr("class", "gauge")
                .call(gauge15);

        }
    }
    else
    {
        if (gauge11.radius() == 22) {

            svg.remove(gauge11);
            svg2.remove(gauge12);
            svg3.remove(gauge13);
            svg4.remove(gauge14);
            svg5.remove(gauge15);

            svg = d3.select("#chartdiv")
                .append("svg:svg")
                .attr("width", 150)
                .attr("height", 100);


            gauge11 = iopctrl.arcslider()
                .radius(17)
                .events(false)
                .indicator(iopctrl.defaultGaugeIndicator);
            gauge11.axis().orient("out")
                .normalize(true)
                .ticks(0)
                .tickSubdivide(3)
                .tickSize(0, 0, 0)
                .tickPadding(20)//number padding
                .scale(d3.scale.linear()
                    .domain([0, 6000])
                    .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

            segDisplay1 = iopctrl.segdisplay()
                .width(0)
                .digitCount(0)
                .negative(false)
                .decimals(0);

            svg.append("g")
                .attr("class", "segdisplay")
                .attr("transform", "translate(148, 280)")
                .call(segDisplay1);

            svg.append("g")
                .attr("class", "rampSweep")
                .style("fill", "#7bdeff");


            svg.append("g")
                .attr("class", "gauge")
                .call(gauge11);



            svg2 = d3.select("#chartdiv2")
                .append("svg:svg")
                .attr("width", 150)
                .attr("height", 100);


            gauge12 = iopctrl.arcslider()
                .radius(17)
                .events(false)
                .indicator(iopctrl.defaultGaugeIndicator);
            gauge12.axis().orient("out")
                .normalize(true)
                .ticks(0)
                .tickSubdivide(3)
                .tickSize(0, 0, 0)
                .tickPadding(20)//number padding
                .scale(d3.scale.linear()
                    .domain([0, 10000])
                    .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

            segDisplay2 = iopctrl.segdisplay()
                .width(0)
                .digitCount(0)
                .negative(false)
                .decimals(0);

            svg2.append("g")
                .attr("class", "segdisplay")
                .attr("transform", "translate(148, 280)")
                .call(segDisplay2);

            svg2.append("g")
                .attr("class", "rampSweep")
                .style("fill", "#7bdeff");



            svg2.append("g")
                .attr("class", "gauge")
                .call(gauge12);

            svg3 = d3.select("#chartdiv3")
                .append("svg:svg")
                .attr("width", 150)
                .attr("height", 100);


            gauge13 = iopctrl.arcslider()
                .radius(17)
                .events(false)
                .indicator(iopctrl.defaultGaugeIndicator);
            gauge13.axis().orient("out")
                .normalize(true)
                .ticks(0)
                .tickSubdivide(3)
                .tickSize(0, 0, 0)
                .tickPadding(20)//number padding
                .scale(d3.scale.linear()
                    .domain([0, 10000])
                    .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

            segDisplay3 = iopctrl.segdisplay()
                .width(0)
                .digitCount(0)
                .negative(false)
                .decimals(0);

            svg3.append("g")
                .attr("class", "segdisplay")
                .attr("transform", "translate(148, 280)")
                .call(segDisplay3);

            svg3.append("g")
                .attr("class", "rampSweep")
                .style("fill", "#7bdeff");



            svg3.append("g")
                .attr("class", "gauge")
                .call(gauge13);

            svg4 = d3.select("#chartdiv4")
                .append("svg:svg")
                .attr("width", 150)
                .attr("height", 100);


            gauge14 = iopctrl.arcslider()
                .radius(17)
                .events(false)
                .indicator(iopctrl.defaultGaugeIndicator);
            gauge14.axis().orient("out")
                .normalize(true)
                .ticks(0)
                .tickSubdivide(3)
                .tickSize(0, 0, 0)
                .tickPadding(20)//number padding
                .scale(d3.scale.linear()
                    .domain([0, 10000])
                    .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

            segDisplay4 = iopctrl.segdisplay()
                .width(0)
                .digitCount(0)
                .negative(false)
                .decimals(0);

            svg4.append("g")
                .attr("class", "segdisplay")
                .attr("transform", "translate(148, 280)")
                .call(segDisplay4);

            svg4.append("g")
                .attr("class", "rampSweep")
                .style("fill", "#7bdeff");



            svg4.append("g")
                .attr("class", "gauge")
                .call(gauge14);

            svg5 = d3.select("#chartdiv5")
                .append("svg:svg")
                .attr("width", 150)
                .attr("height", 100);


            gauge15 = iopctrl.arcslider()
                .radius(17)
                .events(false)
                .indicator(iopctrl.defaultGaugeIndicator);
            gauge15.axis().orient("out")
                .normalize(true)
                .ticks(0)
                .tickSubdivide(3)
                .tickSize(0, 0, 0)
                .tickPadding(20)//number padding
                .scale(d3.scale.linear()
                    .domain([0, 300])
                    .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

            segDisplay5 = iopctrl.segdisplay()
                .width(0)
                .digitCount(0)
                .negative(false)
                .decimals(0);

            svg5.append("g")
                .attr("class", "segdisplay")
                .attr("transform", "translate(148, 280)")
                .call(segDisplay5);

            svg5.append("g")
                .attr("class", "rampSweep")
                .style("fill", "#7bdeff");



            svg5.append("g")
                .attr("class", "gauge")
                .call(gauge15);

        }
    }
}
var redi;
if(lx<=1445)
{
    redi=17;
}
else
{
    redi=22;
}


var svg = d3.select("#chartdiv")
    .append("svg:svg")
    .attr("width", 150)
    .attr("height", 100);


var gauge11 = iopctrl.arcslider()
    .radius(redi)
    .events(false)
    .indicator(iopctrl.defaultGaugeIndicator);
gauge11.axis().orient("out")
    .normalize(true)
    .ticks(0)
    .tickSubdivide(3)
    .tickSize(0, 0, 0)
    .tickPadding(20)//number padding
    .scale(d3.scale.linear()
        .domain([0, 6000])
        .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

var segDisplay1 = iopctrl.segdisplay()
    .width(0)
    .digitCount(0)
    .negative(false)
    .decimals(0);

svg.append("g")
    .attr("class", "segdisplay")
    .attr("transform", "translate(148, 280)")
    .call(segDisplay1);

svg.append("g")
    .attr("class", "rampSweep")
    .style("fill", "#7bdeff");



svg.append("g")
    .attr("class", "gauge")
    .call(gauge11);

var svg2 = d3.select("#chartdiv2")
    .append("svg:svg")
    .attr("width", 150)
    .attr("height", 100);


var gauge12 = iopctrl.arcslider()
    .radius(redi)
    .events(false)
    .indicator(iopctrl.defaultGaugeIndicator);
gauge12.axis().orient("out")
    .normalize(true)
    .ticks(0)
    .tickSubdivide(3)
    .tickSize(0, 0, 0)
    .tickPadding(20)//number padding
    .scale(d3.scale.linear()
        .domain([0, 10000])
        .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

var segDisplay2 = iopctrl.segdisplay()
    .width(0)
    .digitCount(0)
    .negative(false)
    .decimals(0);

svg2.append("g")
    .attr("class", "segdisplay")
    .attr("transform", "translate(148, 280)")
    .call(segDisplay2);

svg2.append("g")
    .attr("class", "rampSweep")
    .style("fill", "#7bdeff");



svg2.append("g")
    .attr("class", "gauge")
    .call(gauge12);

var svg3 = d3.select("#chartdiv3")
    .append("svg:svg")
    .attr("width", 150)
    .attr("height", 100);


var gauge13 = iopctrl.arcslider()
    .radius(redi)
    .events(false)
    .indicator(iopctrl.defaultGaugeIndicator);
gauge13.axis().orient("out")
    .normalize(true)
    .ticks(0)
    .tickSubdivide(3)
    .tickSize(0, 0, 0)
    .tickPadding(20)//number padding
    .scale(d3.scale.linear()
        .domain([0, 10000])
        .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

var segDisplay3 = iopctrl.segdisplay()
    .width(0)
    .digitCount(0)
    .negative(false)
    .decimals(0);

svg3.append("g")
    .attr("class", "segdisplay")
    .attr("transform", "translate(148, 280)")
    .call(segDisplay3);

svg3.append("g")
    .attr("class", "rampSweep")
    .style("fill", "#7bdeff");



svg3.append("g")
    .attr("class", "gauge")
    .call(gauge13);

var svg4 = d3.select("#chartdiv4")
    .append("svg:svg")
    .attr("width", 150)
    .attr("height", 100);


var gauge14 = iopctrl.arcslider()
    .radius(redi)
    .events(false)
    .indicator(iopctrl.defaultGaugeIndicator);
gauge14.axis().orient("out")
    .normalize(true)
    .ticks(0)
    .tickSubdivide(3)
    .tickSize(0, 0, 0)
    .tickPadding(20)//number padding
    .scale(d3.scale.linear()
        .domain([0, 10000])
        .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

var segDisplay4 = iopctrl.segdisplay()
    .width(0)
    .digitCount(0)
    .negative(false)
    .decimals(0);

svg4.append("g")
    .attr("class", "segdisplay")
    .attr("transform", "translate(148, 280)")
    .call(segDisplay4);

svg4.append("g")
    .attr("class", "rampSweep")
    .style("fill", "#7bdeff");



svg4.append("g")
    .attr("class", "gauge")
    .call(gauge14);

var svg5 = d3.select("#chartdiv5")
    .append("svg:svg")
    .attr("width", 150)
    .attr("height", 100);


var gauge15 = iopctrl.arcslider()
    .radius(redi)
    .events(false)
    .indicator(iopctrl.defaultGaugeIndicator);
gauge15.axis().orient("out")
    .normalize(true)
    .ticks(0)
    .tickSubdivide(3)
    .tickSize(0, 0, 0)
    .tickPadding(20)//number padding
    .scale(d3.scale.linear()
        .domain([0, 300])
        .range([-2.6 * Math.PI / 3.4, 2.6 * Math.PI / 3.4]));

var segDisplay5 = iopctrl.segdisplay()
    .width(0)
    .digitCount(0)
    .negative(false)
    .decimals(0);

svg5.append("g")
    .attr("class", "segdisplay")
    .attr("transform", "translate(148, 280)")
    .call(segDisplay5);

svg5.append("g")
    .attr("class", "rampSweep")
    .style("fill", "#7bdeff");



svg5.append("g")
    .attr("class", "gauge")
    .call(gauge15);
//AmCharts.ready(function () {
//    // create angular gauge
////    chart = new AmCharts.AmAngularGauge();
//////  chart.addTitle("Speedometer");
////    //chart.fontSize=10;
////   // chart.marginTop=100;
////    //chart.marginLeft=6;
////    //chart.marginBottom=100;
////    axis1 = new AmCharts.GaugeAxis();
////    axis1.startValue = 0;
////   // axis.axisThickness = 1;//outer border for gauge
////    axis1.valueInterval = 1000;
////    axis1.tickThickness=0;
////    //axis.radius=22;  //size of gauge from centre
////    axis1.endValue = 10000;//range of gauge
////    axis1.startAngle=-132;
////    axis1.endAngle=132; // end angle gauge rotation
////    axis1.tickLength=1;//lenth of major tick
////    axis1.labelOffset=-120;//distance of the text from the tick
////    // color bands
////    var band1 = new AmCharts.GaugeBand();
////    band1.startValue = 0;
////    band1.endValue = 10000;
////    band1.color = "#00ff00";
////    band1.innerRadius = "100%";
////    axis1.bands = [band1];
////    axis1.bottomTextYOffset = -2;
////   // axis1.setBottomText("00");
////    chart.addAxis(axis1);
////    arrow1 = new AmCharts.GaugeArrow();
////    arrow1.color="#000000";
////    arrow1.nailRadius=1;
////    arrow1.startWidth=1;
////    chart.addArrow(arrow1);
////    chart.write("chartdiv");
//
//
//
////chart 2
//
//    // create angular gauge
//    chart2 = new AmCharts.AmAngularGauge();
////  chart2.addTitle("Speedometer");
//    //chart2.fontSize=10;
//    //chart2.marginTop=100;
//    //chart2.marginLeft=6;
//   // chart2.marginBottom=100;
//    axis2 = new AmCharts.GaugeAxis();
//    axis2.startValue = 0;
//    // axis.axisThickness = 0;//outer border for gauge
//    axis2.valueInterval = 1000;
//    axis2.tickThickness=0;
//  //  axis.radius=22;  //size of gauge from centre
//    axis2.endValue = 10000;//range of gauge
//    axis2.startAngle=-132;
//    axis2.endAngle=132; // end angle gauge rotation
//    axis2.tickLength=0;//lenth of major tick
//    axis2.labelOffset=-120;//distance of the text from the tick
//    // color bands
//    var band1 = new AmCharts.GaugeBand();
//    band1.startValue = 0;
//    band1.endValue = 10000;
//    band1.color = "#00ff00";
//    band1.innerRadius = "100%";
//    axis2.bands = [band1];
//    axis2.bottomTextYOffset = -2;
//   // axis2.setBottomText("00");
//    chart2.addAxis(axis2);
//    arrow2 = new AmCharts.GaugeArrow();
//    arrow2.color="#000000";
//    arrow2.nailRadius=1;
//    arrow2.startWidth=1;
//    chart2.addArrow(arrow2);
//    chart2.write("chartdiv2");
//    // change value every 2 seconds
////     setInterval(randomValue, 200);
//
////chart3
//
//    // create angular gauge
//    chart3 = new AmCharts.AmAngularGauge();
////  chart3.addTitle("Speedometer");
//    //chart3.fontSize=10;
//    //chart3.marginTop=100;
//   // chart3.marginLeft=6;
//    //chart3.marginBottom=100;
//    axis3 = new AmCharts.GaugeAxis();
//    axis3.startValue = 0;
//    // axis.axisThickness = 1;//outer border for gauge
//    axis3.valueInterval = 1000;
//    axis3.tickThickness=0;
//   // axis.radius=22;  //size of gauge from centre
//    axis3.endValue = 10000;//range of gauge
//    axis3.startAngle=-132;
//    axis3.endAngle=132; // end angle gauge rotation
//    axis3.tickLength=0;//lenth of major tick
//    axis3.labelOffset=-120;//distance of the text from the tick
//    // color bands
//    var band1 = new AmCharts.GaugeBand();
//    band1.startValue = 0;
//    band1.endValue = 10000;
//    band1.color = "#00ff00";
//    band1.innerRadius = "100%";
//    axis3.bands = [band1];
//    axis3.bottomTextYOffset = -2;
//    //axis3.setBottomText("00");
//    chart3.addAxis(axis3);
//    arrow3 = new AmCharts.GaugeArrow();
//    arrow3.color="#000000";
//    arrow3.nailRadius=1;
//    arrow3.startWidth=1;
//    chart3.addArrow(arrow3);
//    chart3.write("chartdiv3");
//    // change value every 2 seconds
////     setInterval(randomValue, 200);
//
////chart4
//
//    // create angular gauge
//    chart4 = new AmCharts.AmAngularGauge();
////  chart4.addTitle("Speedometer");
//    //chart4.fontSize=10;
//   // chart4.marginTop=100;
//   // chart4.marginLeft=6;
//   // chart4.marginBottom=100;
//    axis4 = new AmCharts.GaugeAxis();
//    axis4.startValue = 0;
//    // axis.axisThickness = 1;//outer border for gauge
//    axis4.valueInterval = 1000;
//    axis4.tickThickness=0;
//  //  axis.radius=22;  //size of gauge from centre
//    axis4.endValue = 10000;//range of gauge
//    axis4.startAngle=-132;
//    axis4.endAngle=132; // end angle gauge rotation
//    axis4.tickLength=0;//lenth of major tick
//    axis4.labelOffset=-120;//distance of the text from the tick
//    // color bands
//    var band1 = new AmCharts.GaugeBand();
//    band1.startValue = 0;
//    band1.endValue = 10000;
//    band1.color = "#00ff00";
//    band1.innerRadius = "100%";
//    axis4.bands = [band1];
//    axis4.bottomTextYOffset = -2;
//   // axis4.setBottomText("00");
//    chart4.addAxis(axis4);
//    arrow4 = new AmCharts.GaugeArrow();
//    arrow4.color="#000000";
//    arrow4.nailRadius=1;
//    arrow4.startWidth=1;
//    chart4.addArrow(arrow4);
//    chart4.write("chartdiv4");
//    // change value every 2 seconds
////     setInterval(randomValue, 200);
//
//
//
////chart5
//
//    // create angular gauge
//    chart5 = new AmCharts.AmAngularGauge();
////  chart5.addTitle("Speedometer");
//    //chart5.fontSize=10;
//   // chart5.marginTop=100;
//    //chart5.marginLeft=6;
//    //chart5.marginBottom=100;
//    axis = new AmCharts.GaugeAxis();
//    axis.startValue = 0;
//    // axis.axisThickness = 0;//outer border for gauge
//    axis.valueInterval = 1000;
//    axis.tickThickness=0;//thickness of side dials
//   // axis.radius=22;  //size of gauge from centre
//    axis.endValue = 10000;//range of gauge
//    axis.startAngle=-132;
//    axis.endAngle=132; // end angle gauge rotation
//    axis.tickLength=0;//lenth of major tickk
//    axis.labelOffset=-120;//distance of the text from the tick
//    // color bands
//    var band1 = new AmCharts.GaugeBand();
//    band1.startValue = 0;
//    band1.endValue = 10000;
//    band1.color = "#00ff00";
//    band1.innerRadius = "100%";
//    axis.bands = [band1];
//    axis.bottomTextYOffset = -2;
//   // axis.setBottomText("00");
//    chart5.addAxis(axis);
//    arrow = new AmCharts.GaugeArrow();
//    arrow.color="#000000";
//    arrow.nailRadius=1;
//    arrow.startWidth=1;
//    chart5.addArrow(arrow);
//    chart5.write("chartdiv5");
//    // change value every 2 seconds
//    // setInterval(randomValue, 200);
//});
//function randomValue() {
//    var value = Math.round(Math.random() * 200);
//
//    arrow1.setValue(y.Cluster[2].DBL[2].Val);
//   // axis1.setBottomText((y.Cluster[2].DBL[2].Val)/1000 + "k");//annular
//
//    arrow2.setValue(y.Cluster[2].DBL[0].Val);
//   // axis2.setBottomText(y.Cluster[2].DBL[0].Val/1000 + "k");//acc
//
//    arrow3.setValue(y.Cluster[2].DBL[1].Val);
//   // axis3.setBottomText(y.Cluster[2].DBL[1].Val/1000 + "k");//manifold
//
//    arrow4.setValue(y.Cluster[2].DBL[3].Val);
//   // axis4.setBottomText(y.Cluster[2].DBL[3].Val/1000 + "k");//shearboost
////chart5
//    arrow.setValue(y.Cluster[2].DBL[4].Val);
//   // axis.setBottomText(y.Cluster[2].DBL[4].Val/1000 + "k");//rig air
//}

