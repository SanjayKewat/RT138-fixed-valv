/**
 * Created by Administrator on 2/23/2016.
 */

function ptab() {

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
    table_adjust();
}



function daysInMonth(year,month) {
    return new Date(year, month, 0).getDate();
}

var twelve = [0,0,0,0,0,0,0,0,0,0,0,0];
var twelve_0=[],twelve_1=[],twelve_2=[],twelve_3=[],twelve_4=[],twelve_5=[];
var arry = [],arrx = [];
var xlen;
var y,y1,y_m,y_mo;
var arr=[],arr1=[],arr_m=[],arr_mo=[],arr_mo1=[];
var arr_p=[],arr_py=[];
var n,n1,n2,np0,np;
var nn;
var chart,chartData;
var loss = ["Communication Loss","Purge Loss","Mains Fail","Low Hydraulic Level","Low Accumulator Pressure","Low Rig Air"];
var days=0;
function ccall() {

    $(document).ready(function () {
        bindyear2();
        bindyear();
        bindyear3();

        var dt = new Date();
        table_val(rig_id,$('.dropdown1').val());

        chart_plot(rig_id,$('.dropdown1').val());
        days = daysInMonth(dt.getFullYear(), (dt.getMonth() + 1));

        fus_chart_plot(rig_id,1,dt.getFullYear(),dt.getMonth() + 1);

        $('.dd3').val(dt.getMonth() + 1);


//    End stylish alram
        $('.dropdown1').change(function () {
            n = $(this).val();
            table_val(rig_id,parseInt($('.dropdown1').val()));

            chart_plot(rig_id,parseInt($('.dropdown1').val()));
        });

        table_pie(rig_id,parseInt(dt.getFullYear()));



        $('.dd3').change(function () {
            days = daysInMonth($('.dd1').val(), $('.dd3').val());
            fus_chart_plot(rig_id,parseInt($('.dd2').val()),parseInt($('.dd1').val()),parseInt($('.dd3').val()));
//     alert("Year "+$('.dd1').val()+" Month "+$('.dd3').val()+" C loss "+$('#dd2').val());
        });


        $('#tabHeader_1').click(function () {
            bindyear();
            var dt = new Date();
            table_val(rig_id,parseInt($('.dropdown1').val()));

            chart_plot(rig_id,parseInt($('.dropdown1').val()));


        });


        $('#tabHeader_2').click(function () {
            bindyear1();
            bindyear2();

            graph1_plot(rig_id,parseInt($('.dd1').val()));
            nn = $('.dd2 option:selected').text();
            graph2_plot(rig_id,$('.dd1 option:selected').text(), $('.dd2 option:selected').text());


        });
        $('.dd1').change(function () {
//                n1 = $(this).val();
//                np0 = $('.dd2 option:selected').text();
            graph1_plot(rig_id,parseInt($('.dd1').val()));
            graph2_plot(rig_id,$('.dd1 option:selected').text(), $('.dd2 option:selected').text());

        });

        $('.dd2').change(function () {
            // n2 = $(this).val();
            n2 = $('.dd2 option:selected').text();

            np = $('.dd1 option:selected').text();
            graph2_plot(rig_id,$('.dd1 option:selected').text(), $('.dd2 option:selected').text());

            days = daysInMonth($('.dd1').val(), $('.dd3').val());

            fus_chart_plot(rig_id,parseInt($('.dd2').val()),parseInt($('.dd1').val()),parseInt($('.dd3').val()));
        });

        $('#tabHeader_3').click(function () {
            bindyear4();
            var dt = new Date();
            // table_pie(dt.getFullYear());
            pie_plot(rig_id,parseInt($('.ddpie').val()));
            table_pie(rig_id,parseInt($('.ddpie').val()));



        });

        $('.ddpie').change(function () {
            n = $(this).val();
            // table_pie(n);
            pie_plot(rig_id,parseInt($('.ddpie').val()));
            table_pie(rig_id,parseInt($('.ddpie').val()));
        });
//        $('#data').append(alarmcontent());
//        $('.f2').append(alarm_footer());
//        $('.f1').append(userinfo());

        //here get selected rigname
        var rigname = window.localStorage.getItem("rgnm");
//    console.log(rigname);
        $('#rig_lbl').text(rigname); //display rigname

    });//end of ready

}
function bindyear()//generating dynamic drop down
{

    $('.dropdown1').empty();
    var dt=new Date();
    for(i=dt.getFullYear();i>=2010;i--)
    {
        $('.dropdown1').append('<option value='+i+'>'+i+'</option>');
    }
}


function table_val(rigid,year_val){

    $('#loading').show();

    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url:'/pmp_rtime/'+rigid+'/'+year_val,
        success: function (data) {
        JSON.stringify(data);
            if(data.nov.length>0)
            {
                $(".alrt").html('');
                for(i=1;i<=data.nov.length;i++)
                {
                    $(".table"+i+"_tr1_td").html('');
                    $(".table"+i+"_tr2_td").html('');
                    if(data.message.length>0)
                    {
                        for(var x=0;x<data.message.length;x++)
                        {
                            if(data.message[x].pump_id==i)
                            {

                                $(".table"+i+"_tr1_td").append(data.message[x].pmp_run_time);
                                var remaing=data.nov[i-1].max_runtime-data.message[x].pmp_run_time;
                                $(".table"+i+"_tr2_td").append(remaing);
                            }
                        }
                    }

                }
            }

        }
    });//end of pmp_run_tm/:year data

}//end of function table_val



$('.dropdown1').change(function(){
    var year_val = $(this).val();

    chart_plot(rig_id,year_val);
//        alert($(this).val());
});

function chart_plot(rigid,year_val){
    lx = $(window).width(); var pmp1_st_wval; var pmp1_rstrt_err; var pmp1_stp_err; var pmp2_st_wval; var pmp2_rstrt_err; var pmp2_stp_err;
    $('#loading').show();

    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url:'/pump/'+rigid+'/'+year_val,
        success: function (data) {
            JSON.stringify(data);

            for(i=0; i < data.message[0].length; i++)
            {
                if (data.message[0][i].error_id==1 && data.message[0][i].pump_id==1)
                {
                    pmp1_st_wval=data.message[0][i].plot_value;
                }
                else if (data.message[0][i].error_id==2 && data.message[0][i].pump_id==1)
                {
                    pmp1_rstrt_err=data.message[0][i].plot_value;
                }
                else if (data.message[0][i].error_id==3 && data.message[0][i].pump_id==1)
                {
                    pmp1_stp_err=data.message[0][i].plot_value;
                }
                else if (data.message[0][i].error_id==1 && data.message[0][i].pump_id==2)
                {
                    pmp2_st_wval=data.message[0][i].plot_value;
                }
                else if (data.message[0][i].error_id==2 && data.message[0][i].pump_id==2)
                {
                    pmp2_rstrt_err=data.message[0][i].plot_value;
                }
                else if (data.message[0][i].error_id==3 && data.message[0][i].pump_id==3)
                {
                    pmp2_stp_err=data.message[0][i].plot_value;
                }
            }

            // console.log('pmp1_st_wval:' +pmp1_st_wval + 'pmp1_rstrt_err:' +pmp1_rstrt_err+ 'pmp1_stp_err:' +pmp1_stp_err+ 'pmp2_st_wval:' +pmp2_st_wval + 'pmp2_rstrt_err:' +pmp2_rstrt_err+ 'pmp2_stp_err:' +pmp2_stp_err );


            if(data.message != '404'){

                $(".alrt1").html('');

                chartData = [
                    {
                        "y_category": "Start without valve operation",
                        "values": pmp1_st_wval,
                        "color": "#EB757F"
                    },

                    {
                        "y_category": "Restart error",
                        "values": pmp1_rstrt_err,
                        "color": "#EB757F"
                    },
                    {
                        "y_category": "Stop error",
                        "values": pmp1_stp_err,
                        "color": "#EB757F"
                    },
                    {
                        "y_category": "Start without valve operation",
                        "values": pmp2_st_wval,
                        "color": "#FF931E"
                    },
                    {
                        "y_category": "Restart error",
                        "values": pmp2_rstrt_err,
                        "color": "#FF931E"
                    },
                    {
                        "y_category": "Stop error",
                        "values": pmp2_stp_err,
                        "color": "#FF931E"
                    },

                ];


                // AmCharts1.ready(function () {
                // SERIAL CHART
                chart = new AmCharts1.AmSerialChart();
                chart.dataProvider = chartData;
                chart.categoryField = "y_category";
                chart.startDuration = 1;
                chart.autoMargins = false;
                chart.marginRight = 10;
                chart.marginLeft = 5;
                chart.marginBottom = 30;
                chart.marginTop = 0;
                chart.fontSize = 11;
                chart.rotate = true;
                if(lx>1444)
                {
                    chart.columnWidth=0.8;
                }else
                {
                    chart.columnWidth=0.6;
                }

                // AXES
                // category
                var categoryAxis = chart.categoryAxis;
                categoryAxis.fontSize = 15;
                categoryAxis.inside = true;
                categoryAxis.gridAlpha = 0;
                // categoryAxis.axisAlpha = 0;
                // categoryAxis.tickLength = 0;
                // categoryAxis.labelRotation = 90;
                // categoryAxis.gridPosition = "start";


                var valueAxis = new AmCharts1.ValueAxis();
                valueAxis.minimum = 0;
                // valueAxis.axisAlpha = 0;
                // valueAxis.maximum = 70;
                valueAxis.dashLength = 5;
                chart.addValueAxis(valueAxis);


                // value
                // in case you don't want to change default settings of value axis,
                // you don't need to create it, as one value axis is created automatically.

                // GRAPH
                var graph = new AmCharts1.AmGraph();

                graph.valueField = "values";
                graph.balloonText = "[[category]]: <b>[[value]]</b>";
                graph.type = "column";

                graph.lineAlpha = 0;
                graph.fillAlphas = 0.8;
                graph.colorField = "color";
                chart.addGraph(graph);


                // CURSOR
                var chartCursor = new AmCharts1.ChartCursor();
                chartCursor.cursorAlpha = 0;
                chartCursor.zoomable = false;
                chartCursor.categoryBalloonEnabled = false;
                chart.addChartCursor(chartCursor);

                chart.creditsPosition = "top-right";

                chart.write("chartdiv");

                // });// if chart ready function


            }

            else if(data.message == '404'){


                chartData = [
                    {
                        "y_category": "Start without valve operation",
                        "values": pmp1_st_wval,
                        "color": "#EB757F"
                    },

                    {
                        "y_category": "Restart error",
                        "values": pmp1_rstrt_err,
                        "color": "#EB757F"
                    },
                    {
                        "y_category": "Stop error",
                        "values": pmp1_stp_err,
                        "color": "#EB757F"
                    },
                    {
                        "y_category": "Start without valve operation",
                        "values": pmp2_st_wval,
                        "color": "#FF931E"
                    },
                    {
                        "y_category": "Restart error",
                        "values": pmp2_rstrt_err,
                        "color": "#FF931E"
                    },
                    {
                        "y_category": "Stop error",
                        "values": pmp2_stp_err,
                        "color": "#FF931E"
                    },

                ];


                // AmCharts1.ready(function () {
                // SERIAL CHART
                chart = new AmCharts1.AmSerialChart();
                chart.dataProvider = chartData;
                chart.categoryField = "y_category";
                chart.startDuration = 1;
                chart.autoMargins = false;
                chart.marginRight = 10;
                chart.marginLeft = 5;
                chart.marginBottom = 30;
                chart.marginTop = 0;
                chart.rotate = true;

                // AXES
                // category
                var categoryAxis = chart.categoryAxis;
                categoryAxis.fontSize = 15;
                categoryAxis.inside = true;
                categoryAxis.gridAlpha = 0;
                // categoryAxis.axisAlpha = 0;
                // categoryAxis.tickLength = 0;
                // categoryAxis.labelRotation = 90;
                // categoryAxis.gridPosition = "start";


                var valueAxis = new AmCharts1.ValueAxis();
                valueAxis.minimum = 0;
                // valueAxis.axisAlpha = 0;
                // valueAxis.maximum = 70;
                valueAxis.dashLength = 5;
                chart.addValueAxis(valueAxis);


                // value
                // in case you don't want to change default settings of value axis,
                // you don't need to create it, as one value axis is created automatically.

                // GRAPH
                var graph = new AmCharts1.AmGraph();

                graph.valueField = "values";
                graph.balloonText = "[[category]]: <b>[[value]]</b>";
                graph.type = "column";
                graph.lineAlpha = 0;
                graph.fillAlphas = 0.8;
                graph.colorField = "color";
                chart.addGraph(graph);


                // CURSOR
                var chartCursor = new AmCharts1.ChartCursor();
                chartCursor.cursorAlpha = 0;
                chartCursor.zoomable = false;
                chartCursor.categoryBalloonEnabled = false;
                chart.addChartCursor(chartCursor);

                chart.write("chartdiv");

                // });// if chart ready function

                $(".alrt1").html('');
                $(".alrt1").append('Chart data not available in year '+year_val);
            }
            $('#loading').hide();
        }
    });//end of pump/:year data

}//end of chart plot function



