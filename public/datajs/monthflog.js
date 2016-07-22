/**
 * Created by Administrator on 2/23/2016.
 */

var fmax= 0,ffmax= 0,allmax=0;
function show_dialog() {
    $('#data').modal();
}
window.onload=function() {

    // get tab container
    var container = document.getElementById("tabContainer");
    // set current tab
    var navitem = container.querySelector(".tabs ul li");
    //store which tab we are on
    var ident = navitem.id.split("_")[1];
    navitem.parentNode.setAttribute("data-current",ident);
    //set current tab with class of activetabheader
    navitem.setAttribute("class","tabActiveHeader");

    //hide two tab contents we don't need
    var pages = container.querySelectorAll(".tabpage");
    for (var i = 1; i < pages.length; i++) {
        pages[i].style.display="none";
    }

    //this adds click event to tabs
    var tabs = container.querySelectorAll(".tabs ul li");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].onclick=displayPage;


    }
//    show_rze_uplgd;
}

// on click of one of tabs
function displayPage() {
    var current = this.parentNode.getAttribute("data-current");
    //remove class of activetabheader and hide old contents
    document.getElementById("tabHeader_" + current).removeAttribute("class");
    document.getElementById("tabpage_" + current).style.display="none";
    document.getElementById("content" + current).style.display="none";

    var ident = this.id.split("_")[1];
    //add class of activetabheader to new active tab and show contents
    this.setAttribute("class","tabActiveHeader");
    document.getElementById("tabpage_" + ident).style.display="block";
    document.getElementById("content" + ident).style.display="block";
    this.parentNode.setAttribute("data-current",ident);

}
/*$(function() {
 //    window.onload = call;
 window.onresize= call;
 });*/
/*
 $(function() {



 });*/

function call()
{
//    alert('resize call');
    show_rze_uplgd();
    show_rze_uplgd1();
}
function daysInMonth(year,month) {
    return new Date(year, month, 0).getDate();
}  //method returns no. of days in a specific month.

var days= 0,rig_id=1;

document.getElementsByName
FusionCharts.setCurrentRenderer('javascript');
$(function() {

    $('#data').append(alarmcontent());
    $('.f2').append(alarm_footer());
    $('.f1').append(userinfo());
    user_name();

    //here get selected rigname
    var rigname = window.localStorage.getItem("rgnm");
//    console.log(rigname);
    //   $('#rig_lbl').text(rigname); //display rigname



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

    bindyear();
    var dt=new Date();

    var dt=new Date();

    var urlParams,trace,month,year,trace1,month1,year1;
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

//        function logs
        trace=parseInt(urlParams["trace"]);
        month=parseInt(urlParams["month"]);
        year=parseInt(urlParams["year"]);

    }
    else {
        // no query string exists
        trace=1;
        month=(dt.getMonth()+1);
        year=dt.getFullYear();


    }
    days=daysInMonth(year,(month));
//    alert(trace+" m "+month+" y "+year+" Trace val "+$('#trace').val(trace));

    flog_drop_bind(trace);
    // fflog_drop_bind(trace);


//    $( "#trace option:selected" ).val(trace);
//    $('#trace').val(trace);
    $('#year').val(year);
    $('#month').val(month);
    column(rig_id,trace,year,month);
    Scatterchart(rig_id,trace,year,month);



    column1(rig_id,trace,year,month);
    Scatterchart1(rig_id,trace,year,month);

//    $('#trace1').val(trace);
    $('#year1').val(year);
    $('#month1').val(month);


    $("#month").change(function(){
        days=daysInMonth($('#year').val(),$('#month').val());

    });

    /*  $("#year").change(function(){

     });*/


    $('#btndetail').click(function() {
        days=daysInMonth($('#year').val(),$('#month').val());
        column(rig_id,parseInt($('#trace').val()),parseInt($('#year').val()),parseInt($('#month').val()));
        Scatterchart(rig_id,parseInt($('#trace').val()),parseInt($('#year').val()),parseInt($('#month').val()));
        show_rze_uplgd();

    });

    $('#btndetail1').click(function() {
        days=daysInMonth($('#year1').val(),$('#month1').val());
        column1(rig_id,parseInt($('#trace1').val()),parseInt($('#year1').val()),parseInt($('#month1').val()));
        Scatterchart1(rig_id,parseInt($('#trace1').val()),parseInt($('#year1').val()),parseInt($('#month1').val()));
        show_rze_uplgd1();
    });

    window.onresize= call;
});