function bindyear1()//generating dynamic drop down
{
    $('.dd1').empty();
    var dt=new Date();
    for(i=dt.getFullYear();i>=2010;i--)
    {
        $('.dd1').append('<option value='+i+'>'+i+'</option>');
    }
}



function bindyear2()//generating dynamic drop down
{
    $('.dd2').empty();

    $('#loading').show();

    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url:'/loss_drop/'+rig_id,
        success: function (data) {
            JSON.stringify(data);
            for(i=0;i<data.message.length;i++){
                $('.dd2').append('<option value='+data.message[i].loss_id+'>'+data.message[i].loss_name+'</option>');   /*Function Log Dropdown*/

            }

            $('#loading').hide();
        }
    });

}


function bindyear3()//generating dynamic drop down
{
//     $('.dd3').empty();
    var months=["","January","February","March","April","May","June","July","August","September","October","November","December"];
    for(i=1; i <13; i++)
    {
        $('.dd3').append('<option value='+i+'>'+months[i]+'</option>');
    }
}

function graph1_plot(rigid,year_val){

    $('#loading').show();

    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url:'/misyr/'+rig_id+'/'+year_val,
        success: function (data) {
            JSON.stringify(data);

            if(data.message != '404'){

                $(".alrt3").html('');

                arr_m = [];

                y = data.message.length;
//console.log(data.message);

                arr_mo = [0,0,0,0,0,0];
                arr_mo1 = [0,0,0,0,0,0];
                for(var i=0;i<y;i++){
                    if(data.message[i].loss_id==1){
                        arr_m[0] = data.message[i].tot_loss_value;

                        arr_mo1[0] = data.message[i].loss_name;
                    }
                    if(data.message[i].loss_id==2){
                        arr_m[1] = data.message[i].tot_loss_value;

                        arr_mo1[1] = data.message[i].loss_name;
                    }
                    if(data.message[i].loss_id==3){
                        arr_m[2] = data.message[i].tot_loss_value;

                        arr_mo1[2] = data.message[i].loss_name;
                    }
                    if(data.message[i].loss_id==4){
                        arr_m[3] = data.message[i].tot_loss_value;

                        arr_mo1[3] = data.message[i].loss_name;
                    }
                    if(data.message[i].loss_id==5){
                        arr_m[4] = data.message[i].tot_loss_value;

                        arr_mo1[4] = data.message[i].loss_name;
                    }
                    if(data.message[i].loss_id==6){
                        arr_m[5] = data.message[i].tot_loss_value;

                        arr_mo1[5] = data.message[i].loss_name;
                    }


                }




                y_mo = data.message1.length;

                var x1=0;

                for(var x=0; x < y_mo; x++){


                    if(data.message1[x].loss_id==1){

                        x1=data.message1[x].mth-1;

                        twelve_0[x1] = data.message1[x].tot_loss_value;

                    }
                    else if(data.message1[x].loss_id==2){
                        x1=data.message1[x].mth-1;
                        twelve_1[x1] = data.message1[x].tot_loss_value;
                    }
                    else if(data.message1[x].loss_id==3){
                        x1=data.message1[x].mth-1;
                        twelve_2[x1] = data.message1[x].tot_loss_value;
                    }
                    else if(data.message1[x].loss_id==4){
                        x1=data.message1[x].mth-1;
                        twelve_3[x1] = data.message1[x].tot_loss_value;
                    }
                    else if(data.message1[x].loss_id==5){
                        x1=data.message1[x].mth-1;
                        twelve_4[x1] = data.message1[x].tot_loss_value;
                    }
                    else if(data.message1[x].loss_id==6){
                        x1=data.message1[x].mth-1;
                        twelve_5[x1] = data.message1[x].tot_loss_value;
                    }



                }



                var chartData = [
                    {
                        "inside" : "Communication Loss",
                        "visits": arr_m[0],
                        "color" : "#33CDCE",
                        "catgr" : 0,
                        "months" : [
                            {
                                "month" : "JANUARY",
                                "visits": twelve_0[0],
                                "color" : "#33CDCE"
                            },

                            {
                                "month" : "FEBRUARY",
                                "visits": twelve_0[1],
                                "color" : "#33CDCE"
                            },
                            {
                                "month" : "MARCH",
                                "visits": twelve_0[2],
                                "color" : "#33CDCE"
                            },
                            {
                                "month" : "APRIL",
                                "visits": twelve_0[3],
                                "color" : "#33CDCE"
                            },
                            {
                                "month" : "MAY",
                                "visits": twelve_0[4],
                                "color" : "#33CDCE"
                            },
                            {
                                "month" : "JUNE",
                                "visits": twelve_0[5],
                                "color" : "#33CDCE"
                            },
                            {
                                "month" : "JULY",
                                "visits": twelve_0[6],
                                "color" : "#33CDCE"
                            },

                            {
                                "month" : "AUGUST",
                                "visits": twelve_0[7],
                                "color" : "#33CDCE"
                            },
                            {
                                "month" : "SEPTEMBER",
                                "visits": twelve_0[8],
                                "color" : "#33CDCE"
                            },
                            {
                                "month" : "OCTOBER",
                                "visits": twelve_0[9],
                                "color" : "#33CDCE"
                            },
                            {
                                "month" : "NOVEMBER",
                                "visits": twelve_0[10],
                                "color" : "#33CDCE"
                            },
                            {
                                "month" : "DECEMBER",
                                "visits": twelve_0[11],
                                "color" : "#33CDCE"
                            }

                        ]


                    },

                    {
                        "inside" : "Purge Loss",
                        "visits": arr_m[1],
                        "catgr" : 1,
                        "color" : "#7AB54A",
                        "months" :  [
                            {
                                "month" : "JANUARY",
                                "visits": twelve_1[0],
                                "color" : "#7AB54A"
                            },

                            {
                                "month" : "FEBRUARY",
                                "visits": twelve_1[1],
                                "color" : "#7AB54A"
                            },
                            {
                                "month" : "MARCH",
                                "visits": twelve_1[2],
                                "color" : "#7AB54A"
                            },
                            {
                                "month" : "APRIL",
                                "visits": twelve_1[3],
                                "color" : "#7AB54A"
                            },
                            {
                                "month" : "MAY",
                                "visits": twelve_1[4],
                                "color" : "#7AB54A"
                            },
                            {
                                "month" : "JUNE",
                                "visits": twelve_1[5],
                                "color" : "#7AB54A"
                            },
                            {
                                "month" : "JULY",
                                "visits": twelve_1[6],
                                "color" : "#7AB54A"
                            },

                            {
                                "month" : "AUGUST",
                                "visits": twelve_1[7],
                                "color" : "#7AB54A"
                            },
                            {
                                "month" : "SEPTEMBER",
                                "visits": twelve_5[8],
                                "color" : "#7AB54A"
                            },
                            {
                                "month" : "OCTOBER",
                                "visits": twelve_1[9],
                                "color" : "#7AB54A"
                            },
                            {
                                "month" : "NOVEMBER",
                                "visits": twelve_1[10],
                                "color" : "#7AB54A"
                            },
                            {
                                "month" : "DECEMBER",
                                "visits": twelve_1[11],
                                "color" : "#7AB54A"
                            }

                        ]
                    },
                    {
                        "inside" : "Mains Fail",
                        "visits": arr_m[2],
                        "catgr" : 2,
                        "color" : "#FBCA7E",
                        "months" :  [
                            {
                                "month" : "JANUARY",
                                "visits": twelve_2[0],
                                "color" : "#FBCA7E"
                            },

                            {
                                "month" : "FEBRUARY",
                                "visits": twelve_2[1],
                                "color" : "#FBCA7E"
                            },
                            {
                                "month" : "MARCH",
                                "visits": twelve_2[2],
                                "color" : "#FBCA7E"
                            },
                            {
                                "month" : "APRIL",
                                "visits": twelve_2[3],
                                "color" : "#FBCA7E"
                            },
                            {
                                "month" : "MAY",
                                "visits": twelve_2[4],
                                "color" : "#FBCA7E"
                            },
                            {
                                "month" : "JUNE",
                                "visits": twelve_2[5],
                                "color" : "#FBCA7E"
                            },
                            {
                                "month" : "JULY",
                                "visits": twelve_2[6],
                                "color" : "#FBCA7E"
                            },

                            {
                                "month" : "AUGUST",
                                "visits": twelve_2[7],
                                "color" : "#FBCA7E"
                            },
                            {
                                "month" : "SEPTEMBER",
                                "visits": twelve_2[8],
                                "color" : "#FBCA7E"
                            },
                            {
                                "month" : "OCTOBER",
                                "visits": twelve_2[9],
                                "color" : "#FBCA7E"
                            },
                            {
                                "month" : "NOVEMBER",
                                "visits": twelve_2[10],
                                "color" : "#FBCA7E"
                            },
                            {
                                "month" : "DECEMBER",
                                "visits": twelve_2[11],
                                "color" : "#FBCA7E"
                            }

                        ]
                    },
                    {
                        "inside" : "Low Hydraulic Level",
                        "visits": arr_m[3],
                        "catgr" : 3,
                        "color" : "#FBB03B",
                        "months" : [
                            {
                                "month" : "JANUARY",
                                "visits": twelve_3[0],
                                "color" : "#FBB03B"
                            },

                            {
                                "month" : "FEBRUARY",
                                "visits": twelve_3[1],
                                "color" : "#FBB03B"
                            },
                            {
                                "month" : "MARCH",
                                "visits": twelve_3[2],
                                "color" : "#FBB03B"
                            },
                            {
                                "month" : "APRIL",
                                "visits": twelve_3[3],
                                "color" : "#FBB03B"
                            },
                            {
                                "month" : "MAY",
                                "visits": twelve_3[4],
                                "color" : "#FBB03B"
                            },
                            {
                                "month" : "JUNE",
                                "visits": twelve_3[5],
                                "color" : "#FBB03B"
                            },
                            {
                                "month" : "JULY",
                                "visits": twelve_3[6],
                                "color" : "#FBB03B"
                            },

                            {
                                "month" : "AUGUST",
                                "visits": twelve_3[7],
                                "color" : "#FBB03B"
                            },
                            {
                                "month" : "SEPTEMBER",
                                "visits": twelve_3[8],
                                "color" : "#FBB03B"
                            },
                            {
                                "month" : "OCTOBER",
                                "visits": twelve_3[9],
                                "color" : "#FBB03B"
                            },
                            {
                                "month" : "NOVEMBER",
                                "visits": twelve_3[10],
                                "color" : "#FBB03B"
                            },
                            {
                                "month" : "DECEMBER",
                                "visits": twelve_3[11],
                                "color" : "#FBB03B"
                            }

                        ]
                    },
                    {
                        "inside" : "Low Accumulator Pressure",
                        "visits": arr_m[4],
                        "catgr" : 4,
                        "color" : "#C7B299",
                        "months" : [
                            {
                                "month" : "JANUARY",
                                "visits": twelve_4[0],
                                "color" : "#C7B299"
                            },

                            {
                                "month" : "FEBRUARY",
                                "visits": twelve_4[1],
                                "color" : "#C7B299"
                            },
                            {
                                "month" : "MARCH",
                                "visits": twelve_4[2],
                                "color" : "#C7B299"
                            },
                            {
                                "month" : "APRIL",
                                "visits": twelve_4[3],
                                "color" : "#C7B299"
                            },
                            {
                                "month" : "MAY",
                                "visits": twelve_4[4],
                                "color" : "#C7B299"
                            },
                            {
                                "month" : "JUNE",
                                "visits": twelve_4[5],
                                "color" : "#C7B299"
                            },
                            {
                                "month" : "JULY",
                                "visits": twelve_4[6],
                                "color" : "#C7B299"
                            },

                            {
                                "month" : "AUGUST",
                                "visits": twelve_4[7],
                                "color" : "#C7B299"
                            },
                            {
                                "month" : "SEPTEMBER",
                                "visits": twelve_4[8],
                                "color" : "#C7B299"
                            },
                            {
                                "month" : "OCTOBER",
                                "visits": twelve_4[9],
                                "color" : "#C7B299"
                            },
                            {
                                "month" : "NOVEMBER",
                                "visits": twelve_4[10],
                                "color" : "#C7B299"
                            },
                            {
                                "month" : "DECEMBER",
                                "visits": twelve_4[11],
                                "color" : "#C7B299"
                            }
                        ]
                    },
                    {
                        "inside" : "Low Rig Air",
                        "visits": arr_m[5],
                        "catgr" : 5,
                        "color" : "#3FA9F5",
                        "months" : [
                            {
                                "month" : "JANUARY",
                                "visits": twelve_5[0],
                                "color" : "#3FA9F5"
                            },

                            {
                                "month" : "FEBRUARY",
                                "visits": twelve_5[1],
                                "color" : "#3FA9F5"
                            },
                            {
                                "month" : "MARCH",
                                "visits": twelve_5[2],
                                "color" : "#3FA9F5"
                            },
                            {
                                "month" : "APRIL",
                                "visits": twelve_5[3],
                                "color" : "#3FA9F5"
                            },
                            {
                                "month" : "MAY",
                                "visits": twelve_5[4],
                                "color" : "#3FA9F5"
                            },
                            {
                                "month" : "JUNE",
                                "visits": twelve_5[5],
                                "color" : "#3FA9F5"
                            },
                            {
                                "month" : "JULY",
                                "visits": twelve_5[6],
                                "color" : "#3FA9F5"
                            },

                            {
                                "month" : "AUGUST",
                                "visits": twelve_5[7],
                                "color" : "#3FA9F5"
                            },
                            {
                                "month" : "SEPTEMBER",
                                "visits": twelve_5[8],
                                "color" : "#3FA9F5"
                            },
                            {
                                "month" : "OCTOBER",
                                "visits": twelve_5[9],
                                "color" : "#3FA9F5"
                            },
                            {
                                "month" : "NOVEMBER",
                                "visits": twelve_5[10],
                                "color" : "#3FA9F5"
                            },
                            {
                                "month" : "DECEMBER",
                                "visits": twelve_5[11],
                                "color" : "#3FA9F5"
                            }

                        ]
                    },

                ];


                // AmCharts.ready(function () {
                // SERIAL CHART
                chart = new AmCharts.AmSerialChart();
                chart.dataProvider = chartData;
                chart.categoryField = "inside";
                chart.startDuration = 1;
                chart.autoMargins = false;
                chart.marginRight = 0;
                chart.marginLeft = 50;
                chart.marginBottom = 5;
                chart.marginTop = 5;

                GraphDataItem = new AmCharts.GraphDataItem();
                GraphDataItem.color = "color";


                // AXES
                // category
                var categoryAxis = chart.categoryAxis;
                categoryAxis.labelRotation = 90;
                categoryAxis.fontSize = 15;
                categoryAxis.gridAlpha = 0;
                // categoryAxis.gridPosition = "start";
                categoryAxis.inside = true;

                var valueAxis = new AmCharts.ValueAxis();
                valueAxis.minimum = 0;
                // valueAxis.axisAlpha = 0;
                // valueAxis.maximum = 70;
                valueAxis.dashLength = 5;
                chart.addValueAxis(valueAxis);

                // GRAPH
                var graph = new AmCharts.AmGraph();
                graph.valueField = "visits";
                graph.colorField = "color";
                graph.balloonText = "[[category]]: <b>[[value]]</b>";
                graph.type = "column";
                graph.lineAlpha = 0;
                graph.fillAlphas = 0.8;
                graph.showHandOnHover = true;
                chart.addGraph(graph);

                // CURSOR
                var chartCursor = new AmCharts.ChartCursor();
                chartCursor.cursorAlpha = 0;
                chartCursor.zoomable = false;
                chartCursor.categoryBalloonEnabled = false;
                chart.addChartCursor(chartCursor);

                chart.write("graph1");
                // });



//graph 2 plotting data
                var selectedDataPoint;
                var chart2;

                chart.addListener("clickGraphItem", function (event) {

                    // alert(chartData.length);

                    for(i=0;i<chartData.length;i++)
                    {
                        if(event.item.dataContext.catgr==0)
                        {
                            fus_chart_plot(rig_id,1,$('.dd1').val(),$('.dd3').val());
                            $('.dd2').val(1);

                        }
                        else if(event.item.dataContext.catgr==1)
                        {
                            fus_chart_plot(rig_id,2,$('.dd1').val(),$('.dd3').val());
                            $('.dd2').val(2);

                        }
                        else if(event.item.dataContext.catgr==2)
                        {
                            fus_chart_plot(rig_id,3,$('.dd1').val(),$('.dd3').val());
                            $('.dd2').val(3);

                        }
                        else if(event.item.dataContext.catgr==3)
                        {
                            fus_chart_plot(rig_id,4,$('.dd1').val(),$('.dd3').val());
                            $('.dd2').val(4);

                        }
                        else if(event.item.dataContext.catgr==4)
                        {
                            fus_chart_plot(rig_id,5,$('.dd1').val(),$('.dd3').val());
                            $('.dd2').val(5);

                        }
                        else if(event.item.dataContext.catgr==5)
                        {
                            fus_chart_plot(rig_id,6,$('.dd1').val(),$('.dd3').val());
                            $('.dd2').val(6);

                        }

                    }


                    chart2 = new AmCharts.AmSerialChart();
                    chart2.dataProvider = chartData.months;
                    chart2.categoryField = "month";
                    chart2.startDuration = 1;
                    chart2.autoMargins = false;
                    chart2.marginRight = 0;
                    chart2.marginLeft = 79;
                    chart2.marginBottom = 0;
                    chart2.marginTop = 0;
                    chart2.rotate = true;


                    // AXES
                    // category
                    var categoryAxis = chart2.categoryAxis;
                    categoryAxis.labelRotation = 90;
                    categoryAxis.fontSize = 11;
                    categoryAxis.dashLength = 5;
                    // categoryAxis.gridAlpha = 0;
                    // categoryAxis.gridPosition = "start";
                    // categoryAxis.inside = true;

                    var valueAxis = new AmCharts.ValueAxis();
                    valueAxis.minimum = 0;
                    valueAxis.gridAlpha = 0;
                    // valueAxis.axisAlpha = 0;
                    // valueAxis.maximum = 70;

                    chart2.addValueAxis(valueAxis);

                    // GRAPH
                    var graph = new AmCharts.AmGraph();
                    graph.valueField = "visits";
                    graph.colorField = "color";
                    graph.labelText = "[[value]]";
                    graph.labelPosition = "bottom";
                    graph.balloonText = "[[category]]: <b>[[value]]</b>";
                    graph.type = "column";
                    graph.lineAlpha = 0;
                    graph.fillAlphas = 0.8;
                    chart2.addGraph(graph);

                    // CURSOR
                    var chartCursor = new AmCharts.ChartCursor();
                    chartCursor.cursorAlpha = 0;
                    chartCursor.zoomable = false;
                    chartCursor.categoryBalloonEnabled = false;
                    chart2.addChartCursor(chartCursor);

                    chart2.write("graph2");

                    chart2.addListener("clickGraphItem", function (event) {

                        /*   for(i=0;i<chartData.months.length;i++)
                         {
                         if(event.item.dataContext.months[i].month=="JANUARY")
                         {
                         alert('gooo');
                         }
                         }*/
//                    alert(chartData.months.length);

//                    alert(event.item.dataContext.months.month);

                    });
                    // $(".dd2 option").each(function() {
                    //   if($(this).text() == theText) {
                    //     $('.dd2').attr('selected', 'selected');
                    //   }
                    // });

                    if ( 'object' === typeof event.item.dataContext.months ) {

                        // set the monthly data for the clicked error
                        chart2.dataProvider = event.item.dataContext.months;

                        // validate the new data and make the chart animate again

                        chart2.validateData();
                        chart2.animateAgain();
                    }

                });//end of click event listener

            }//end of if

            else if(data.message == '404'){

                arr_m=[0,0,0,0,0,0];

                var chartData = [
                    {
                        "inside" : "Communication Loss",
                        "visits": arr_m[4],
                        "color" : "#33CDCE"
                    },

                    {
                        "inside" : "Purge Loss",
                        "visits": arr_m[5],
                        "color" : "#7AB54A"
                    },
                    {
                        "inside" : "Mains Fail",
                        "visits": arr_m[3],
                        "color" : "#FBCA7E"
                    },
                    {
                        "inside" : "Low Hydraulic Level",
                        "visits": arr_m[1],
                        "color" : "#FBB03B"
                    },
                    {
                        "inside" : "Low Accumulator Pressure",
                        "visits": arr_m[0],
                        "color" : "#C7B299"
                    },
                    {
                        "inside" : "Low Rig Air",
                        "visits": arr_m[2],
                        "color" : "#3FA9F5"
                    },

                ];


                // AmCharts.ready(function () {
                // SERIAL CHART
                chart = new AmCharts.AmSerialChart();
                chart.dataProvider = chartData;
                chart.categoryField = "inside";
                chart.startDuration = 1;
                chart.autoMargins = false;
                chart.marginRight = 0;
                chart.marginLeft = 50;
                chart.marginBottom = 5;
                chart.marginTop = 5;

                // AXES
                // category
                var categoryAxis = chart.categoryAxis;
                categoryAxis.labelRotation = 90;
                categoryAxis.fontSize = 15;
                categoryAxis.gridAlpha = 0;
                // categoryAxis.gridPosition = "start";
                categoryAxis.inside = true;

                var valueAxis = new AmCharts.ValueAxis();
                valueAxis.minimum = 0;
                // valueAxis.axisAlpha = 0;
                // valueAxis.maximum = 70;
                valueAxis.dashLength = 5;
                chart.addValueAxis(valueAxis);

                // GRAPH
                var graph = new AmCharts.AmGraph();
                graph.valueField = "visits";
                graph.colorField = "color";
                graph.balloonText = "[[category]]: <b>[[value]]</b>";
                graph.type = "column";
                graph.lineAlpha = 0;
                graph.fillAlphas = 0.8;
                chart.addGraph(graph);

                // CURSOR
                var chartCursor = new AmCharts.ChartCursor();
                chartCursor.cursorAlpha = 0;
                chartCursor.zoomable = false;
                chartCursor.categoryBalloonEnabled = false;
                chart.addChartCursor(chartCursor);

                chart.creditsPosition = "top-right";

                chart.write("graph1");

                $(".alrt3").html('');
                $(".alrt3").append('Chart data not available in year '+n);

            }//end of else


            $('#loading').hide();
        }
    });//end of misyr/:year data

}//end of graph1_plot function


function graph2_plot(rigid,year_val,n2){

    var loss = ["Communication Loss","Purge Loss","Mains Fail","Low Hydraulic Level","Low Accumulator Pressure","Low Rig Air"];
    // var twelve = [0,0,0,0,0,0,0,0,0,0,0,0];
    // var arry = [],arrx = [];
    // var xlen;

    $('#loading').show();

    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url:'/misyr/'+rig_id+'/'+year_val,
        success: function (data) {
            JSON.stringify(data);


            if(data.message != '404'){

                // $(".alrt4").html('');

                $(".alrt3").html('');

                arr_m = [];

                y = data.message.length;


                arr_mo = [];
                arr_mo1 = [];
                for(var i=0;i<y;i++){

                    arr_m[i] = data.message[i].tot_loss_value;

                    arr_mo1[i] = data.message[i].loss_name;
                }

                y_mo = data.message1.length;

                var x1=0;
                twelve=[0,0,0,0,0,0,0,0,0,0,0,0];
                for(var i=0; i < y_mo; i++){



                    if(data.message1[i].loss_id==5 && $('.dd2').val()==5){
                        x1=data.message1[i].mth-1
                        twelve[x1] = data.message1[i].tot_loss_value;

                        var chartData = [
                            {
                                "month" : "JANUARY",
                                "visits": twelve[0],
                                "color" : "#C7B299"
                            },

                            {
                                "month" : "FEBRUARY",
                                "visits": twelve[1],
                                "color" : "#C7B299"
                            },
                            {
                                "month" : "MARCH",
                                "visits": twelve[2],
                                "color" : "#C7B299"
                            },
                            {
                                "month" : "APRIL",
                                "visits": twelve[3],
                                "color" : "#C7B299"
                            },
                            {
                                "month" : "MAY",
                                "visits": twelve[4],
                                "color" : "#C7B299"
                            },
                            {
                                "month" : "JUNE",
                                "visits": twelve[5],
                                "color" : "#C7B299"
                            },
                            {
                                "month" : "JULY",
                                "visits": twelve[6],
                                "color" : "#C7B299"
                            },

                            {
                                "month" : "AUGUST",
                                "visits": twelve[7],
                                "color" : "#C7B299"
                            },
                            {
                                "month" : "SEPTEMBER",
                                "visits": twelve[8],
                                "color" : "#C7B299"
                            },
                            {
                                "month" : "OCTOBER",
                                "visits": twelve[9],
                                "color" : "#C7B299"
                            },
                            {
                                "month" : "NOVEMBER",
                                "visits": twelve[10],
                                "color" : "#C7B299"
                            },
                            {
                                "month" : "DECEMBER",
                                "visits": twelve[11],
                                "color" : "#C7B299"
                            }

                        ];
                        // break;

                    }//low accumulator pr
                    if(data.message1[i].loss_id==4 && $('.dd2').val()==4){
                        x1=data.message1[i].mth-1;
                        twelve[x1] = data.message1[i].tot_loss_value;
                        var chartData = [
                            {
                                "month" : "JANUARY",
                                "visits": twelve[0],
                                "color" : "#FBB03B"
                            },

                            {
                                "month" : "FEBRUARY",
                                "visits": twelve[1],
                                "color" : "#FBB03B"
                            },
                            {
                                "month" : "MARCH",
                                "visits": twelve[2],
                                "color" : "#FBB03B"
                            },
                            {
                                "month" : "APRIL",
                                "visits": twelve[3],
                                "color" : "#FBB03B"
                            },
                            {
                                "month" : "MAY",
                                "visits": twelve[4],
                                "color" : "#FBB03B"
                            },
                            {
                                "month" : "JUNE",
                                "visits": twelve[5],
                                "color" : "#FBB03B"
                            },
                            {
                                "month" : "JULY",
                                "visits": twelve[6],
                                "color" : "#FBB03B"
                            },

                            {
                                "month" : "AUGUST",
                                "visits": twelve[7],
                                "color" : "#FBB03B"
                            },
                            {
                                "month" : "SEPTEMBER",
                                "visits": twelve[8],
                                "color" : "#FBB03B"
                            },
                            {
                                "month" : "OCTOBER",
                                "visits": twelve[9],
                                "color" : "#FBB03B"
                            },
                            {
                                "month" : "NOVEMBER",
                                "visits": twelve[10],
                                "color" : "#FBB03B"
                            },
                            {
                                "month" : "DECEMBER",
                                "visits": twelve[11],
                                "color" : "#FBB03B"
                            }

                        ];
                        // break;

                    }//low hydraulic level
                    if(data.message1[i].loss_id==6 && $('.dd2').val()==6){
                        x1=data.message1[i].mth-1;
                        twelve[x1] = data.message1[i].tot_loss_value;
                        var chartData = [
                            {
                                "month" : "JANUARY",
                                "visits": twelve[0],
                                "color" : "#3FA9F5"
                            },

                            {
                                "month" : "FEBRUARY",
                                "visits": twelve[1],
                                "color" : "#3FA9F5"
                            },
                            {
                                "month" : "MARCH",
                                "visits": twelve[2],
                                "color" : "#3FA9F5"
                            },
                            {
                                "month" : "APRIL",
                                "visits": twelve[3],
                                "color" : "#3FA9F5"
                            },
                            {
                                "month" : "MAY",
                                "visits": twelve[4],
                                "color" : "#3FA9F5"
                            },
                            {
                                "month" : "JUNE",
                                "visits": twelve[5],
                                "color" : "#3FA9F5"
                            },
                            {
                                "month" : "JULY",
                                "visits": twelve[6],
                                "color" : "#3FA9F5"
                            },

                            {
                                "month" : "AUGUST",
                                "visits": twelve[7],
                                "color" : "#3FA9F5"
                            },
                            {
                                "month" : "SEPTEMBER",
                                "visits": twelve[8],
                                "color" : "#3FA9F5"
                            },
                            {
                                "month" : "OCTOBER",
                                "visits": twelve[9],
                                "color" : "#3FA9F5"
                            },
                            {
                                "month" : "NOVEMBER",
                                "visits": twelve[10],
                                "color" : "#3FA9F5"
                            },
                            {
                                "month" : "DECEMBER",
                                "visits": twelve[11],
                                "color" : "#3FA9F5"
                            }

                        ];
                        // break;

                    }//low rig air
                    if(data.message1[i].loss_id==3 &&  $('.dd2').val()==3){
                        x1=data.message1[i].mth-1
                        twelve[x1] = data.message1[i].tot_loss_value;

                        var chartData = [
                            {
                                "month" : "JANUARY",
                                "visits": twelve[0],
                                "color" : "#FBCA7E"
                            },

                            {
                                "month" : "FEBRUARY",
                                "visits": twelve[1],
                                "color" : "#FBCA7E"
                            },
                            {
                                "month" : "MARCH",
                                "visits": twelve[2],
                                "color" : "#FBCA7E"
                            },
                            {
                                "month" : "APRIL",
                                "visits": twelve[3],
                                "color" : "#FBCA7E"
                            },
                            {
                                "month" : "MAY",
                                "visits": twelve[4],
                                "color" : "#FBCA7E"
                            },
                            {
                                "month" : "JUNE",
                                "visits": twelve[5],
                                "color" : "#FBCA7E"
                            },
                            {
                                "month" : "JULY",
                                "visits": twelve[6],
                                "color" : "#FBCA7E"
                            },

                            {
                                "month" : "AUGUST",
                                "visits": twelve[7],
                                "color" : "#FBCA7E"
                            },
                            {
                                "month" : "SEPTEMBER",
                                "visits": twelve[8],
                                "color" : "#FBCA7E"
                            },
                            {
                                "month" : "OCTOBER",
                                "visits": twelve[9],
                                "color" : "#FBCA7E"
                            },
                            {
                                "month" : "NOVEMBER",
                                "visits": twelve[10],
                                "color" : "#FBCA7E"
                            },
                            {
                                "month" : "DECEMBER",
                                "visits": twelve[11],
                                "color" : "#FBCA7E"
                            }

                        ];
                        // break;

                    }//mains fail
                    if(data.message1[i].loss_id==1 &&  $('.dd2').val()==1){
                        x1=data.message1[i].mth-1;
                        twelve[x1] = data.message1[i].tot_loss_value;

                        var chartData = [
                            {
                                "month" : "JANUARY",
                                "visits": twelve[0],
                                "color" : "#33CDCE"
                            },

                            {
                                "month" : "FEBRUARY",
                                "visits": twelve[1],
                                "color" : "#33CDCE"
                            },
                            {
                                "month" : "MARCH",
                                "visits": twelve[2],
                                "color" : "#33CDCE"
                            },
                            {
                                "month" : "APRIL",
                                "visits": twelve[3],
                                "color" : "#33CDCE"
                            },
                            {
                                "month" : "MAY",
                                "visits": twelve[4],
                                "color" : "#33CDCE"
                            },
                            {
                                "month" : "JUNE",
                                "visits": twelve[5],
                                "color" : "#33CDCE"
                            },
                            {
                                "month" : "JULY",
                                "visits": twelve[6],
                                "color" : "#33CDCE"
                            },

                            {
                                "month" : "AUGUST",
                                "visits": twelve[7],
                                "color" : "#33CDCE"
                            },
                            {
                                "month" : "SEPTEMBER",
                                "visits": twelve[8],
                                "color" : "#33CDCE"
                            },
                            {
                                "month" : "OCTOBER",
                                "visits": twelve[9],
                                "color" : "#33CDCE"
                            },
                            {
                                "month" : "NOVEMBER",
                                "visits": twelve[10],
                                "color" : "#33CDCE"
                            },
                            {
                                "month" : "DECEMBER",
                                "visits": twelve[11],
                                "color" : "#33CDCE"
                            }

                        ];
                        // break;


                    }//comm loss

                    if(data.message1[i].loss_id==2 &&  $('.dd2').val()==2){
                        x1=data.message1[i].mth-1;
                        twelve[x1] = data.message1[i].tot_loss_value;

                        var chartData = [
                            {
                                "month" : "JANUARY",
                                "visits": twelve[0],
                                "color" : "#7AB54A"
                            },

                            {
                                "month" : "FEBRUARY",
                                "visits": twelve[1],
                                "color" : "#7AB54A"
                            },
                            {
                                "month" : "MARCH",
                                "visits": twelve[2],
                                "color" : "#7AB54A"
                            },
                            {
                                "month" : "APRIL",
                                "visits": twelve[3],
                                "color" : "#7AB54A"
                            },
                            {
                                "month" : "MAY",
                                "visits": twelve[4],
                                "color" : "#7AB54A"
                            },
                            {
                                "month" : "JUNE",
                                "visits": twelve[5],
                                "color" : "#7AB54A"
                            },
                            {
                                "month" : "JULY",
                                "visits": twelve[6],
                                "color" : "#7AB54A"
                            },

                            {
                                "month" : "AUGUST",
                                "visits": twelve[7],
                                "color" : "#7AB54A"
                            },
                            {
                                "month" : "SEPTEMBER",
                                "visits": twelve[8],
                                "color" : "#7AB54A"
                            },
                            {
                                "month" : "OCTOBER",
                                "visits": twelve[9],
                                "color" : "#7AB54A"
                            },
                            {
                                "month" : "NOVEMBER",
                                "visits": twelve[10],
                                "color" : "#7AB54A"
                            },
                            {
                                "month" : "DECEMBER",
                                "visits": twelve[11],
                                "color" : "#7AB54A"
                            }

                        ];
                        // break;

                    }//purge loss



                }


                // AmCharts.ready(function () {
                // SERIAL CHART
                chart = new AmCharts.AmSerialChart();
                chart.dataProvider = chartData;
                chart.categoryField = "month";
                chart.startDuration = 1;
                chart.autoMargins = false;
                chart.marginRight = 0;
                chart.marginLeft = 79;
                chart.marginBottom = 0;
                chart.marginTop = 0;
                chart.rotate = true;


                // AXES
                // category
                var categoryAxis = chart.categoryAxis;
                categoryAxis.labelRotation = 90;
                categoryAxis.fontSize = 11;
                categoryAxis.dashLength = 5;
                // categoryAxis.gridAlpha = 0;
                // categoryAxis.gridPosition = "start";
                // categoryAxis.inside = true;

                var valueAxis = new AmCharts.ValueAxis();
                valueAxis.minimum = 0;
                valueAxis.gridAlpha = 0;
                // valueAxis.axisAlpha = 0;
                // valueAxis.maximum = 70;

                chart.addValueAxis(valueAxis);

                // GRAPH
                var graph = new AmCharts.AmGraph();
                graph.valueField = "visits";
                graph.colorField = "color";
                graph.labelText = "[[value]]";
                graph.labelPosition = "bottom";
                graph.balloonText = "[[category]]: <b>[[value]]</b>";
                graph.type = "column";
                graph.lineAlpha = 0;
                graph.fillAlphas = 0.8;
                chart.addGraph(graph);

                // CURSOR
                var chartCursor = new AmCharts.ChartCursor();
                chartCursor.cursorAlpha = 0;
                chartCursor.zoomable = false;
                chartCursor.categoryBalloonEnabled = false;
                chart.addChartCursor(chartCursor);

                chart.write("graph2");
                // });

            }//end of if

            else if(data.message == '404'){

                twelve=[0,0,0,0,0,0,0,0,0,0,0,0];

                if(n2=="Low Accumulator Pressure"){

                    // twelve[x1] = arrx[x1];

                    var chartData = [
                        {
                            "month" : "JANUARY",
                            "visits": twelve[0],
                            "color" : "#C7B299"
                        },

                        {
                            "month" : "FEBRUARY",
                            "visits": twelve[1],
                            "color" : "#C7B299"
                        },
                        {
                            "month" : "MARCH",
                            "visits": twelve[2],
                            "color" : "#C7B299"
                        },
                        {
                            "month" : "APRIL",
                            "visits": twelve[3],
                            "color" : "#C7B299"
                        },
                        {
                            "month" : "MAY",
                            "visits": twelve[4],
                            "color" : "#C7B299"
                        },
                        {
                            "month" : "JUNE",
                            "visits": twelve[5],
                            "color" : "#C7B299"
                        },
                        {
                            "month" : "JULY",
                            "visits": twelve[6],
                            "color" : "#C7B299"
                        },

                        {
                            "month" : "AUGUST",
                            "visits": twelve[7],
                            "color" : "#C7B299"
                        },
                        {
                            "month" : "SEPTEMBER",
                            "visits": twelve[8],
                            "color" : "#C7B299"
                        },
                        {
                            "month" : "OCTOBER",
                            "visits": twelve[9],
                            "color" : "#C7B299"
                        },
                        {
                            "month" : "NOVEMBER",
                            "visits": twelve[10],
                            "color" : "#C7B299"
                        },
                        {
                            "month" : "DECEMBER",
                            "visits": twelve[11],
                            "color" : "#C7B299"
                        }

                    ];
                    // break;

                }//low accumulator pr
                if(n2=="Low Hydraulic Level"){

                    // twelve[x1] = arrx[x1];
                    var chartData = [
                        {
                            "month" : "JANUARY",
                            "visits": twelve[0],
                            "color" : "#FBB03B"
                        },

                        {
                            "month" : "FEBRUARY",
                            "visits": twelve[1],
                            "color" : "#FBB03B"
                        },
                        {
                            "month" : "MARCH",
                            "visits": twelve[2],
                            "color" : "#FBB03B"
                        },
                        {
                            "month" : "APRIL",
                            "visits": twelve[3],
                            "color" : "#FBB03B"
                        },
                        {
                            "month" : "MAY",
                            "visits": twelve[4],
                            "color" : "#FBB03B"
                        },
                        {
                            "month" : "JUNE",
                            "visits": twelve[5],
                            "color" : "#FBB03B"
                        },
                        {
                            "month" : "JULY",
                            "visits": twelve[6],
                            "color" : "#FBB03B"
                        },

                        {
                            "month" : "AUGUST",
                            "visits": twelve[7],
                            "color" : "#FBB03B"
                        },
                        {
                            "month" : "SEPTEMBER",
                            "visits": twelve[8],
                            "color" : "#FBB03B"
                        },
                        {
                            "month" : "OCTOBER",
                            "visits": twelve[9],
                            "color" : "#FBB03B"
                        },
                        {
                            "month" : "NOVEMBER",
                            "visits": twelve[10],
                            "color" : "#FBB03B"
                        },
                        {
                            "month" : "DECEMBER",
                            "visits": twelve[11],
                            "color" : "#FBB03B"
                        }

                    ];
                    // break;

                }//low hydraulic level
                if(n2=="Low Rig Air"){

                    // twelve[x1] = arrx[x1];
                    var chartData = [
                        {
                            "month" : "JANUARY",
                            "visits": twelve[0],
                            "color" : "#3FA9F5"
                        },

                        {
                            "month" : "FEBRUARY",
                            "visits": twelve[1],
                            "color" : "#3FA9F5"
                        },
                        {
                            "month" : "MARCH",
                            "visits": twelve[2],
                            "color" : "#3FA9F5"
                        },
                        {
                            "month" : "APRIL",
                            "visits": twelve[3],
                            "color" : "#3FA9F5"
                        },
                        {
                            "month" : "MAY",
                            "visits": twelve[4],
                            "color" : "#3FA9F5"
                        },
                        {
                            "month" : "JUNE",
                            "visits": twelve[5],
                            "color" : "#3FA9F5"
                        },
                        {
                            "month" : "JULY",
                            "visits": twelve[6],
                            "color" : "#3FA9F5"
                        },

                        {
                            "month" : "AUGUST",
                            "visits": twelve[7],
                            "color" : "#3FA9F5"
                        },
                        {
                            "month" : "SEPTEMBER",
                            "visits": twelve[8],
                            "color" : "#3FA9F5"
                        },
                        {
                            "month" : "OCTOBER",
                            "visits": twelve[9],
                            "color" : "#3FA9F5"
                        },
                        {
                            "month" : "NOVEMBER",
                            "visits": twelve[10],
                            "color" : "#3FA9F5"
                        },
                        {
                            "month" : "DECEMBER",
                            "visits": twelve[11],
                            "color" : "#3FA9F5"
                        }

                    ];
                    // break;

                }//low rig air
                if(n2=="Mains Fail"){

                    // twelve[x1] = arrx[x1];

                    var chartData = [
                        {
                            "month" : "JANUARY",
                            "visits": twelve[0],
                            "color" : "#FBCA7E"
                        },

                        {
                            "month" : "FEBRUARY",
                            "visits": twelve[1],
                            "color" : "#FBCA7E"
                        },
                        {
                            "month" : "MARCH",
                            "visits": twelve[2],
                            "color" : "#FBCA7E"
                        },
                        {
                            "month" : "APRIL",
                            "visits": twelve[3],
                            "color" : "#FBCA7E"
                        },
                        {
                            "month" : "MAY",
                            "visits": twelve[4],
                            "color" : "#FBCA7E"
                        },
                        {
                            "month" : "JUNE",
                            "visits": twelve[5],
                            "color" : "#FBCA7E"
                        },
                        {
                            "month" : "JULY",
                            "visits": twelve[6],
                            "color" : "#FBCA7E"
                        },

                        {
                            "month" : "AUGUST",
                            "visits": twelve[7],
                            "color" : "#FBCA7E"
                        },
                        {
                            "month" : "SEPTEMBER",
                            "visits": twelve[8],
                            "color" : "#FBCA7E"
                        },
                        {
                            "month" : "OCTOBER",
                            "visits": twelve[9],
                            "color" : "#FBCA7E"
                        },
                        {
                            "month" : "NOVEMBER",
                            "visits": twelve[10],
                            "color" : "#FBCA7E"
                        },
                        {
                            "month" : "DECEMBER",
                            "visits": twelve[11],
                            "color" : "#FBCA7E"
                        }

                    ];
                    // break;

                }//mains fail
                if(n2=="Communication Loss"){

                    // twelve[x1] = arrx[x1];

                    var chartData = [
                        {
                            "month" : "JANUARY",
                            "visits": twelve[0],
                            "color" : "#33CDCE"
                        },

                        {
                            "month" : "FEBRUARY",
                            "visits": twelve[1],
                            "color" : "#33CDCE"
                        },
                        {
                            "month" : "MARCH",
                            "visits": twelve[2],
                            "color" : "#33CDCE"
                        },
                        {
                            "month" : "APRIL",
                            "visits": twelve[3],
                            "color" : "#33CDCE"
                        },
                        {
                            "month" : "MAY",
                            "visits": twelve[4],
                            "color" : "#33CDCE"
                        },
                        {
                            "month" : "JUNE",
                            "visits": twelve[5],
                            "color" : "#33CDCE"
                        },
                        {
                            "month" : "JULY",
                            "visits": twelve[6],
                            "color" : "#33CDCE"
                        },

                        {
                            "month" : "AUGUST",
                            "visits": twelve[7],
                            "color" : "#33CDCE"
                        },
                        {
                            "month" : "SEPTEMBER",
                            "visits": twelve[8],
                            "color" : "#33CDCE"
                        },
                        {
                            "month" : "OCTOBER",
                            "visits": twelve[9],
                            "color" : "#33CDCE"
                        },
                        {
                            "month" : "NOVEMBER",
                            "visits": twelve[10],
                            "color" : "#33CDCE"
                        },
                        {
                            "month" : "DECEMBER",
                            "visits": twelve[11],
                            "color" : "#33CDCE"
                        }

                    ];
                    // break;


                }//comm loss

                if(n2=="Purge Loss"){

                    // twelve[x1] = arrx[x1];

                    var chartData = [
                        {
                            "month" : "JANUARY",
                            "visits": twelve[0],
                            "color" : "#7AB54A"
                        },

                        {
                            "month" : "FEBRUARY",
                            "visits": twelve[1],
                            "color" : "#7AB54A"
                        },
                        {
                            "month" : "MARCH",
                            "visits": twelve[2],
                            "color" : "#7AB54A"
                        },
                        {
                            "month" : "APRIL",
                            "visits": twelve[3],
                            "color" : "#7AB54A"
                        },
                        {
                            "month" : "MAY",
                            "visits": twelve[4],
                            "color" : "#7AB54A"
                        },
                        {
                            "month" : "JUNE",
                            "visits": twelve[5],
                            "color" : "#7AB54A"
                        },
                        {
                            "month" : "JULY",
                            "visits": twelve[6],
                            "color" : "#7AB54A"
                        },

                        {
                            "month" : "AUGUST",
                            "visits": twelve[7],
                            "color" : "#7AB54A"
                        },
                        {
                            "month" : "SEPTEMBER",
                            "visits": twelve[8],
                            "color" : "#7AB54A"
                        },
                        {
                            "month" : "OCTOBER",
                            "visits": twelve[9],
                            "color" : "#7AB54A"
                        },
                        {
                            "month" : "NOVEMBER",
                            "visits": twelve[10],
                            "color" : "#7AB54A"
                        },
                        {
                            "month" : "DECEMBER",
                            "visits": twelve[11],
                            "color" : "#7AB54A"
                        }

                    ];
                    // break;


                }//purge loss

                // AmCharts.ready(function () {
                // SERIAL CHART
                chart = new AmCharts.AmSerialChart();
                chart.dataProvider = chartData;
                chart.categoryField = "month";
                chart.startDuration = 1;
                chart.autoMargins = false;
                chart.marginRight = 0;
                chart.marginLeft = 79;
                chart.marginBottom = 0;
                chart.marginTop = 0;
                chart.rotate = true;

                // AXES
                // category
                var categoryAxis = chart.categoryAxis;
                categoryAxis.labelRotation = 90;
                categoryAxis.fontSize = 10;
                categoryAxis.dashLength = 5;
                // categoryAxis.gridAlpha = 0;
                // categoryAxis.gridPosition = "start";
                // categoryAxis.inside = true;

                var valueAxis = new AmCharts.ValueAxis();
                valueAxis.minimum = 0;
                valueAxis.gridAlpha = 0;
                // valueAxis.axisAlpha = 0;
                // valueAxis.maximum = 70;

                chart.addValueAxis(valueAxis);

                // GRAPH
                var graph = new AmCharts.AmGraph();
                graph.valueField = "visits";
                graph.colorField = "color";
                graph.labelText = "[[value]]";
                graph.labelPosition = "bottom";
                graph.balloonText = "[[category]]: <b>[[value]]</b>";
                graph.type = "column";
                graph.lineAlpha = 0;
                graph.fillAlphas = 0.8;
                chart.addGraph(graph);

                // CURSOR
                var chartCursor = new AmCharts.ChartCursor();
                chartCursor.cursorAlpha = 0;
                chartCursor.zoomable = false;
                chartCursor.categoryBalloonEnabled = false;
                chart.addChartCursor(chartCursor);

                chart.write("graph2");
                // });
                //  $(".alrt4").html('');
                // $(".alrt4").append('No Data for '+n2);


            }//end of if else


            $('#loading').hide();
        }

    });// end of data

}//end of graph2_plot function