function bindyear()
{
    var dt=new Date();
    for(i=dt.getFullYear();i>=2010;i--)
    {
        $('#year').append('<option value='+i+'>'+i+'</option>');
        $('#year1').append('<option value='+i+'>'+i+'</option>');
    }
}

//FUNCTION LOG START

//  Function logs column chart
function column(rig_id,vid,year,month)
{

    var strxml="", strcategories="", strd1="", strd2="";
    var opn_arry=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],dy= 0,opn_ctr= 1,cls_ctr=2;
    var cls_arry=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    $('#loading').show();

    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url:'/mwise_flog_clm/' + rig_id + '/' + vid + '/' + year+'/'+month,
        success: function (data) {
            JSON.stringify(data);

            $.each(data.open,function(idx,opn){

                dys=(opn.com_day)-1;
                opn_arry[dys]=opn.Valve_total;

                if(opn.Valve_total>fmax)
                {
                    fmax=opn.Valve_total;
                }

            });

            $.each(data.close,function(idx,cls){

                dys=(cls.com_day)-1;
                cls_arry[dys]=cls.Valve_total;

                if(cls.Valve_total>fmax)
                {
                    fmax=cls.Valve_total;
                }

            });

            $.ajax({
                type: 'GET',
                contentType: 'application/json',
                url:'/mwise_fflog_clm/' + rig_id + '/' + vid + '/' + year+'/'+month,
                success: function (data) {
                    JSON.stringify(data);


                    $.each(data.open, function (idx, opn) {


                        if (opn.open_total > ffmax) {
                            ffmax = opn.open_total;
                        }
                        if (opn.close_total > ffmax) {
                            ffmax = opn.close_total;
                        }

                    });


                    allmax = Math.max(fmax, ffmax);


                    strxml = "<chart plotSpacePercent='100' chartLeftMargin='75'   showYAxisValues='0' xAxisMaxValue='0' yAxisMaxValue='" + allmax + "'  placeValuesInside='1'  yAxisValuesPadding='100' xAxisName='DATE'  xAxisNamePadding='0'  canvasbgcolor='      ,      ,' drawAnchors='0' rotateValues='1' showBorder='0'  numberPrefix=''    chartBottomMargin='50' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='0'  numDivLines='0'  showValues='0' canvasbgalpha='0' canvasbgangle='0' outCnvbaseFontSize='18' outcnvBaseFontColor='808080' alternateHGridAlpha='0' alternateHGridColor='464646' canvasBorderThickness='1' canvasBorderAlpha='0' outcnvBaseFontsize='8' canvasBorderColor='828282'  hoverCapBorderColor='828282' hoverCapBgColor='828282' plotGradientColor='' plotFillAngle='90' plotFillColor='1D8BD1' plotfillalpha='100' showAnchors='0' canvaspadding='0' plotFillRatio='90,90' showPlotBorder='0' plotborderthickness='1' divlinecolor='      ,      ' divlinealpha='0'>";
//        strxml = "<chart plotSpacePercent='100' chartLeftMargin='75'   showYAxisValues='0' xAxisMaxValue='0'   placeValuesInside='1'  yAxisValuesPadding='100' xAxisName='DATE'  xAxisNamePadding='0'  canvasbgcolor='      ,      ,' drawAnchors='0' rotateValues='1' showBorder='0'  numberPrefix=''    chartBottomMargin='50' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='0'  numDivLines='0'  showValues='0' canvasbgalpha='0' canvasbgangle='0' outCnvbaseFontSize='18' outcnvBaseFontColor='808080' alternateHGridAlpha='0' alternateHGridColor='464646' canvasBorderThickness='1' canvasBorderAlpha='0' outcnvBaseFontsize='8' canvasBorderColor='828282'  hoverCapBorderColor='828282' hoverCapBgColor='828282' plotGradientColor='' plotFillAngle='90' plotFillColor='1D8BD1' plotfillalpha='100' showAnchors='0' canvaspadding='0' plotFillRatio='90,90' showPlotBorder='0' plotborderthickness='1' divlinecolor='      ,      ' divlinealpha='0'>";

                    strxml += "<styles>";
                    strxml += "<definition>";
                    strxml += "<style name='xaxisfont' type='font' font='Verdana' align='left' size='12' bold='1' underline='0'/>";
                    strxml += "</definition>";
                    strxml += "<application>";
                    strxml += "<apply toObject='YAxisName' styles='xaxisfont' />";
                    strxml += "<apply toObject='XAxisName' styles='xaxisfont' />";
                    strxml += "</application>";
                    strxml += "</styles>";
                    strcategories = "<categories>";
                    strd1 = "<dataset seriesName='OPEN' color='7fb5b7' alpha='100' >";
                    strd2 = "<dataset seriesName='CLOSE' color='999999' alpha='100' >";
                    for (i = 1; i <= days; i++) {
                        strcategories += "<category name='" + i + "' />";
//          strcategories += "<category name='' />";

                    }


                    for (i = 0; i < days; i++) {
                        strd1 += "<set value='" + opn_arry[i] + "'/>";
                        strd2 += "<set value='" + cls_arry[i] + "'/>";

                        $('#tli_' + opn_ctr).text(opn_arry[i]);
                        $('#tli_' + cls_ctr).text(cls_arry[i]);

                        opn_ctr += 2;
                        cls_ctr += 2;
                    }


                    strcategories += "</categories>";
                    strd1 += "</dataset>";
                    strd2 += "</dataset>";
                    strxml += strcategories + strd1 + strd2 + "</chart>";

                    var colm = new FusionCharts('FusionCharts/MSColumn2D.swf', 'chart-3', '100%', '105%', '0', '1');
                    colm.setXMLData(strxml);
                    colm.setTransparent(true);
                    colm.render('colm');
                }
            });
            $('#loading').hide();
        }
    });


    show_rze_uplgd();
}