function bindyear4()//generating dynamic drop down
{
    $('.ddpie').empty();
    var dt=new Date();
    for(i=dt.getFullYear();i>=2010;i--)
    {
        $('.ddpie').append('<option value='+i+'>'+i+'</option>');
    }
}


function table_pie(rigid,year_val){

    var arr_py='';
    var k=0;
    var arr_p=[];
    var count1=0;

    var ctrl= 0,srno= 0,cal=0;

    $('#loading').show();

    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url:'/slog/'+rigid+'/'+year_val,
        success: function (data) {
            JSON.stringify(data);

            $("#pie_data").html('');
            for (i = 0; i < data.message.length; i++) {
                ctrl++;
                var dt= new Date(data.message[i].start_date_time);
                var dt1= new Date(data.message[i].end_date_time);

                srno++;
                $("#pie_data").append("<tr><td class='td1'>" +srno + "</td><td class='td2'>" + data.message[i].reason+ "</td><td class='td3'>" + dt.toString("dd/MM/yyyy") + "&nbsp;&nbsp;&nbsp;&nbsp;" + dt.toString("hh:mm tt")+ "</td><td class='td4'>" + dt1.toString("dd/MM/yyyy") + "&nbsp;&nbsp;&nbsp;&nbsp;" + dt1.toString("hh:mm tt")+ "</td></tr>");

            }
            if(ctrl>19)
            {
                cal=19-(ctrl);
            }

            if(ctrl==1)
            {
                cal=20-(ctrl);
            }
            else
            {
                cal=19-(ctrl);
            }
            if(cal>0)
            {
                for(j=0;j<cal;j++)
                {
                    $("#pie_data").append("<tr style='height: 30px;'><td class='td1'></td><td class='td2'></td><td class='td3'></td><td class='td4'></td></tr>");

                }
            }
            table_adjust();

            $('#loading').hide();
        }

    });

}




function pie_plot(rigid,year_val){

    lx = $(window).width(); var rig_maintain; var rig_move; var rig_other;

    $('#loading').show();

    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url:'/slog_chart/'+rigid+'/'+year_val,
        success: function (data) {
            JSON.stringify(data);

            //alert(data.message.length);
            for(i=0; i < data.message[0].length; i++)
            {
                if (data.message[0][i].shutdown_id==1)
                {
                    rig_maintain=data.message[0][i].stlog_value;
                }
                else if (data.message[0][i].shutdown_id==2)
                {
                    rig_move=data.message[0][i].stlog_value;
                }
                else if (data.message[0][i].shutdown_id==3)
                {
                    rig_other=data.message[0][i].stlog_value;
                }
            }


            if(data.message != '404')
            {
                $(".alrtpie").html('');



                var chartData = [
                    {
                        "country": "Rig Maintenance",
                        "litres": rig_maintain
                    },
                    {
                        "country": "Rig Move",
                        "litres": rig_move
                    },
                    {
                        "country": "Other",
                        "litres": rig_other
                    }
                ];




                chart = new AmCharts.AmPieChart();
                chart.dataProvider = chartData;
                chart.titleField = "country";
                chart.valueField = "litres";
                chart.labelRadius = -90;
                chart.labelText = "[[percents]]%";
                if(lx>1444)
                {
                    chart.radius=269;
                }else
                {
                    chart.radius=180;
                }
                chart.baseColor = "#1E7DBC";
                chart.color = "#FFFFFF";
                chart.fontSize = 14;
                chart.outlineColor = "#000000";
                chart.outlineAlpha = 1;

                // LEGEND
                legend = new AmCharts.AmLegend();
                legend.align = "center";
                legend.markerType = "square";
                legend.switchColor='#000';
                legend.valueText='';
                legend.textClickEnabled=true;
                chart.balloonText = "[[title]]<br><span class='span_1'><b>[[value]]</b> ([[percents]]%)</span>";
                chart.addLegend(legend);


                chart.write("piechart");

            }//end of if

            else if(data.message == '404')
            {



                var chartData = [
                    {
                        "country": "Rig Maintenance",
                        "litres": rig_maintain
                    },
                    {
                        "country": "Rig Move",
                        "litres": rig_move
                    },
                    {
                        "country": "Other",
                        "litres": rig_other
                    }
                ];


                chart = new AmCharts.AmPieChart();
                chart.dataProvider = chartData;
                chart.titleField = "country";
                chart.valueField = "litres";
                chart.labelRadius = -90;
                chart.labelText = "[[percents]]%";
                if(lx>1444)
                {
                    chart.radius=269;
                }else
                {
                    chart.radius=180;
                }
                chart.baseColor = "#1E7DBC";
                chart.color = "#FFFFFF";
                chart.fontSize = 14;
                chart.outlineColor = "#000000";
                chart.outlineAlpha = 1;

                chart.write("piechart");

                $(".alrtpie").html('');
                $(".alrtpie").append('Data not available for year '+n);

            }//end of else if


            $('#loading').hide();
        }
    });

}