function Scatterchart(rig_id,vid,year,month)
{


    var day= 0,h= 0,m=0;
    var strxml, strcategories, strd1, strd2;

    $('#loading').show();

    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url:'/mnth_wise_flog_sct/' + rig_id + '/' + vid + '/' + year+'/'+month,
        success: function (data) {
            JSON.stringify(data);

//    strxml = "<chart toolTipBorderColor='D9E5F1' showToolTip='1' xAxisName='Days' bgAlpha='0' numberSuffix=':00'  toolTipBgColor='D9E5F1' xAxisMaxValue='31' xAxisMinValue='1' yAxisName='Time(In 24 hrs format)' yAxisMinValue='1'  yAxisMaxValue='24' numDivLines='22' showAlternateHGridColor='0'  divlinecolor='808080' divlinealpha='10' divLineThickness='2' vDivlineAlpha='10' showBorder='0' canvasbgalpha='0' showLegend='0' chartBottomMargin='105' canvasBorderAlpha='20' canvasBorderColor='000000' canvasBorderThickness='1'>";
            strxml = "<chart  canvasPadding='0' toolTipBorderColor='D9E5F1' showToolTip='1'    bgAlpha='0,0' numberSuffix=':00' xAxisName='.' yAxisName='TIME(In 24 hrs format)'  toolTipBgColor='D9E5F1' xAxisMaxValue='31' xAxisMinValue='1'  yAxisMinValue='1'  yAxisMaxValue='24' numDivLines='22' showAlternateHGridColor='0'  divLineColor='808080'  divLineThickness='1' divLineIsDashed='1' divLineDashLen='2' divLineDashGap='5' vDivlineAlpha='10' showBorder='0'  canvasbgalpha='0' canvasbgangle='0' canvasbgcolor='      ,      ,' showLegend='0' chartBottomMargin='58' canvasBorderAlpha='20' canvasBorderColor='000000' canvasBorderThickness='1'>";

            strxml += "<styles>";
            strxml += "<definition>";
            strxml += "<style name='xaxisfont' type='font' font='Verdana' align='left' size='12' color='ffffff' bold='1' underline='0'/>";
            strxml += "<style name='yaxisfont' type='font' font='Verdana' align='left' size='12'  bold='1' underline='0'/>";
            strxml += "</definition>";
            strxml += "<application>";
            strxml += "<apply toObject='YAxisName' styles='yaxisfont' />";
            strxml += "<apply toObject='XAxisName' styles='xaxisfont' />";
            strxml += "</application>";
            strxml += "</styles>";
            strcategories = "<categories verticalLineColor='000000' >"; //verticalLineColor='e8e9ea' verticalLineThickness='1'
            strd1 = "<dataset id='OP1' seriesName='OPEN' anchorRadius='2' anchorSides='0' color='7fb5b7' anchorBorderColor='7fb5b7' anchorBgColor='7fb5b7'>";
            strd2 = "<dataset id='CL1' seriesName='CLOSE' anchorRadius='2' anchorSides='0' color='999999' anchorBorderColor='999999' anchorBgColor='999999'>";
            for (i = 0; i <= days; i++) {
                if (i == 0) {
                    strcategories += "<category label=''  x='" + i + "' showVerticalLine='0'  />";
                }
                else {
                    strcategories += "<category label=''  x='" + i + "' showVerticalLine='1'  vDivlineAlpha='0' />";
                }
            }
            strcategories += "</categories>";

            $.each(data.open,function(idx,opn){
                day = new Date(opn.Date_time).getDate();
                h = new Date(opn.Date_time).getHours();
                m = new Date(opn.Date_time).getMinutes();
                strd1 += "<set x='" + (day - 0.8) + "' y='" + h + "." + m + "'/>";
            });

            $.each(data.close,function(idx,cls){
                day = new Date(cls.Date_time).getDate();
                h = new Date(cls.Date_time).getHours();
                m = new Date(cls.Date_time).getMinutes();
                strd2 += "<set x='" + (day - 0.2) + "' y='" + h + "." + m + "'/>";
            });


            strd1 += "</dataset>";
            strd2 += "</dataset>";
            // start set Vertical color here start
            strxml += "<vTrendLines>";

            for (i = 0; i < days; i++) {
                strxml += "<line startValue='" + i + "' endValue='" + (i + 1) + "' displayValue=' ' thickness='1' isTrendZone='1' color='      ' alpha='80'/>";
            }


            strxml += "</vTrendLines>";
            //End set Vertical color here start
            strxml += strcategories + strd1 + strd2 + "</chart>";

            var b = new FusionCharts('FusionCharts/Scatter.swf', 'chart-4', '100%', '105%', '0', '1');
            //  b.setXMLUrl("scatter.xml");
            b.setXMLData(strxml);
            b.setTransparent(true);
            b.render('bop');

            $('#loading').hide();
        }

    });

}