document.getElementsByName
FusionCharts.setCurrentRenderer('javascript');

function fus_chart_plot(rig_id,lsid,year,month)
{
    column1(rig_id,lsid,year,month);
    Scatterchart1(rig_id,lsid,year,month);
}

function column1(rig_id,lsid,year,month)
{
    ly = $(window).height();
    lx = $(window).width();
    var fsize=12;
//
    var strxml="";
    var colr_cd='';
    var clomundata=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],dy= 0,opn_ctr= 1;

    var color_arr=['','33cdce','7ab54a','fbca7e','fbb03b','c7b299','3fa9f5'];
    var color_arr1=['','#33cdce','#7ab54a','#fbca7e','#fbb03b','#c7b299','#3fa9f5'];
    colr_cd=color_arr[lsid];

    $('#loading').show();

    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url:'/miss_log_clm/' + rig_id + '/' + lsid + '/' + year+'/'+month,
        success: function (data) {
            JSON.stringify(data);

            for (k = 0; k < data.message[0].length; k++) {

                dys = (data.message[0][k].plt_dys) - 1;
                {
                    clomundata[dys] = data.message[0][k].lss_tot;
                }
            }


            var lmgn = 60;
            strxml = "<chart paletteColors='" + colr_cd + "' labelDisplay='WRAP' yAxisNamePadding='0' plotSpacePercent='100' chartLeftMargin='" + lmgn + "'    showYAxisValues='0' xAxisName='day'  xAxisNamePadding='0' placeValuesInside='1' yAxisName='.' yAxisValuesPadding='100'   canvasbgcolor='      ,      ,' drawAnchors='0' rotateValues='1' showBorder='0'  numberPrefix=''    chartBottomMargin='0' showLegend='0' legendPosition='below' bgAlpha='0,0'  numVDivLines='0'  numDivLines='0'  showValues='0' canvasbgalpha='0' canvasbgangle='0' outCnvBaseFontSize='" + fsize + "' outcnvBaseFontColor='808080' alternateHGridAlpha='0' alternateHGridColor='464646' canvasBorderThickness='1' canvasBorderAlpha='0' outcnvBaseFontsize='8' canvasBorderColor='828282'  hoverCapBorderColor='828282' hoverCapBgColor='828282' plotGradientColor='' plotFillAngle='90' plotFillColor='1D8BD1' plotfillalpha='100' showAnchors='0' canvaspadding='0' plotFillRatio='90,90' showPlotBorder='0' plotborderthickness='1' divlinecolor='      ,      ' divlinealpha='0'>";

            strxml += "<styles>";
            strxml += "<definition>";
            strxml += "<style name='xaxisfont' type='font' font='Verdana' align='left' size='" + fsize + "' bold='0' underline='0'/>";
            strxml += "<style name='yaxisfont' type='font' font='Verdana' align='left' size='" + fsize + "' color='ffffff' bold='0' underline='0'/>";
            strxml += "</definition>";
            strxml += "<application>";
            strxml += "<apply toObject='YAxisName' styles='yaxisfont' />";
            strxml += "<apply toObject='XAxisName' styles='xaxisfont' />";
            strxml += "</application>";
            strxml += "</styles>";


            for (i = 0; i < days; i++) {

                strxml += "<set label='" + (i + 1) + "' value='" + clomundata[i] + "'/>";

                $('#t1li_' + (i + 1)).text(clomundata[i]).css({
                    'border-radius': '50%',
                    '-webkit-border-radius': '50%',
                    '-moz-border-radius': '50%',
                    'background-color': color_arr1[lsid],
                    'text-align': 'center'
                });
            }


            strxml += "</chart>";

            var colm = new FusionCharts('FusionCharts/Column2D.swf', 'chart-3', '100%', '100%', '0', '1');
            colm.setXMLData(strxml);
            colm.setTransparent(true);
            colm.render('colm');
            $('#loading').hide();
        }
    });
    show_rze_uplgd1();
}

function Scatterchart1(rig_id,lsid,year,month)
{
    ly = $(window).height();
    lx = $(window).width();
    var fsize=12;
    var day= 0,h= 0,m=0;
    var strxml, strcategories, strd1, strd2;
    var colr_cd='';
    var color_arr=['','33cdce','7ab54a','fbca7e','fbb03b','c7b299','3fa9f5'];
    colr_cd=color_arr[lsid];

    $('#loading').show();

    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url:'/miss_log_sct/' + rig_id + '/' + lsid + '/' + year+'/'+month,
        success: function (data) {
            JSON.stringify(data);

            strxml = "<chart  canvasPadding='0' toolTipBorderColor='D9E5F1' showToolTip='1'  xAxisName='.'  bgAlpha='0' numberSuffix=':00' yAxisName='TIME(In 24 hrs format)'  toolTipBgColor='D9E5F1' xAxisMaxValue='31' xAxisMinValue='1'  yAxisMinValue='1'  yAxisMaxValue='24' numDivLines='22' showAlternateHGridColor='0'  divLineColor='808080'  divLineThickness='1' divLineIsDashed='1' divLineDashLen='2' divLineDashGap='5' vDivlineAlpha='10' showBorder='0'  canvasbgalpha='0' canvasbgangle='0' canvasbgcolor='      ,      ,' showLegend='0' chartBottomMargin='10' canvasBorderAlpha='20' canvasBorderColor='000000' outCnvBaseFontSize='" + fsize + "' canvasBorderThickness='1'>";

            strxml += "<styles>";
            strxml += "<definition>";
            strxml += "<style name='xaxisfont' type='font' font='Verdana' align='left' size='" + fsize + "' color='ffffff'  bold='0' underline='0'/>";
            strxml += "<style name='yaxisfont' type='font' font='Verdana' align='left' size='" + fsize + "' bold='1' underline='0'/>";
            strxml += "</definition>";
            strxml += "<application>";
            strxml += "<apply toObject='YAxisName' styles='yaxisfont' />";
            strxml += "<apply toObject='XAxisName' styles='xaxisfont' />";
            strxml += "</application>";
            strxml += "</styles>";
            strcategories = "<categories verticalLineColor='000000' >";
            strd1 = "<dataset id='OP1' seriesName='OPEN' anchorRadius='2' anchorSides='0' color='" + colr_cd + "' anchorBorderColor='" + colr_cd + "' anchorBgColor='" + colr_cd + "'>";

            for (i = 0; i <= days; i++) {
                if (i == 0) {
                    strcategories += "<category label=''  x='" + i + "' showVerticalLine='0'  />";
                }
                else {
                    strcategories += "<category label=''  x='" + i + "' showVerticalLine='1'  vDivlineAlpha='0' />";
                }
            }
            strcategories += "</categories>";


            for (i = 0; i < data.message[0].length; i++) {
                day = new Date(data.message[0][i].date_time).getDate();
                h = new Date(data.message[0][i].date_time).getHours();
                m = new Date(data.message[0][i].date_time).getMinutes();
                strd1 += "<set x='" + (day - 0.6) + "' y='" + h + "." + m + "'/>";
//        console.log("OPEN <set x='" + (day) + "' y='" + h+"."+m+"'/>");
//            console.log("index : Dys "+ds+' Hr '+hs+'  '+' '+data.message[0][i].rig_id+' '+data.message[0][i].loss_id+' '+data.message[0][i].loss_name+' '+ data.message[0][i].date_time);

            }


            strd1 += "</dataset>";

            // start set Vertical color here start
            strxml += "<vTrendLines>";

            for (i = 0; i < days; i++) {
                strxml += "<line startValue='" + i + "' endValue='" + (i + 1) + "' displayValue=' ' thickness='1' isTrendZone='1' color='      ' alpha='80'/>";
            }


            strxml += "</vTrendLines>";
            //End set Vertical color here start
            strxml += strcategories + strd1 + strd2 + "</chart>";

            var b = new FusionCharts('FusionCharts/Scatter.swf', 'chart-4', '100%', '100%', '0', '1');
            //  b.setXMLUrl("scatter.xml");
            b.setXMLData(strxml);
            b.setTransparent(true);
            b.render('sctr');

            $('#loading').hide();
        }
    });
}