function show_rze_uplgd()
{

    lx=$(window).width();
//    console.log('value of  : '+lx);
    if(lx>1444) {
        if (days == 28) {

            $('#colm').css({
                'width': '1555px',
                'height': '690px',
                'position': 'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });
            $('#bop').css({
                'width': '1710px',
                'height': '690px',
//            'position':'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });

            $('#tli_57').hide();
            $('#tli_58').hide();
            $('#tli_59').hide();
            $('#tli_60').hide();
            $('#tli_61').hide();
            $('#tli_62').hide();
        }
        else if (days == 29) {
            $('#colm').css({
                'width': '1610px',
                'height': '690px',
                'position': 'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });
            $('#bop').css({
                'width': '1710px',
                'height': '690px',
//            'position':'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });
            $('#tli_57').show();
            $('#tli_58').show();
            $('#tli_59').hide();
            $('#tli_60').hide();
            $('#tli_61').hide();
            $('#tli_62').hide();
        }
        else if (days == 30) {

            $('#colm').css({
                'width': '1663px',
                'height': '690px',
                'position': 'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });
            $('#bop').css({
                'width': '1715px',
                'height': '690px',
//            'position':'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });


            $('#tli_57').show();
            $('#tli_58').show();
            $('#tli_59').show();
            $('#tli_60').show();
            $('#tli_61').hide();
            $('#tli_62').hide();
        }
        else if (days == 31) {

            $('#colm').css({
                'width': '1710px',
                'height': '690px',
                'position': 'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });
            $('#bop').css({
                'width': '1710px',
                'height': '690px',
//            'position':'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });
            $('#tli_57').show();
            $('#tli_58').show();
            $('#tli_59').show();
            $('#tli_60').show();
            $('#tli_61').show();
            $('#tli_62').show();
        }
    }
    else{

//        console.log('value of  : '+lx);
        if (days == 28) {

            $('#colm').css({
                'width': '1178.05px',
                'height': '580.679px',
                'position': 'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });
            $('#bop').css({
                'width': '1292.05px',
                'height': '580.679px',
//            'position':'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });

            $('#tli_57').hide();
            $('#tli_58').hide();
            $('#tli_59').hide();
            $('#tli_60').hide();
            $('#tli_61').hide();
            $('#tli_62').hide();
        }
        else if (days == 29) {
            $('#colm').css({
                'width': '1215px',
                'height': '580.679px',
                'position': 'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });
            $('#bop').css({
                'width': '1293px',
                'height': '580.679px',
//            'position':'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });
            $('#tli_57').show();
            $('#tli_58').show();
            $('#tli_59').hide();
            $('#tli_60').hide();
            $('#tli_61').hide();
            $('#tli_62').hide();
        }
        else if (days == 30) {

            $('#colm').css({
                'width': '1265.05px',
                'height': '580.679px',
                'position': 'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });
            $('#bop').css({
                'width': '1297.05px',
                'height': '580.679px',
//            'position':'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });


            $('#tli_57').show();
            $('#tli_58').show();
            $('#tli_59').show();
            $('#tli_60').show();
            $('#tli_61').hide();
            $('#tli_62').hide();
        }
        else if (days == 31) {
            // console.log('call');
            $('#colm').css({
                'width': '1292.05px',
                'height': '580.679px',
                'position': 'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });
            $('#bop').css({
                'width': '1292.05px',
                'height': '580.679px',
//            'position':'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });
            $('#tli_57').show();
            $('#tli_58').show();
            $('#tli_59').show();
            $('#tli_60').show();
            $('#tli_61').show();
            $('#tli_62').show();
        }
    }

}

function flog_drop_bind(trace){
    $.get('/flog_drop/'+rig_id, {}, function(data) {
        JSON.stringify(data);

        $.each(data.message,function(idx,value){
            $('#trace').append('<option value='+value.id+'>'+value.valve_name+'</option>');   /*Function Log Dropdown*/
            $('#trace1').append('<option value='+value.id+'>'+value.valve_name+'</option>');   /*Function Log Dropdown*/
        });

        $('#trace').val(trace);
        $('#trace1').val(trace);
    });

}

function fflog_drop_bind(trace){
    $.get('/flog_drop/'+rig_id, {}, function(data) {
        JSON.stringify(data);

        $.each(data.message,function(idx,value){
            $('#trace1').append('<option value='+value.id+'>'+value.valve_name+'</option>');   /*Function Log Dropdown*/
        });

        $('#trace1').val(trace);
    });

}


//FUNCTION LOG END


//FUNCTION FAIL LOG START

function column1(rig_id,vid,year,month)
{
    var strxml="", strcategories="", strd1="", strd2="";
    var opn_arry=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],dy= 0,opn_ctr= 1,cls_ctr=2;
    var cls_arry=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    $('#loading').show();

    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url:'/mwise_fflog_clm/' + rig_id + '/' + vid + '/' + year+'/'+month,
        success: function (data) {
            JSON.stringify(data);


            $.each(data.open,function(idx,opn){

                dys=(opn.com_day)-1;
                opn_arry[dys]=opn.Valve_total;

                if(opn.Valve_total>ffmax)
                {
                    ffmax=opn.Valve_total;
                }

            });

            $.each(data.close,function(idx,cls){

                dys=(cls.com_day)-1;
                cls_arry[dys]=cls.Valve_total;

                if(cls.Valve_total>ffmax)
                {
                    ffmax=cls.Valve_total;
                }

            });

            $.ajax({
                type: 'GET',
                contentType: 'application/json',
                url:'/mwise_flog_clm/' + rig_id + '/' + vid + '/' + year+'/'+month,
                success: function (data) {
                    JSON.stringify(data);

                    $.each(data.open, function (idx, opn) {


                        if (opn.open_total > fmax) {
                            fmax = opn.open_total;
                        }
                        if (opn.close_total > fmax) {
                            fmax = opn.close_total;
                        }

                    });


                    allmax = Math.max(fmax, ffmax);


                    strxml = "<chart plotSpacePercent='100' chartLeftMargin='75'   showYAxisValues='0' xAxisMaxValue='0' yAxisMaxValue='" + allmax + "'  placeValuesInside='1'  yAxisValuesPadding='100' xAxisName='DATE'  xAxisNamePadding='0'  canvasbgcolor='      ,      ,' drawAnchors='0' rotateValues='1' showBorder='0'  numberPrefix=''    chartBottomMargin='50' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='0'  numDivLines='0'  showValues='0' canvasbgalpha='0' canvasbgangle='0' outCnvbaseFontSize='18' outcnvBaseFontColor='808080' alternateHGridAlpha='0' alternateHGridColor='464646' canvasBorderThickness='1' canvasBorderAlpha='0' outcnvBaseFontsize='8' canvasBorderColor='828282'  hoverCapBorderColor='828282' hoverCapBgColor='828282' plotGradientColor='' plotFillAngle='90' plotFillColor='1D8BD1' plotfillalpha='100' showAnchors='0' canvaspadding='0' plotFillRatio='90,90' showPlotBorder='0' plotborderthickness='1' divlinecolor='      ,      ' divlinealpha='0'>";
//        strxml = "<chart plotSpacePercent='100' chartLeftMargin='75'   showYAxisValues='0' xAxisMaxValue='0'   placeValuesInside='1'  yAxisValuesPadding='100' xAxisName='DATE'  xAxisNamePadding='0'  canvasbgcolor='      ,      ,' drawAnchors='0' rotateValues='1' showBorder='0'  numberPrefix=''    chartBottomMargin='50' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='0'  numDivLines='0'  showValues='0' canvasbgalpha='0' canvasbgangle='0' outCnvbaseFontSize='18' outcnvBaseFontColor='808080' alternateHGridAlpha='0' alternateHGridColor='464646' canvasBorderThickness='1' canvasBorderAlpha='0' outcnvBaseFontsize='8' canvasBorderColor='828282'  hoverCapBorderColor='828282' hoverCapBgColor='828282' plotGradientColor='' plotFillAngle='90' plotFillColor='1D8BD1' plotfillalpha='100' showAnchors='0' canvaspadding='0' plotFillRatio='90,90' showPlotBorder='0' plotborderthickness='1' divlinecolor='      ,      ' divlinealpha='0'>";

                    strxml += "<styles>";
                    strxml += "<definition>";
                    strxml += "<style name='xaxisfont' type='font' font='Verdana' align='left' size='12' bold='1' underline='0'/>";
                    strxml += "</definition>";
                    strxml += "<application>";
                    strxml += "<apply toObject='YAxisName' styles='xaxisfont' />";
                    strxml += "<apply toObject='XAxisName' styles='xaxisfont' />";
                    strxml += "</application>";
                    strxml += "</styles>";
                    strcategories = "<categories>";
                    strd1 = "<dataset seriesName='OPEN' color='7fb5b7' alpha='100' >";
                    strd2 = "<dataset seriesName='CLOSE' color='999999' alpha='100' >";
                    for (i = 1; i <= days; i++) {
                        strcategories += "<category name='" + i + "' />";
//          strcategories += "<category name='' />";

                    }


                    for (i = 0; i < days; i++) {
                        strd1 += "<set value='" + opn_arry[i] + "'/>";
                        strd2 += "<set value='" + cls_arry[i] + "'/>";

                        $('#t1li_' + opn_ctr).text(opn_arry[i]);
                        $('#t1li_' + cls_ctr).text(cls_arry[i]);

                        opn_ctr += 2;
                        cls_ctr += 2;
                    }


                    strcategories += "</categories>";
                    strd1 += "</dataset>";
                    strd2 += "</dataset>";
                    strxml += strcategories + strd1 + strd2 + "</chart>";


                    var colm = new FusionCharts('FusionCharts/MSColumn2D.swf', 'chart-5', '100%', '105%', '0', '1');
                    colm.setXMLData(strxml);
                    colm.setTransparent(true);
                    colm.render('colm1');

                }
            });
            $('#loading').hide();
        }
    });


    show_rze_uplgd1();
}

function Scatterchart1(rig_id,vid,year,month)
{

    var day= 0,h= 0,m=0;
    var strxml, strcategories, strd1, strd2;

    $('#loading').show();

    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url:'/mnth_wise_fflog_sct/' + rig_id + '/' + vid + '/' + year+'/'+month,
        success: function (data) {
            JSON.stringify(data);


//    strxml = "<chart toolTipBorderColor='D9E5F1' showToolTip='1' xAxisName='Days' bgAlpha='0' numberSuffix=':00'  toolTipBgColor='D9E5F1' xAxisMaxValue='31' xAxisMinValue='1' yAxisName='Time(In 24 hrs format)' yAxisMinValue='1'  yAxisMaxValue='24' numDivLines='22' showAlternateHGridColor='0'  divlinecolor='808080' divlinealpha='10' divLineThickness='2' vDivlineAlpha='10' showBorder='0' canvasbgalpha='0' showLegend='0' chartBottomMargin='105' canvasBorderAlpha='20' canvasBorderColor='000000' canvasBorderThickness='1'>";
            strxml = "<chart  canvasPadding='0' toolTipBorderColor='D9E5F1' showToolTip='1'    bgAlpha='0,0' numberSuffix=':00' xAxisName='.' yAxisName='TIME(In 24 hrs format)'  toolTipBgColor='D9E5F1' xAxisMaxValue='31' xAxisMinValue='1'  yAxisMinValue='1'  yAxisMaxValue='24' numDivLines='22' showAlternateHGridColor='0'  divLineColor='808080'  divLineThickness='1' divLineIsDashed='1' divLineDashLen='2' divLineDashGap='5' vDivlineAlpha='10' showBorder='0'  canvasbgalpha='0' canvasbgangle='0' canvasbgcolor='      ,      ,' showLegend='0' chartBottomMargin='58' canvasBorderAlpha='20' canvasBorderColor='000000' canvasBorderThickness='1'>";

            strxml += "<styles>";
            strxml += "<definition>";
            strxml += "<style name='xaxisfont' type='font' font='Verdana' align='left' size='12' color='ffffff' bold='1' underline='0'/>";
            strxml += "<style name='yaxisfont' type='font' font='Verdana' align='left' size='12'  bold='1' underline='0'/>";
            strxml += "</definition>";
            strxml += "<application>";
            strxml += "<apply toObject='YAxisName' styles='yaxisfont' />";
            strxml += "<apply toObject='XAxisName' styles='xaxisfont' />";
            strxml += "</application>";
            strxml += "</styles>";
            strcategories = "<categories verticalLineColor='000000' >"; //verticalLineColor='e8e9ea' verticalLineThickness='1'
            strd1 = "<dataset id='OP1' seriesName='OPEN' anchorRadius='2' anchorSides='0' color='7fb5b7' anchorBorderColor='7fb5b7' anchorBgColor='7fb5b7'>";
            strd2 = "<dataset id='CL1' seriesName='CLOSE' anchorRadius='2' anchorSides='0' color='999999' anchorBorderColor='999999' anchorBgColor='999999'>";
            for (i = 0; i <= days; i++) {
                if (i == 0) {
                    strcategories += "<category label=''  x='" + i + "' showVerticalLine='0'  />";
                }
                else {
                    strcategories += "<category label=''  x='" + i + "' showVerticalLine='1'  vDivlineAlpha='0' />";
                }
            }
            strcategories += "</categories>";

            $.each(data.open,function(idx,opn){
                day = new Date(opn.Date_time).getDate();
                h = new Date(opn.Date_time).getHours();
                m = new Date(opn.Date_time).getMinutes();
                strd1 += "<set x='" + (day - 0.8) + "' y='" + h + "." + m + "'/>";
            });

            $.each(data.close,function(idx,cls){
                day = new Date(cls.Date_time).getDate();
                h = new Date(cls.Date_time).getHours();
                m = new Date(cls.Date_time).getMinutes();
                strd2 += "<set x='" + (day - 0.2) + "' y='" + h + "." + m + "'/>";
            });


            strd1 += "</dataset>";
            strd2 += "</dataset>";
            // start set Vertical color here start
            strxml += "<vTrendLines>";

            for (i = 0; i < days; i++) {
                strxml += "<line startValue='" + i + "' endValue='" + (i + 1) + "' displayValue=' ' thickness='1' isTrendZone='1' color='      ' alpha='80'/>";
            }


            strxml += "</vTrendLines>";
            //End set Vertical color here start
            strxml += strcategories + strd1 + strd2 + "</chart>";


            var b = new FusionCharts('FusionCharts/Scatter.swf', 'chart-6', '100%', '105%', '0', '1');
            //  b.setXMLUrl("scatter.xml");
            b.setXMLData(strxml);
            b.setTransparent(true);
            b.render('bop1');

            $('#loading').hide();
        }
    });

}



function show_rze_uplgd1()
{


    lx=$(window).width();
//    console.log('value of  : '+lx);
    if(lx>1444) {
        if (days == 28) {

            $('#colm1').css({
                'width': '1555px',
                'height': '690px',
                'position': 'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });
            $('#bop1').css({
                'width': '1710px',
                'height': '690px',
//            'position':'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });

            $('#t1li_57').hide();
            $('#t1li_58').hide();
            $('#t1li_59').hide();
            $('#t1li_60').hide();
            $('#t1li_61').hide();
            $('#t1li_62').hide();
        }
        else if (days == 29) {
            $('#colm1').css({
                'width': '1610px',
                'height': '690px',
                'position': 'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });
            $('#bop1').css({
                'width': '1710px',
                'height': '690px',
//            'position':'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });
            $('#t1li_57').show();
            $('#t1li_58').show();
            $('#t1li_59').hide();
            $('#t1li_60').hide();
            $('#t1li_61').hide();
            $('#t1li_62').hide();
        }
        else if (days == 30) {

            $('#colm1').css({
                'width': '1663px',
                'height': '690px',
                'position': 'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });
            $('#bop1').css({
                'width': '1715px',
                'height': '690px',
//            'position':'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });


            $('#t1li_57').show();
            $('#t1li_58').show();
            $('#t1li_59').show();
            $('#t1li_60').show();
            $('#t1li_61').hide();
            $('#t1li_62').hide();
        }
        else if (days == 31) {

            $('#colm1').css({
                'width': '1710px',
                'height': '690px',
                'position': 'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });
            $('#bop1').css({
                'width': '1710px',
                'height': '690px',
//            'position':'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });
            $('#t1li_57').show();
            $('#t1li_58').show();
            $('#t1li_59').show();
            $('#t1li_60').show();
            $('#t1li_61').show();
            $('#t1li_62').show();
        }
    }
    else{

//        console.log('value of  : '+lx);
        if (days == 28) {

            $('#colm1').css({
                'width': '1178.05px',
                'height': '580.679px',
                'position': 'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });
            $('#bop1').css({
                'width': '1292.05px',
                'height': '580.679px',
//            'position':'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });

            $('#t1li_57').hide();
            $('#t1li_58').hide();
            $('#t1li_59').hide();
            $('#t1li_60').hide();
            $('#t1li_61').hide();
            $('#t1li_62').hide();
        }
        else if (days == 29) {
            $('#colm1').css({
                'width': '1215px',
                'height': '580.679px',
                'position': 'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });
            $('#bop1').css({
                'width': '1293px',
                'height': '580.679px',
//            'position':'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });
            $('#t1li_57').show();
            $('#t1li_58').show();
            $('#t1li_59').hide();
            $('#t1li_60').hide();
            $('#t1li_61').hide();
            $('#t1li_62').hide();
        }
        else if (days == 30) {

            $('#colm11').css({
                'width': '1265.05px',
                'height': '580.679px',
                'position': 'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });
            $('#bop1').css({
                'width': '1297.05px',
                'height': '580.679px',
//            'position':'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });


            $('#tli_57').show();
            $('#t1li_58').show();
            $('#t1li_59').show();
            $('#t1li_60').show();
            $('#t1li_61').hide();
            $('#t1li_62').hide();
        }
        else if (days == 31) {
            console.log('call');
            $('#colm1').css({
                'width': '1292.05px',
                'height': '580.679px',
                'position': 'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });
            $('#bop1').css({
                'width': '1292.05px',
                'height': '580.679px',
//            'position':'absolute',
//            'display':'none',
                'overflow': 'hidden'
            });
            $('#t1li_57').show();
            $('#t1li_58').show();
            $('#t1li_59').show();
            $('#t1li_60').show();
            $('#t1li_61').show();
            $('#t1li_62').show();
        }
    }

}
//FUNCTION FAIL LOG END