function show_rze_uplgd1()
{
    if(lx>1444)
    {
        if(days==28)
        {
            $('#colm').css({
                'height':'100%',
                'width':725 +'px',
                'position':'absolute',
                'overflow':'hidden'
            });
            $('#sctr').css({
                'height':'100%' ,
                'width':790 +'px',
                'position':'absolute',
                'overflow':'hidden'
            });

            $('#t1li_29').hide();
            $('#t1li_30').hide();
            $('#t1li_31').hide();

        }
        if(days==29)
        {
            $('#colm').css({
                'height':'100%',
                'width':745 +'px',
                'position':'absolute',
                'overflow':'hidden'
            });
            $('#sctr').css({
                'height':'100%' ,
                'width':790 +'px',
                'position':'absolute',
                'overflow':'hidden'
            });
            $('#t1li_29').show();
            $('#t1li_30').hide();
            $('#t1li_31').hide();

        }
        if(days==30)
        {
            $('#colm').css({
                'height':'100%',
                'width':766  +'px',
                'position':'absolute',
                'overflow':'hidden'
            });
            $('#sctr').css({
                'height':'100%' ,
                'width':790 +'px',
                'position':'absolute',
                'overflow':'hidden'
            });
            $('#t1li_29').show();
            $('#t1li_30').show();
            $('#t1li_31').hide();

        }
        if(days==31)
        {
            $('#colm').css({
                'height':'100%' ,
                'width':790  +'px',
                'position':'absolute',
                'overflow':'hidden'
            });


            $('#sctr').css({
                'height':'100%' ,
                'width':790 +'px',
                'position':'absolute',
                'overflow':'hidden'
            });

            $('#t1li_29').show();
            $('#t1li_30').show();
            $('#t1li_31').show();
        }
    } else
    {
        if(days==28)
        {


            $('#t1li_29').hide();
            $('#t1li_30').hide();
            $('#t1li_31').hide();
            $('#colm').css({
                'height':'100%',
                'width':505 +'px',
                'position':'absolute',
                'overflow':'hidden'
            });
            $('#sctr').css({
                'height':'100%' ,
                'width':550 +'px',
                'position':'absolute',
                'overflow':'hidden'
            });

        }
        if(days==29)
        {
            $('#colm').css({
                'height':'100%',
                'width':520 +'px',
                'position':'absolute',
                'overflow':'hidden'
            });
            $('#sctr').css({
                'height':'100%' ,
                'width':550 +'px',
                'position':'absolute',
                'overflow':'hidden'
            });
            $('#t1li_29').show();
            $('#t1li_30').hide();
            $('#t1li_31').hide();

        }
        if(days==30)
        {
            $('#colm').css({
                'height':'100%',
                'width':535  +'px',
                'position':'absolute',
                'overflow':'hidden'
            });
            $('#sctr').css({
                'height':'100%' ,
                'width':550 +'px',
                'position':'absolute',
                'overflow':'hidden'
            });
            $('#t1li_29').show();
            $('#t1li_30').show();
            $('#t1li_31').hide();

        }
        if(days==31)
        {
            $('#colm').css({
                'height':'100%' ,
                'width':550  +'px',
                'position':'absolute',
                'overflow':'hidden'
            });


            $('#sctr').css({
                'height':'100%' ,
                'width':550 +'px',
                'position':'absolute',
                'overflow':'hidden'
            });

            $('#t1li_29').show();
            $('#t1li_30').show();
            $('#t1li_31').show();
        }
    }

}
