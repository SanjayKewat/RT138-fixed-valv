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

    var ident = this.id.split("_")[1];
    //add class of activetabheader to new active tab and show contents
    this.setAttribute("class","tabActiveHeader");
    document.getElementById("tabpage_" + ident).style.display="block";
    this.parentNode.setAttribute("data-current",ident);
//    table_adjust();
}
function flog_drop_bind(){
    $.get('/flog_drop/'+rig_id, {}, function(data) {
        JSON.stringify(data);


        $.each(data.message,function(idx,value){
            $('#trc').append('<option value='+value.id+'>'+value.valve_name+'</option>');   /*Function Log Dropdown*/
            $('#trc1').append('<option value='+value.id+'>'+value.valve_name+'</option>');   /*Function Log Dropdown*/
        });

    });
}

function fflog_drop_bind(){
    $.get('/flog_drop', {}, function(data) {
        JSON.stringify(data);

        $.each(data.message,function(idx,value){
            $('#trc1').append('<option value='+value.id+'>'+value.valve_name+'</option>');   /*Function Log Dropdown*/
        });

    });
}
var ctr=0,ctr1= 0,ctr2= 0;


$(document).ready(function () {

    bindyear();
    flog_drop_bind();
    //  fflog_drop_bind();
    $('#txtfr').datetimepicker({
        timepicker: false,
        format: 'y-m-d',
        'z-index':'16'
    });

    $('#txtto').datetimepicker({
        timepicker: false,
        format: 'y-m-d'
    });

    div1_plot(parseInt($('#dropdown1').val()),rig_id);

    ffdiv1_plot(parseInt($('#ffdropdown1').val()),rig_id);





    var to=new Date();
    var predate=new Date();
    predate.setDate(predate.getDate());
//           alert(predate);
    fetchdata(predate,to);
    $('#txtfr').val(predate.getFullYear()+"-"+(predate.getMonth()+1)+"-"+predate.getDate());
    $('#txtto').val(to.getFullYear()+"-"+(to.getMonth()+1)+"-"+to.getDate());

    $('#btn').click(function() {
        fetchdata($('#txtfr').val(),$('#txtto').val());


    });





//    bind_table();
    $('#btndetail').click(function(){
        location.href="/flog?trace="+$('#trc').val()+"&year="+$('#yeardrp').val()+"&month="+$('#mnth').val();
//        alert("flog?trace="+$('#trc').val()+"&year="+$('#yeardrp').val()+"&month="+$('#mnth').val());
    });

    $('#btndetail1').click(function(){
        location.href="/fflog?trace="+$('#trc1').val()+"&year="+$('#yrdrp1').val()+"&month="+$('#mnth1').val();
//        alert("/fflog?trace="+$('#trc1').val()+"&year="+$('#yrdrp1').val()+"&month="+$('#mnth1').val());
    });

    $('#dropdown1').change(function () {
        n = $(this).val();
        // ctr=0;

        div1_plot(parseInt($('#dropdown1').val()),rig_id);

    });

    $('.ra').click(function () {

        if (ctr1 < 2) {
            ctr1++;
        }

        switch(ctr1)
        {

            case 1:
                $('.full').hide();
                $('.full2').hide();
                $('.full1').show();
                div2_plot(parseInt($('#dropdown1').val()),rig_id);
                break;
            case 2:
                $('.full').hide();
                $('.full1').hide();
                $('.full2').show();
                div3_plot(parseInt($('#dropdown1').val()),rig_id);
                break;
            default:
                $('.full').show();
                $('.full1').hide();
                $('.full2').hide();
                div1_plot(parseInt($('#dropdown1').val()),rig_id);
        }
//        if (ctr1 == 0) {
//
//            $('.full1').hide();
//            $('.full2').hide();
//            $('.full3').hide();
//            $('.full').show();
//            div1_plot($('#dropdown1').val(),rig_id);
//        }
//
//        else if (ctr1 == 1) {
//
//            $('.full').hide();
//            $('.full2').hide();
//            $('.full3').hide();
//            $('.full1').show();
//            div2_plot($('#dropdown1').val(),rig_id);
//        }
//
//        else if (ctr1 == 2) {
//
//            $('.full').hide();
//            $('.full1').hide();
//            $('.full3').hide();
//            $('.full2').show();
//            div3_plot($('#dropdown1').val(),rig_id);
//        }
//
//        else if (ctr1 == 3) {
//
//            $('.full').hide();
//            $('.full1').hide();
//            $('.full2').hide();
//            $('.full3').show();
//            div4_plot($('#dropdown1').val(),rig_id);
//        }

    });

    $('.la').click(function () {


        if (ctr1 > 0) {
            ctr1--;
        }
        switch(ctr1)
        {

            case 1:
                $('.full').hide();
                $('.full2').hide();
                $('.full1').show();
                div2_plot($('#dropdown1').val(),rig_id);
                break;
            case 2:
                $('.full').hide();
                $('.full1').hide();
                $('.full2').show();
                div3_plot($('#dropdown1').val(),rig_id);
                break;
            default:
                $('.full').show();
                $('.full1').hide();
                $('.full2').hide();
                div1_plot($('#dropdown1').val(),rig_id);
        }
//        if (ctr1 == 0) {
//
//            $('.full1').hide();
//            $('.full2').hide();
//            $('.full3').hide();
//            $('.full').show();
//            div1_plot($('#dropdown1').val(),rig_id);
//        }
//
//        else if (ctr1 == 1) {
//
//            $('.full').hide();
//            $('.full2').hide();
//            $('.full3').hide();
//            $('.full1').show();
//            div2_plot($('#dropdown1').val(),rig_id);
//        }
//
//        else if (ctr1 == 2) {
//
//            $('.full').hide();
//            $('.full1').hide();
//            $('.full3').hide();
//            $('.full2').show();
//            div3_plot($('#dropdown1').val(),rig_id);
//        }
//
//        else if (ctr1 == 3) {
//
//            $('.full').hide();
//            $('.full1').hide();
//            $('.full2').hide();
//            $('.full3').show();
//            div4_plot($('#dropdown1').val(),rig_id);
//        }

    });


    $('#tabHeader_1').click(function () {

//        bindyear();
//        var dt = new Date();

        div1_plot(parseInt($('#dropdown1').val()),rig_id);

    });


    $('#tabHeader_2').click(function () {


//        ffbindyear();
        ffdiv1_plot(parseInt($('#ffdropdown1').val()),rig_id);

    });
    $('#ffdropdown1').change(function () {

        ffdiv1_plot(parseInt($('#ffdropdown1').val()),rig_id);

    });
    $('.ffra').click(function () {

        if (ctr2 < 2) {
            ctr2++;
        }
        switch(ctr2)
        {
            case 1:

                $('.fffull').hide();
                $('.fffull2').hide();
                $('.fffull1').show();
                ffdiv2_plot(parseInt($('#dropdown1').val()),rig_id);
                break;
            case 2:
                $('.fffull').hide();
                $('.fffull1').hide();
                $('.fffull2').show();
                ffdiv3_plot(parseInt($('#dropdown1').val()),rig_id);
                break;
            default:
                $('.fffull').show();
                $('.fffull1').hide();
                $('.fffull2').hide();
                ffdiv1_plot(parseInt($('#dropdown1').val()),rig_id);



        }


    });

    $('.ffla').click(function () {

        if (ctr2 > 0) {
            ctr2--;
        }

        switch(ctr2)
        {
            case 1:
                $('.fffull').hide();
                $('.fffull2').hide();
                $('.fffull1').show();
                ffdiv2_plot(parseInt($('#dropdown1').val()),rig_id);
                break;
            case 2:
                $('.fffull').hide();
                $('.fffull1').hide();
                $('.fffull2').show();
                ffdiv3_plot(parseInt($('#dropdown1').val()),rig_id);
                break;
            default:
                $('.fffull').show();
                $('.fffull1').hide();
                $('.fffull2').hide();
                ffdiv1_plot(parseInt($('#dropdown1').val()),rig_id);
        }

    });
});

function fetchdata(fm,tm){

    var frm=new Date(Date.parse(fm));

    var to=new Date(Date.parse(tm));
    to.setDate(to.getDate() + 1);
    var s_no=0;
    $("#val_alarm_data").html('');
    var ctrl= 0,cal=0;

    frm=frm.getTime()/1000;
    to=to.getTime()/1000;
    if(frm>to)
    {
        alert('Make sure From Date not be greater than To Date');
    }
    else {
        $('#loading').show();

        $.ajax({
            type: 'GET',
            contentType: 'application/json',
            url:'/logs/'+rig_id+'/' + frm + '/' + to,
            success: function (data) {
                JSON.stringify(data);

//                  alert(data.message[0].Array[1].String[0].Val[0]);
                for (i = 0; i < data.message.length; i++) {
                    ctrl++;
                    var dt= new Date(data.message[i].date_time);

                    $("#val_alarm_data").append("<tr><td>" + data.message[i].valve_position+ "</td><td>" + dt.toString("dd/MM/yyyy") + "&nbsp;&nbsp;&nbsp;&nbsp;" + dt.toString("hh:mm tt")+ "</td><td>" + data.message[i].air_press+ "</td><td>" + data.message[i].bypass_valve_pos+ "</td></tr>");

                }
//                table_adjust();
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
                        $("#val_alarm_data").append("<tr><td></td><td></td><td></td><td></td></tr>");

                    }
                }
                $('#loading').hide();
            }
        });
    }

}
function bindyear()//generating dynamic drop down
{

    $('#dropdown1').empty();
    var dt=new Date();
    for(i=dt.getFullYear();i>=2010;i--)
    {
        $('#dropdown1').append('<option value='+i+'>'+i+'</option>');
        $('#ffdropdown1').append('<option value='+i+'>'+i+'</option>');
        $('#yeardrp').append('<option value='+i+'>'+i+'</option>');
        $('#yrdrp1').append('<option value='+i+'>'+i+'</option>');
    }
}
//
//function ffbindyear()//generating dynamic drop down
//{
//
//    $('#ffdropdown1').empty();
//    var dt=new Date();
//    for(i=dt.getFullYear();i>=2010;i--)
//    {
//        $('#ffdropdown1').append('<option value='+i+'>'+i+'</option>');
//    }
//}


function div1_plot(n,rig_id){

    var twelve = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_0 = [0,0,0,0,0,0,0,0,0,0,0,0];

    var twelve1 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_1 = [0,0,0,0,0,0,0,0,0,0,0,0];

    var twelve2 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_2 = [0,0,0,0,0,0,0,0,0,0,0,0];

    var twelve3 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_3 = [0,0,0,0,0,0,0,0,0,0,0,0];

    var twelve4 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_4 = [0,0,0,0,0,0,0,0,0,0,0,0];



    var vo=0,vo1=0,vo2=0,vo3=0,vo4=0;

    var vc=0,vc1=0,vc2=0,vc3=0,vc4=0;

    $(".title1").html('');

    $(".title1").append("Annular");

    $(".title2").html('');

    $(".title2").append("Blind/Shear");


    $(".title3").html('');

    $(".title3").append("Bypass");


    $(".title4").html('');

    $(".title4").append("Choke line");


    $(".title5").html('');

    $(".title5").append("Kill line");


    $('#loading').show();

    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url:'/funlog/'+n+'/'+rig_id,
        success: function (data) {
            JSON.stringify(data);

            if(data.message.length != 0) {


                y = data.message.length;

                y1 = data.message1.length;
                y2 = data.message3.length;
                y3 = data.message4.length;

                // max_count =  data.message.Cluster[y-1].I32[0].Val;
                max_count = 0;

                for(var i=0;i<y;i++){
                    if(max_count<data.message[i].Value)
                    {
                        max_count=data.message[i].Value;
                    }
                    switch(data.message[i].Valve_ID){
                        case 2:
                            vo = data.message[i].Value;
                            break;
                        case 4:
                            vo1 = data.message[i].Value;
                            break;
                        case 6:

                            vo2 = data.message[i].Value;
                            break;
                        case 8:
                            vo3 = data.message[i].Value;
                            break;
                        case 10:
                            vo4 = data.message[i].Value;
                            break;

                        default :

//                        vo4 = data.message[i].Value;
                            break;
                    }
                }

                for(var i=0;i<y1;i++){
                    if(max_count<data.message1[i].Value)
                    {
                        max_count=data.message1[i].Value;
                    }
                    switch(data.message1[i].Valve_ID){
                        case 1:
                            vc = data.message1[i].Value;
                            break;
                        case 3:
                            vc1 = data.message1[i].Value;
                            break;
                        case 5:
                            vc2 = data.message1[i].Value;
                            break;
                        case 7:
                            vc3 = data.message1[i].Value;
                            break;
                        case 9:
                            vc4 = data.message1[i].Value;
                            break;

                        default :
//                        vc4 = data.message[i].Value;
                            break;
                    }
                }




                var x1=0;
                for(var i=0;i<y2;i++){

                    if(data.message3[i].Valve_ID==2)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve[x1] = data.message3[i].Value;


                    }

                    if(data.message3[i].Valve_ID==4)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve1[x1] = data.message3[i].Value;

                    }

                    if(data.message3[i].Valve_ID==6)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve2[x1] = data.message3[i].Value;

                    }

                    if(data.message3[i].Valve_ID==8)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve3[x1] = data.message3[i].Value;

                    }

                    if(data.message3[i].Valve_ID==10)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve4[x1] = data.message3[i].Value;

                    }



                }


                for(var i=0;i<y3;i++){


                    if(data.message4[i].Valve_ID==1)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_0[x1] = data.message4[i].Value;


                    }

                    if(data.message4[i].Valve_ID==3)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_1[x1] = data.message4[i].Value;


                    }

                    if(data.message4[i].Valve_ID==5)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_2[x1] = data.message4[i].Value;

                    }

                    if(data.message4[i].Valve_ID==7)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_3[x1] = data.message4[i].Value;

                    }

                    if(data.message4[i].Valve_ID==9)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_4[x1] = data.message4[i].Value;

                    }


                }





            }//end of !=404

            else if(data.message == '404'){

                twelve = [0,0,0,0,0,0,0,0,0,0,0,0];
                twelve_0 = [0,0,0,0,0,0,0,0,0,0,0,0];

                twelve1 = [0,0,0,0,0,0,0,0,0,0,0,0];
                twelve_1 = [0,0,0,0,0,0,0,0,0,0,0,0];

                twelve2 = [0,0,0,0,0,0,0,0,0,0,0,0];
                twelve_2 = [0,0,0,0,0,0,0,0,0,0,0,0];

                twelve3 = [0,0,0,0,0,0,0,0,0,0,0,0];
                twelve_3 = [0,0,0,0,0,0,0,0,0,0,0,0];

                twelve4 = [0,0,0,0,0,0,0,0,0,0,0,0];
                twelve_4 = [0,0,0,0,0,0,0,0,0,0,0,0];


            }//end of else if 404

            var chartData = [
                {
                    "month": "DECEMBER",
                    "open": twelve[11],
                    "close": twelve_0[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve[10],
                    "close": twelve_0[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve[9],
                    "close": twelve_0[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve[8],
                    "close": twelve_0[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve[7],
                    "close": twelve_0[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve[6],
                    "close": twelve_0[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve[5],
                    "close": twelve_0[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve[4],
                    "close": twelve_0[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve[3],
                    "close": twelve_0[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve[2],
                    "close": twelve_0[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve[1],
                    "close": twelve_0[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve[0],
                    "close": twelve_0[0]
                }
            ];

            var chartData1 = [
                {
                    "month": "DECEMBER",
                    "open": twelve1[11],
                    "close": twelve_1[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve1[10],
                    "close": twelve_1[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve1[9],
                    "close": twelve_1[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve1[8],
                    "close": twelve_1[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve1[7],
                    "close": twelve_1[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve1[6],
                    "close": twelve_1[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve1[5],
                    "close": twelve_1[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve1[4],
                    "close": twelve_1[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve1[3],
                    "close": twelve_1[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve1[2],
                    "close": twelve_1[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve1[1],
                    "close": twelve_1[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve1[0],
                    "close": twelve_1[0]
                }
            ];
            var chartData2 = [
                {
                    "month": "DECEMBER",
                    "open": twelve2[11],
                    "close": twelve_2[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve2[10],
                    "close": twelve_2[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve2[9],
                    "close": twelve_2[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve2[8],
                    "close": twelve_2[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve2[7],
                    "close": twelve_2[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve2[6],
                    "close": twelve_2[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve2[5],
                    "close": twelve_2[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve2[4],
                    "close": twelve_2[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve2[3],
                    "close": twelve_2[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve2[2],
                    "close": twelve_2[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve2[1],
                    "close": twelve_2[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve2[0],
                    "close": twelve_2[0]
                }
            ];
            var chartData3 = [
                {
                    "month": "DECEMBER",
                    "open": twelve3[11],
                    "close": twelve_3[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve3[10],
                    "close": twelve_3[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve3[9],
                    "close": twelve_3[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve3[8],
                    "close": twelve_3[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve3[7],
                    "close": twelve_3[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve3[6],
                    "close": twelve_3[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve3[5],
                    "close": twelve_3[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve3[4],
                    "close": twelve_3[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve3[3],
                    "close": twelve_3[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve3[2],
                    "close": twelve_3[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve3[1],
                    "close": twelve_3[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve3[0],
                    "close": twelve_3[0]
                }
            ];

            var chartData4 = [
                {
                    "month": "DECEMBER",
                    "open": twelve4[11],
                    "close": twelve_4[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve4[10],
                    "close": twelve_4[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve4[9],
                    "close": twelve_4[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve4[8],
                    "close": twelve_4[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve4[7],
                    "close": twelve_4[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve4[6],
                    "close": twelve_4[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve4[5],
                    "close": twelve_4[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve4[4],
                    "close": twelve_4[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve4[3],
                    "close": twelve_4[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve4[2],
                    "close": twelve_4[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve4[1],
                    "close": twelve_4[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve4[0],
                    "close": twelve_4[0]
                }
            ];

            // SERIAL CHART
            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 80;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            // chart.plotAreaBorderColor = "#DADADA";
            // chart.plotAreaBorderAlpha = 1;

            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0.4;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;
            // valueAxis.title = "ANNULAR";
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "OPEN";
            graph1.valueField = "open";

            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "CLOSE";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

//        console.log('Max : '+max_count);
            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('first_left');


            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData1;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;
            // chart.plotAreaBorderColor = "#DADADA";
            // chart.plotAreaBorderAlpha = 1;

            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write("second_left");


            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData2;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;
            // chart.plotAreaBorderColor = "#DADADA";
            // chart.plotAreaBorderAlpha = 1;

            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('third_left');


            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData3;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;
            // chart.plotAreaBorderColor = "#DADADA";
            // chart.plotAreaBorderAlpha = 1;

            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('fourth_left');


            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData4;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;
            // chart.plotAreaBorderColor = "#DADADA";
            // chart.plotAreaBorderAlpha = 1;

            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('fifth_left');





            //Vertical charts plotting

            var chartDatav4 = [
                {
                    "open": vo4,
                    "close": vc4
                }

            ];


            // SERIAL CHART
            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav4;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 45;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;


            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0.4;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum =0;
            valueAxis.maximum = max_count;
            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "Income:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            graph1.labelText = "[[open]]";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "Expenses:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);


            // WRITE
            chart.write('fifth_right');




            var chartDatav = [
                {
                    "open": vo,
                    "close": vc
                },

            ];


            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            // chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            // categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;

            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // var ttl = new AmCharts.Title();

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;

            graph1.labelText = "[[open]]";

            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('first_right');


            var chartDatav1 = [
                {
                    "open": vo1,
                    "close": vc1
                },

            ];


            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav1;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            // chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            // categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;

            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // var ttl = new AmCharts.Title();

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            graph1.labelText = "[[open]]";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('second_right');


            var chartDatav2 = [
                {
                    "open": vo2,
                    "close": vc2
                },

            ];


            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav2;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            // chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            // categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;

            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // var ttl = new AmCharts.Title();

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            graph1.labelText = "[[open]]";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('third_right');


            var chartDatav3 = [
                {
                    "open": vo3,
                    "close": vc3
                },

            ];


            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav3;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            // chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            // categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;

            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            graph1.labelText = "[[open]]";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);

            // WRITE
            chart.write('fourth_right');



            $('#loading').hide();
        }

    });//end of reading data

}
function div2_plot(n,rig_id){


    var twelve5 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_5 = [0,0,0,0,0,0,0,0,0,0,0,0];


    var twelve6 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_6 = [0,0,0,0,0,0,0,0,0,0,0,0];

    var twelve7 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_7 = [0,0,0,0,0,0,0,0,0,0,0,0];

    var twelve8 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_8 = [0,0,0,0,0,0,0,0,0,0,0,0];

    var twelve9 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_9 = [0,0,0,0,0,0,0,0,0,0,0,0];


    var vo5=0,vo6=0,vo7=0,vo8=0,vo9=0;

    var vc5=0,vc6=0,vc7=0,vc8=0,vc9=0;




    $(".title6").html('');

    $(".title6").append("Pipe ram 1");

    $(".title7").html('');

    $(".title7").append("Pipe ram 2");

    $(".title8").html('');

    $(".title8").append("Choke Line 2");


    $(".title9").html('');

    $(".title9").append("Kill Line 2");

    $(".title10").html('');

    $(".title10").append("Piperam 3");

    $('#loading').show();

    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url:'/funlog/'+n+'/'+rig_id,
        success: function (data) {
            JSON.stringify(data);


            if(data.message.length != 0) {



                y = data.message.length;

                y1 = data.message1.length;
                y2 = data.message3.length;
                y3 = data.message4.length;

                // max_count =  data.message.Cluster[y-1].I32[0].Val;
                max_count = 0;


                for(var i=0;i<y;i++){
                    if(max_count<data.message[i].Value)
                    {
                        max_count=data.message[i].Value;
                    }
                    switch(data.message[i].Valve_ID){
                        case 12:
                            vo5 = data.message[i].Value;
                            break;
                        case 14:
                            vo6 = data.message[i].Value;
                            break;
                        case 16:
                            vo7 = data.message[i].Value;
                            break;
                        case 18:
                            vo8 = data.message[i].Value;
                            break;
                        case 20:
                            vo9 = data.message[i].Value;
                            break;

                        default :

                            break;
                    }
                }

                for(var i=0;i<y1;i++){
                    if(max_count<data.message1[i].Value)
                    {
                        max_count=data.message1[i].Value;
                    }
                    switch(data.message1[i].Valve_ID){
                        case 11:
                            vc5 = data.message1[i].Value;
                            break;
                        case 13:
                            vc6 = data.message1[i].Value;
                            break;
                        case 15:
                            vc7 = data.message1[i].Value;
                            break;
                        case 17:
                            vc8 = data.message1[i].Value;
                            break;
                        case 19:
                            vc9 = data.message1[i].Value;
                            break;

                        default :

                            break;
                    }
                }


                var x1=0;
                for(var i=0;i<y2;i++){

                    if(data.message3[i].Valve_ID==12)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve5[x1] = data.message3[i].Value;


                    }

                    if(data.message3[i].Valve_ID==14)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve6[x1] = data.message3[i].Value;

                    }

                    if(data.message3[i].Valve_ID==16)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve7[x1] = data.message3[i].Value;

                    }

                    if(data.message3[i].Valve_ID==18)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve8[x1] = data.message3[i].Value;

                    }
                    if(data.message3[i].Valve_ID==20)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve9[x1] = data.message3[i].Value;

                    }



                }


                for(var i=0;i<y3;i++){


                    if(data.message4[i].Valve_ID==11)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_5[x1] = data.message4[i].Value;


                    }

                    if(data.message4[i].Valve_ID==13)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_6[x1] = data.message4[i].Value;


                    }

                    if(data.message4[i].Valve_ID==15)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_7[x1] = data.message4[i].Value;


                    }
                    if(data.message4[i].Valve_ID==17)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_8[x1] = data.message4[i].Value;


                    }
                    if(data.message4[i].Valve_ID==19)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_9[x1] = data.message4[i].Value;


                    }



                }


            }


            else
            if (data.message == '404') {


                twelve5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                twelve_5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


                twelve6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                twelve_6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                twelve7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                twelve_7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                twelve8 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                twelve_8 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                twelve9 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                twelve_9 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

            }//end of else if 404


            //PAGE 2

            var chartData5 = [
                {
                    "month": "DECEMBER",
                    "open": twelve5[11],
                    "close": twelve_5[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve5[10],
                    "close": twelve_5[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve5[9],
                    "close": twelve_5[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve5[8],
                    "close": twelve_5[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve5[7],
                    "close": twelve_5[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve5[6],
                    "close": twelve_5[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve5[5],
                    "close": twelve_5[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve5[4],
                    "close": twelve_5[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve5[3],
                    "close": twelve_5[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve5[2],
                    "close": twelve_5[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve5[1],
                    "close": twelve_5[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve5[0],
                    "close": twelve_5[0]
                }
            ];


            var chartData6 = [
                {
                    "month": "DECEMBER",
                    "open": twelve6[11],
                    "close": twelve_6[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve6[10],
                    "close": twelve_6[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve6[9],
                    "close": twelve_6[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve6[8],
                    "close": twelve_6[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve6[7],
                    "close": twelve_6[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve6[6],
                    "close": twelve_6[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve6[5],
                    "close": twelve_6[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve6[4],
                    "close": twelve_6[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve6[3],
                    "close": twelve_6[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve6[2],
                    "close": twelve_6[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve6[1],
                    "close": twelve_6[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve6[0],
                    "close": twelve_6[0]
                }
            ];

            var chartData7 = [
                {
                    "month": "DECEMBER",
                    "open": twelve7[11],
                    "close": twelve_7[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve7[10],
                    "close": twelve_7[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve7[9],
                    "close": twelve_7[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve7[8],
                    "close": twelve_7[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve7[7],
                    "close": twelve_7[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve7[6],
                    "close": twelve_7[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve7[5],
                    "close": twelve_7[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve7[4],
                    "close": twelve_7[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve7[3],
                    "close": twelve_7[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve7[2],
                    "close": twelve_7[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve7[1],
                    "close": twelve_7[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve7[0],
                    "close": twelve_7[0]
                }
            ];
            var chartData8 = [
                {
                    "month": "DECEMBER",
                    "open": twelve8[11],
                    "close": twelve_8[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve8[10],
                    "close": twelve_8[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve8[9],
                    "close": twelve_8[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve8[8],
                    "close": twelve_8[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve8[7],
                    "close": twelve_8[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve8[6],
                    "close": twelve_8[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve8[5],
                    "close": twelve_8[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve8[4],
                    "close": twelve_8[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve8[3],
                    "close": twelve_8[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve8[2],
                    "close": twelve_8[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve8[1],
                    "close": twelve_8[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve8[0],
                    "close": twelve_8[0]
                }
            ];

            var chartData9 = [
                {
                    "month": "DECEMBER",
                    "open": twelve9[11],
                    "close": twelve_9[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve9[10],
                    "close": twelve_9[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve9[9],
                    "close": twelve_9[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve9[8],
                    "close": twelve_9[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve9[7],
                    "close": twelve_9[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve9[6],
                    "close": twelve_9[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve9[5],
                    "close": twelve_9[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve9[4],
                    "close": twelve_9[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve9[3],
                    "close": twelve_9[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve9[2],
                    "close": twelve_9[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve9[1],
                    "close": twelve_9[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve9[0],
                    "close": twelve_9[0]
                }
            ];

            // SERIAL CHART
            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData5;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 80;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;
            // chart.plotAreaBorderColor = "#DADADA";
            // chart.plotAreaBorderAlpha = 1;

            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0.4;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;
            // valueAxis.title = "ANNULAR";
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "OPEN";
            graph1.valueField = "open";
            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "CLOSE";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('six_left');


            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData6;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write("seven_left");


            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData7;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;
            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('eight_left');


            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData8;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;
            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('nine_left');


            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData9;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;
            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('ten_left');



            var chartDatav9 = [
                {
                    "open": vo9,
                    "close": vc9
                }

            ];


            // SERIAL CHART
            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav9;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 45;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;


            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0.4;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum =0;
            valueAxis.maximum = max_count;
            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "Income:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            graph1.labelText = "[[open]]";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "Expenses:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);


            // WRITE
            chart.write('ten_right');




            var chartDatav5 = [
                {
                    "open": vo5,
                    "close": vc5
                }

            ];


            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav5;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            // chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            // categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;

            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // var ttl = new AmCharts.Title();

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            graph1.labelText = "[[open]]";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('six_right');


            var chartDatav6 = [
                {
                    "open": vo6,
                    "close": vc6
                }

            ];


            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav6;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            // chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            // categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;

            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // var ttl = new AmCharts.Title();

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            graph1.labelText = "[[open]]";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('seven_right');


            var chartDatav7 = [
                {
                    "open": vo7,
                    "close": vc7
                }

            ];


            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav7;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            // chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            // categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;

            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // var ttl = new AmCharts.Title();

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            graph1.labelText = "[[open]]";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('eight_right');


            var chartDatav8 = [
                {
                    "open": vo8,
                    "close": vc8
                }

            ];


            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav8;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            // chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            // categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;

            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            graph1.labelText = "[[open]]";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);

            // WRITE
            chart.write('nine_right');


            $('#loading').hide();
        }
    });//end of reading data

}

function div3_plot(n,rig_id){


    var twelve10 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_10 = [0,0,0,0,0,0,0,0,0,0,0,0];


    var twelve11 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_11 = [0,0,0,0,0,0,0,0,0,0,0,0];

    var twelve12 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_12 = [0,0,0,0,0,0,0,0,0,0,0,0];




    var vo10=0,vo11=0,vo12=0,vo13=0,vo14=0;

    var vc10=0,vc11=0,vc12=0,vc13=0,vc14=0;




    $(".title11").html('');

    $(".title11").append("HCR 1");

    $(".title12").html('');

    $(".title12").append("HCR 2");

    $(".title13").html('');

    $(".title13").append("Spare");

    $('#loading').show();

    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url:'/funlog/'+n+'/'+rig_id,
        success: function (data) {
            JSON.stringify(data);

            if(data.message.length != 0) {



                y = data.message.length;

                y1 = data.message1.length;
                y2 = data.message3.length;
                y3 = data.message4.length;

                // max_count =  data.message.Cluster[y-1].I32[0].Val;
                max_count = 0;


                for(var i=0;i<y;i++){
                    if(max_count<data.message[i].Value)
                    {
                        max_count=data.message[i].Value;
                    }
                    switch(data.message[i].Valve_ID){
                        case 22:
                            vo10 = data.message[i].Value;
                            break;
                        case 24:
                            vo11 = data.message[i].Value;
                            break;
                        case 26:
                            vo12 = data.message[i].Value;
                            break;

                        default :

                            break;
                    }
                }

                for(var i=0;i<y1;i++){
                    if(max_count<data.message1[i].Value)
                    {
                        max_count=data.message1[i].Value;
                    }
                    switch(data.message[i].Valve_ID){
                        case 21:
                            vc10 = data.message1[i].Value;
                            break;
                        case 23:
                            vc11 = data.message1[i].Value;
                            break;
                        case 25:
                            vc12 = data.message1[i].Value;
                            break;

                        default :

                            break;
                    }
                }


                var x1=0;
                for(var i=0;i<y2;i++){

                    if(data.message3[i].Valve_ID==22)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve10[x1] = data.message3[i].Value;


                    }

                    if(data.message3[i].Valve_ID==24)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve11[x1] = data.message3[i].Value;

                    }
                    if(data.message3[i].Valve_ID==26)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve12[x1] = data.message3[i].Value;

                    }



                }


                for(var i=0;i<y3;i++){


                    if(data.message4[i].Valve_ID==21)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_10[x1] = data.message4[i].Value;


                    }

                    if(data.message4[i].Valve_ID==23)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_11[x1] = data.message4[i].Value;


                    }
                    if(data.message4[i].Valve_ID==25)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_12[x1] = data.message4[i].Value;


                    }



                }


            }


            else
            if (data.message == '404') {


                twelve10 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                twelve_10 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


                twelve11 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                twelve_11 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                twelve12 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                twelve_12 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

            }
            //end of else if 404


            //PAGE 2


            var chartData10 = [
                {
                    "month": "DECEMBER",
                    "open": twelve10[11],
                    "close": twelve_10[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve10[10],
                    "close": twelve_10[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve10[9],
                    "close": twelve_10[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve10[8],
                    "close": twelve_10[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve10[7],
                    "close": twelve_10[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve10[6],
                    "close": twelve_10[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve10[5],
                    "close": twelve_10[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve10[4],
                    "close": twelve_10[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve10[3],
                    "close": twelve_10[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve10[2],
                    "close": twelve_10[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve10[1],
                    "close": twelve_10[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve10[0],
                    "close": twelve_10[0]
                }
            ];

            var chartData11 = [
                {
                    "month": "DECEMBER",
                    "open": twelve11[11],
                    "close": twelve_11[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve11[10],
                    "close": twelve_11[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve11[9],
                    "close": twelve_11[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve11[8],
                    "close": twelve_11[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve11[7],
                    "close": twelve_11[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve11[6],
                    "close": twelve_11[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve11[5],
                    "close": twelve_11[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve11[4],
                    "close": twelve_11[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve11[3],
                    "close": twelve_11[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve11[2],
                    "close": twelve_11[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve11[1],
                    "close": twelve_11[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve11[0],
                    "close": twelve_11[0]
                }
            ];
            var chartData12 = [
                {
                    "month": "DECEMBER",
                    "open": twelve12[11],
                    "close": twelve_12[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve12[10],
                    "close": twelve_12[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve12[9],
                    "close": twelve_12[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve12[8],
                    "close": twelve_12[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve12[7],
                    "close": twelve_12[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve12[6],
                    "close": twelve_12[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve12[5],
                    "close": twelve_12[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve12[4],
                    "close": twelve_12[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve12[3],
                    "close": twelve_12[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve12[2],
                    "close": twelve_12[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve12[1],
                    "close": twelve_12[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve12[0],
                    "close": twelve_12[0]
                }
            ];


            // SERIAL CHART
            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData10;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 80;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0.4;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;
            // valueAxis.title = "ANNULAR";
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "OPEN";
            graph1.valueField = "open";
            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "CLOSE";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('eleven_left');


            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData11;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write("twelve_left");


            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData12;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('thrtn_left');


            var chartDatav10 = [
                {
                    "open": vo10,
                    "close": vc10
                }

            ];


            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav10;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            // chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            // categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;

            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // var ttl = new AmCharts.Title();

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            graph1.labelText = "[[open]]";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('eleven_right');


            var chartDatav11 = [
                {
                    "open": vo11,
                    "close": vc11

                }

            ];


            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav11;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;
            // chart.plotAreaBorderAlpha = 1;

            // chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            // categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;

            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // var ttl = new AmCharts.Title();

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            graph1.labelText = "[[open]]";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('twelve_right');




            var chartDatav12 = [
                {
                    "open": vo12,
                    "close": vc12
                }

            ];


            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav12;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 45;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;


            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0.4;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum =0;
            valueAxis.maximum = max_count;
            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "Income:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            graph1.labelText = "[[open]]";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "Expenses:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);

            // WRITE
            chart.write('thrtn_right');

            $('#loading').hide();
        }

    });//end of reading data

}

/* code for function fail logs  by amit tiwari*/

function ffdiv1_plot(n,rig_id){

    var twelve = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_0 = [0,0,0,0,0,0,0,0,0,0,0,0];

    var twelve1 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_1 = [0,0,0,0,0,0,0,0,0,0,0,0];

    var twelve2 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_2 = [0,0,0,0,0,0,0,0,0,0,0,0];

    var twelve3 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_3 = [0,0,0,0,0,0,0,0,0,0,0,0];

    var twelve4 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_4 = [0,0,0,0,0,0,0,0,0,0,0,0];



    var vo=0,vo1=0,vo2=0,vo3=0,vo4=0;

    var vc=0,vc1=0,vc2=0,vc3=0,vc4=0;

    $(".fftitle1").html('');

    $(".fftitle1").append("Annular");

    $(".fftitle2").html('');

    $(".fftitle2").append("Blind/Shear");


    $(".fftitle3").html('');

    $(".fftitle3").append("Bypass");


    $(".fftitle4").html('');

    $(".fftitle4").append("Choke line");


    $(".fftitle5").html('');

    $(".fftitle5").append("Kill line");


    $('#loading').show();

    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url:'/ffunlog/'+n+'/'+rig_id,
        success: function (data) {
            JSON.stringify(data);


            if(data.message.length != 0) {


                y = data.message.length;

                y1 = data.message1.length;
                y2 = data.message3.length;
                y3 = data.message4.length;

                // max_count =  data.message.Cluster[y-1].I32[0].Val;
                max_count = 0;

                for(var i=0;i<y;i++){
                    if(max_count<data.message[i].Value)
                    {
                        max_count=data.message[i].Value;
                    }
                    switch(data.message[i].Valve_ID){
                        case 2:
                            vo = data.message[i].Value;
                            break;
                        case 4:
                            vo1 = data.message[i].Value;
                            break;
                        case 6:

                            vo2 = data.message[i].Value;
                            break;
                        case 8:
                            vo3 = data.message[i].Value;
                            break;
                        case 10:
                            vo4 = data.message[i].Value;
                            break;

                        default :

//                        vo4 = data.message[i].Value;
                            break;
                    }
                }

                for(var i=0;i<y1;i++){
                    if(max_count<data.message1[i].Value)
                    {
                        max_count=data.message1[i].Value;
                    }
                    switch(data.message1[i].Valve_ID){
                        case 1:
                            vc = data.message1[i].Value;
                            break;
                        case 3:
                            vc1 = data.message1[i].Value;
                            break;
                        case 5:
                            vc2 = data.message1[i].Value;
                            break;
                        case 7:
                            vc3 = data.message1[i].Value;
                            break;
                        case 9:
                            vc4 = data.message1[i].Value;
                            break;

                        default :
//                        vc4 = data.message[i].Value;
                            break;
                    }
                }




                var x1=0;
                for(var i=0;i<y2;i++){

                    if(data.message3[i].Valve_ID==2)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve[x1] = data.message3[i].Value;


                    }

                    if(data.message3[i].Valve_ID==4)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve1[x1] = data.message3[i].Value;

                    }

                    if(data.message3[i].Valve_ID==6)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve2[x1] = data.message3[i].Value;

                    }

                    if(data.message3[i].Valve_ID==8)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve3[x1] = data.message3[i].Value;

                    }

                    if(data.message3[i].Valve_ID==10)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve4[x1] = data.message3[i].Value;

                    }



                }


                for(var i=0;i<y3;i++){


                    if(data.message4[i].Valve_ID==1)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_0[x1] = data.message4[i].Value;


                    }

                    if(data.message4[i].Valve_ID==3)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_1[x1] = data.message4[i].Value;


                    }

                    if(data.message4[i].Valve_ID==5)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_2[x1] = data.message4[i].Value;

                    }

                    if(data.message4[i].Valve_ID==7)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_3[x1] = data.message4[i].Value;

                    }

                    if(data.message4[i].Valve_ID==9)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_4[x1] = data.message4[i].Value;

                    }


                }





            }//end of !=404

            else if(data.message == '404'){

                twelve = [0,0,0,0,0,0,0,0,0,0,0,0];
                twelve_0 = [0,0,0,0,0,0,0,0,0,0,0,0];

                twelve1 = [0,0,0,0,0,0,0,0,0,0,0,0];
                twelve_1 = [0,0,0,0,0,0,0,0,0,0,0,0];

                twelve2 = [0,0,0,0,0,0,0,0,0,0,0,0];
                twelve_2 = [0,0,0,0,0,0,0,0,0,0,0,0];

                twelve3 = [0,0,0,0,0,0,0,0,0,0,0,0];
                twelve_3 = [0,0,0,0,0,0,0,0,0,0,0,0];

                twelve4 = [0,0,0,0,0,0,0,0,0,0,0,0];
                twelve_4 = [0,0,0,0,0,0,0,0,0,0,0,0];


            }//end of else if 404

            var chartData = [
                {
                    "month": "DECEMBER",
                    "open": twelve[11],
                    "close": twelve_0[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve[10],
                    "close": twelve_0[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve[9],
                    "close": twelve_0[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve[8],
                    "close": twelve_0[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve[7],
                    "close": twelve_0[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve[6],
                    "close": twelve_0[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve[5],
                    "close": twelve_0[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve[4],
                    "close": twelve_0[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve[3],
                    "close": twelve_0[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve[2],
                    "close": twelve_0[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve[1],
                    "close": twelve_0[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve[0],
                    "close": twelve_0[0]
                }
            ];

            var chartData1 = [
                {
                    "month": "DECEMBER",
                    "open": twelve1[11],
                    "close": twelve_1[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve1[10],
                    "close": twelve_1[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve1[9],
                    "close": twelve_1[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve1[8],
                    "close": twelve_1[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve1[7],
                    "close": twelve_1[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve1[6],
                    "close": twelve_1[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve1[5],
                    "close": twelve_1[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve1[4],
                    "close": twelve_1[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve1[3],
                    "close": twelve_1[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve1[2],
                    "close": twelve_1[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve1[1],
                    "close": twelve_1[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve1[0],
                    "close": twelve_1[0]
                }
            ];
            var chartData2 = [
                {
                    "month": "DECEMBER",
                    "open": twelve2[11],
                    "close": twelve_2[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve2[10],
                    "close": twelve_2[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve2[9],
                    "close": twelve_2[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve2[8],
                    "close": twelve_2[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve2[7],
                    "close": twelve_2[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve2[6],
                    "close": twelve_2[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve2[5],
                    "close": twelve_2[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve2[4],
                    "close": twelve_2[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve2[3],
                    "close": twelve_2[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve2[2],
                    "close": twelve_2[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve2[1],
                    "close": twelve_2[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve2[0],
                    "close": twelve_2[0]
                }
            ];
            var chartData3 = [
                {
                    "month": "DECEMBER",
                    "open": twelve3[11],
                    "close": twelve_3[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve3[10],
                    "close": twelve_3[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve3[9],
                    "close": twelve_3[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve3[8],
                    "close": twelve_3[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve3[7],
                    "close": twelve_3[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve3[6],
                    "close": twelve_3[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve3[5],
                    "close": twelve_3[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve3[4],
                    "close": twelve_3[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve3[3],
                    "close": twelve_3[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve3[2],
                    "close": twelve_3[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve3[1],
                    "close": twelve_3[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve3[0],
                    "close": twelve_3[0]
                }
            ];

            var chartData4 = [
                {
                    "month": "DECEMBER",
                    "open": twelve4[11],
                    "close": twelve_4[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve4[10],
                    "close": twelve_4[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve4[9],
                    "close": twelve_4[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve4[8],
                    "close": twelve_4[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve4[7],
                    "close": twelve_4[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve4[6],
                    "close": twelve_4[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve4[5],
                    "close": twelve_4[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve4[4],
                    "close": twelve_4[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve4[3],
                    "close": twelve_4[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve4[2],
                    "close": twelve_4[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve4[1],
                    "close": twelve_4[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve4[0],
                    "close": twelve_4[0]
                }
            ];

            // SERIAL CHART
            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 80;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            // chart.plotAreaBorderColor = "#DADADA";
            // chart.plotAreaBorderAlpha = 1;

            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0.4;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;
            // valueAxis.title = "ANNULAR";
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "OPEN";
            graph1.valueField = "open";

            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "CLOSE";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

//        console.log('Max : '+max_count);
            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('fffirst_left');


            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData1;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;
            // chart.plotAreaBorderColor = "#DADADA";
            // chart.plotAreaBorderAlpha = 1;

            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write("ffsecond_left");


            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData2;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;
            // chart.plotAreaBorderColor = "#DADADA";
            // chart.plotAreaBorderAlpha = 1;

            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('ffthird_left');


            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData3;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;
            // chart.plotAreaBorderColor = "#DADADA";
            // chart.plotAreaBorderAlpha = 1;

            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('fffourth_left');


            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData4;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;
            // chart.plotAreaBorderColor = "#DADADA";
            // chart.plotAreaBorderAlpha = 1;

            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('fffifth_left');





            //Vertical charts plotting

            var chartDatav4 = [
                {
                    "open": vo4,
                    "close": vc4
                }

            ];


            // SERIAL CHART
            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav4;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 45;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;


            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0.4;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum =0;
            valueAxis.maximum = max_count;
            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "Income:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            graph1.labelText = "[[open]]";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "Expenses:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);


            // WRITE
            chart.write('fffifth_right');




            var chartDatav = [
                {
                    "open": vo,
                    "close": vc
                }

            ];


            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            // chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            // categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;

            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // var ttl = new AmCharts.Title();

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;

            graph1.labelText = "[[open]]";

            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('fffirst_right');


            var chartDatav1 = [
                {
                    "open": vo1,
                    "close": vc1
                }

            ];


            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav1;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            // chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            // categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;

            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // var ttl = new AmCharts.Title();

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            graph1.labelText = "[[open]]";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('ffsecond_right');


            var chartDatav2 = [
                {
                    "open": vo2,
                    "close": vc2
                },

            ];


            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav2;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            // chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            // categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;

            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // var ttl = new AmCharts.Title();

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            graph1.labelText = "[[open]]";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('ffthird_right');


            var chartDatav3 = [
                {
                    "open": vo3,
                    "close": vc3
                }

            ];


            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav3;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            // chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            // categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;

            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            graph1.labelText = "[[open]]";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);

            // WRITE
            chart.write('fffourth_right');

            $('#loading').hide();
        }
    });//end of reading data

}
function ffdiv2_plot(n,rig_id){

    var twelve5 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_5 = [0,0,0,0,0,0,0,0,0,0,0,0];


    var twelve6 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_6 = [0,0,0,0,0,0,0,0,0,0,0,0];

    var twelve7 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_7 = [0,0,0,0,0,0,0,0,0,0,0,0];

    var twelve8 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_8 = [0,0,0,0,0,0,0,0,0,0,0,0];

    var twelve9 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_9 = [0,0,0,0,0,0,0,0,0,0,0,0];


    var vo5=0,vo6=0,vo7=0,vo8=0,vo9=0;

    var vc5=0,vc6=0,vc7=0,vc8=0,vc9=0;




    $(".fftitle6").html('');

    $(".fftitle6").append("Pipe ram 1");

    $(".fftitle7").html('');

    $(".fftitle7").append("Pipe ram 2");

    $(".fftitle8").html('');

    $(".fftitle8").append("Choke Line 2");


    $(".fftitle9").html('');

    $(".fftitle9").append("Kill Line 2");

    $(".fftitle10").html('');

    $(".fftitle10").append("Piperam 3");


    $('#loading').show();

    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url:'/ffunlog/'+n+'/'+rig_id,
        success: function (data) {
            JSON.stringify(data);


            if(data.message.length != 0) {



                y = data.message.length;

                y1 = data.message1.length;
                y2 = data.message3.length;
                y3 = data.message4.length;

                // max_count =  data.message.Cluster[y-1].I32[0].Val;
                max_count = 0;


                for(var i=0;i<y;i++){
                    if(max_count<data.message[i].Value)
                    {
                        max_count=data.message[i].Value;
                    }
                    switch(data.message[i].Valve_ID){
                        case 12:
                            vo5 = data.message[i].Value;
                            break;
                        case 14:
                            vo6 = data.message[i].Value;
                            break;
                        case 16:
                            vo7 = data.message[i].Value;
                            break;
                        case 18:
                            vo8 = data.message[i].Value;
                            break;
                        case 20:
                            vo9 = data.message[i].Value;
                            break;

                        default :

                            break;
                    }
                }

                for(var i=0;i<y1;i++){
                    if(max_count<data.message1[i].Value)
                    {
                        max_count=data.message1[i].Value;
                    }
                    switch(data.message1[i].Valve_ID){
                        case 11:
                            vc5 = data.message1[i].Value;
                            break;
                        case 13:
                            vc6 = data.message1[i].Value;
                            break;
                        case 15:
                            vc7 = data.message1[i].Value;
                            break;
                        case 17:
                            vc8 = data.message1[i].Value;
                            break;
                        case 19:
                            vc9 = data.message1[i].Value;
                            break;

                        default :

                            break;
                    }
                }


                var x1=0;
                for(var i=0;i<y2;i++){

                    if(data.message3[i].Valve_ID==12)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve5[x1] = data.message3[i].Value;


                    }

                    if(data.message3[i].Valve_ID==14)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve6[x1] = data.message3[i].Value;

                    }

                    if(data.message3[i].Valve_ID==16)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve7[x1] = data.message3[i].Value;

                    }

                    if(data.message3[i].Valve_ID==18)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve8[x1] = data.message3[i].Value;

                    }
                    if(data.message3[i].Valve_ID==20)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve9[x1] = data.message3[i].Value;

                    }



                }


                for(var i=0;i<y3;i++){


                    if(data.message4[i].Valve_ID==11)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_5[x1] = data.message4[i].Value;


                    }

                    if(data.message4[i].Valve_ID==13)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_6[x1] = data.message4[i].Value;


                    }

                    if(data.message4[i].Valve_ID==15)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_7[x1] = data.message4[i].Value;


                    }
                    if(data.message4[i].Valve_ID==17)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_8[x1] = data.message4[i].Value;


                    }
                    if(data.message4[i].Valve_ID==19)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_9[x1] = data.message4[i].Value;


                    }



                }


            }


            else
            if (data.message == '404') {


                twelve5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                twelve_5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


                twelve6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                twelve_6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                twelve7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                twelve_7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                twelve8 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                twelve_8 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                twelve9 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                twelve_9 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

            }//end of else if 404


            //PAGE 2

            var chartData5 = [
                {
                    "month": "DECEMBER",
                    "open": twelve5[11],
                    "close": twelve_5[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve5[10],
                    "close": twelve_5[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve5[9],
                    "close": twelve_5[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve5[8],
                    "close": twelve_5[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve5[7],
                    "close": twelve_5[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve5[6],
                    "close": twelve_5[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve5[5],
                    "close": twelve_5[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve5[4],
                    "close": twelve_5[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve5[3],
                    "close": twelve_5[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve5[2],
                    "close": twelve_5[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve5[1],
                    "close": twelve_5[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve5[0],
                    "close": twelve_5[0]
                }
            ];


            var chartData6 = [
                {
                    "month": "DECEMBER",
                    "open": twelve6[11],
                    "close": twelve_6[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve6[10],
                    "close": twelve_6[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve6[9],
                    "close": twelve_6[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve6[8],
                    "close": twelve_6[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve6[7],
                    "close": twelve_6[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve6[6],
                    "close": twelve_6[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve6[5],
                    "close": twelve_6[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve6[4],
                    "close": twelve_6[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve6[3],
                    "close": twelve_6[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve6[2],
                    "close": twelve_6[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve6[1],
                    "close": twelve_6[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve6[0],
                    "close": twelve_6[0]
                }
            ];

            var chartData7 = [
                {
                    "month": "DECEMBER",
                    "open": twelve7[11],
                    "close": twelve_7[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve7[10],
                    "close": twelve_7[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve7[9],
                    "close": twelve_7[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve7[8],
                    "close": twelve_7[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve7[7],
                    "close": twelve_7[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve7[6],
                    "close": twelve_7[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve7[5],
                    "close": twelve_7[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve7[4],
                    "close": twelve_7[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve7[3],
                    "close": twelve_7[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve7[2],
                    "close": twelve_7[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve7[1],
                    "close": twelve_7[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve7[0],
                    "close": twelve_7[0]
                }
            ];
            var chartData8 = [
                {
                    "month": "DECEMBER",
                    "open": twelve8[11],
                    "close": twelve_8[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve8[10],
                    "close": twelve_8[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve8[9],
                    "close": twelve_8[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve8[8],
                    "close": twelve_8[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve8[7],
                    "close": twelve_8[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve8[6],
                    "close": twelve_8[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve8[5],
                    "close": twelve_8[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve8[4],
                    "close": twelve_8[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve8[3],
                    "close": twelve_8[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve8[2],
                    "close": twelve_8[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve8[1],
                    "close": twelve_8[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve8[0],
                    "close": twelve_8[0]
                }
            ];

            var chartData9 = [
                {
                    "month": "DECEMBER",
                    "open": twelve9[11],
                    "close": twelve_9[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve9[10],
                    "close": twelve_9[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve9[9],
                    "close": twelve_9[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve9[8],
                    "close": twelve_9[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve9[7],
                    "close": twelve_9[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve9[6],
                    "close": twelve_9[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve9[5],
                    "close": twelve_9[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve9[4],
                    "close": twelve_9[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve9[3],
                    "close": twelve_9[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve9[2],
                    "close": twelve_9[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve9[1],
                    "close": twelve_9[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve9[0],
                    "close": twelve_9[0]
                }
            ];

            // SERIAL CHART
            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData5;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 80;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;
            // chart.plotAreaBorderColor = "#DADADA";
            // chart.plotAreaBorderAlpha = 1;

            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0.4;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;
            // valueAxis.title = "ANNULAR";
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "OPEN";
            graph1.valueField = "open";
            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "CLOSE";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('ffsix_left');


            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData6;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write("ffseven_left");


            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData7;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;
            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('ffeight_left');


            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData8;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;
            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('ffnine_left');


            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData9;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;
            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('fften_left');



            var chartDatav9 = [
                {
                    "open": vo9,
                    "close": vc9
                }

            ];


            // SERIAL CHART
            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav9;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 45;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;


            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0.4;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum =0;
            valueAxis.maximum = max_count;
            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "Income:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            graph1.labelText = "[[open]]";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "Expenses:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);


            // WRITE
            chart.write('fften_right');




            var chartDatav5 = [
                {
                    "open": vo5,
                    "close": vc5
                }

            ];


            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav5;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            // chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            // categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;

            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // var ttl = new AmCharts.Title();

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            graph1.labelText = "[[open]]";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('ffsix_right');


            var chartDatav6 = [
                {
                    "open": vo6,
                    "close": vc6
                }

            ];


            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav6;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            // chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            // categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;

            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // var ttl = new AmCharts.Title();

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            graph1.labelText = "[[open]]";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('ffseven_right');


            var chartDatav7 = [
                {
                    "open": vo7,
                    "close": vc7
                }

            ];


            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav7;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            // chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            // categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;

            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // var ttl = new AmCharts.Title();

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            graph1.labelText = "[[open]]";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('ffeight_right');


            var chartDatav8 = [
                {
                    "open": vo8,
                    "close": vc8
                }

            ];


            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav8;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            // chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            // categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;

            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            graph1.labelText = "[[open]]";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);

            // WRITE
            chart.write('ffnine_right');


            $('#loading').hide();
        }
    });//end of reading data

}
function ffdiv3_plot(n,rig_id){



    var twelve10 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_10 = [0,0,0,0,0,0,0,0,0,0,0,0];


    var twelve11 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_11 = [0,0,0,0,0,0,0,0,0,0,0,0];

    var twelve12 = [0,0,0,0,0,0,0,0,0,0,0,0];
    var twelve_12 = [0,0,0,0,0,0,0,0,0,0,0,0];




    var vo10=0,vo11=0,vo12=0,vo13=0,vo14=0;

    var vc10=0,vc11=0,vc12=0,vc13=0,vc14=0;




    $(".fftitle11").html('');

    $(".fftitle11").append("HCR 1");

    $(".fftitle12").html('');

    $(".fftitle12").append("HCR 2");

    $(".fftitle13").html('');

    $(".fftitle13").append("Spare");


    $('#loading').show();

    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url:'/ffunlog/'+n+'/'+rig_id,
        success: function (data) {
            JSON.stringify(data);


            if(data.message.length != 0) {



                y = data.message.length;

                y1 = data.message1.length;
                y2 = data.message3.length;
                y3 = data.message4.length;

                // max_count =  data.message.Cluster[y-1].I32[0].Val;
                max_count = 0;


                for(var i=0;i<y;i++){
                    if(max_count<data.message[i].Value)
                    {
                        max_count=data.message[i].Value;
                    }
                    switch(data.message[i].Valve_ID){
                        case 22:
                            vo10 = data.message[i].Value;
                            break;
                        case 24:
                            vo11 = data.message[i].Value;
                            break;
                        case 26:
                            vo12 = data.message[i].Value;
                            break;

                        default :

                            break;
                    }
                }

                for(var i=0;i<y1;i++){
                    if(max_count<data.message1[i].Value)
                    {
                        max_count=data.message1[i].Value;
                    }
                    switch(data.message1[i].Valve_ID){
                        case 21:
                            vc10 = data.message1[i].Value;
                            break;
                        case 23:
                            vc11 = data.message1[i].Value;
                            break;
                        case 25:
                            vc12 = data.message1[i].Value;
                            break;

                        default :

                            break;
                    }
                }


                var x1=0;
                for(var i=0;i<y2;i++){

                    if(data.message3[i].Valve_ID==22)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve10[x1] = data.message3[i].Value;


                    }

                    if(data.message3[i].Valve_ID==24)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve11[x1] = data.message3[i].Value;

                    }
                    if(data.message3[i].Valve_ID==26)
                    {
                        x1=data.message3[i].mnth-1;
                        twelve12[x1] = data.message3[i].Value;

                    }



                }


                for(var i=0;i<y3;i++){


                    if(data.message4[i].Valve_ID==21)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_10[x1] = data.message4[i].Value;


                    }

                    if(data.message4[i].Valve_ID==23)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_11[x1] = data.message4[i].Value;


                    }
                    if(data.message4[i].Valve_ID==25)
                    {
                        x1=data.message4[i].mnth-1;
                        twelve_12[x1] = data.message4[i].Value;


                    }



                }


            }


            else
            if (data.message == '404') {


                twelve10 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                twelve_10 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


                twelve11 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                twelve_11 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

                twelve11 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                twelve_11 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

            }//end of else if 404


            //PAGE 2


            var chartData10 = [
                {
                    "month": "DECEMBER",
                    "open": twelve10[11],
                    "close": twelve_10[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve10[10],
                    "close": twelve_10[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve10[9],
                    "close": twelve_10[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve10[8],
                    "close": twelve_10[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve10[7],
                    "close": twelve_10[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve10[6],
                    "close": twelve_10[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve10[5],
                    "close": twelve_10[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve10[4],
                    "close": twelve_10[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve10[3],
                    "close": twelve_10[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve10[2],
                    "close": twelve_10[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve10[1],
                    "close": twelve_10[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve10[0],
                    "close": twelve_10[0]
                }
            ];

            var chartData11 = [
                {
                    "month": "DECEMBER",
                    "open": twelve11[11],
                    "close": twelve_11[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve11[10],
                    "close": twelve_11[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve11[9],
                    "close": twelve_11[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve11[8],
                    "close": twelve_11[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve11[7],
                    "close": twelve_11[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve11[6],
                    "close": twelve_11[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve11[5],
                    "close": twelve_11[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve11[4],
                    "close": twelve_11[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve11[3],
                    "close": twelve_11[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve11[2],
                    "close": twelve_11[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve11[1],
                    "close": twelve_11[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve11[0],
                    "close": twelve_11[0]
                }
            ];
            var chartData12 = [
                {
                    "month": "DECEMBER",
                    "open": twelve12[11],
                    "close": twelve_12[11]
                },
                {
                    "month": "NOVEMBER",
                    "open": twelve12[10],
                    "close": twelve_12[10]
                },
                {
                    "month": "OCTOBER",
                    "open":  twelve12[9],
                    "close": twelve_12[9]
                },
                {
                    "month": "SEPTEMBER",
                    "open":  twelve12[8],
                    "close": twelve_12[8]
                },
                {
                    "month": 'AUGUST',
                    "open":  twelve12[7],
                    "close": twelve_12[7]
                },
                {
                    "month": "JULY",
                    "open":  twelve12[6],
                    "close": twelve_12[6]
                },
                {
                    "month": "JUNE",
                    "open":  twelve12[5],
                    "close": twelve_12[5]
                },
                {
                    "month": "MAY",
                    "open":  twelve12[4],
                    "close": twelve_12[4]
                },
                {
                    "month": "APRIL",
                    "open":  twelve12[3],
                    "close": twelve_12[3]
                },
                {
                    "month": 'MARCH',
                    "open":  twelve12[2],
                    "close": twelve_12[2]
                },
                {
                    "month": "FEBRUARY",
                    "open": twelve12[1],
                    "close": twelve_12[1]
                },
                {
                    "month": "JANUARY",
                    "open": twelve12[0],
                    "close": twelve_12[0]
                }
            ];


            // SERIAL CHART
            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData10;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 80;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0.4;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;
            // valueAxis.title = "ANNULAR";
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "OPEN";
            graph1.valueField = "open";
            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "CLOSE";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('ffeleven_left');


            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData11;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write("fftwelve_left");


            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData12;
            chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 0;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0.5;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;
            // valueAxis.position = "top";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            graph1.labelText = "[[value]]";
            graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            graph2.labelText = "[[value]]";
            graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('ffthrtn_left');


            var chartDatav10 = [
                {
                    "open": vo10,
                    "close": vc10
                }

            ];


            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav10;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;

            // chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            // categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;

            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // var ttl = new AmCharts.Title();

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            graph1.labelText = "[[open]]";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('ffeleven_right');


            var chartDatav11 = [
                {
                    "open": vo11,
                    "close": vc11

                }

            ];


            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav11;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 0;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;
            // chart.plotAreaBorderAlpha = 1;

            // chart.rotate = true;

            // AXES
            // Category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            // categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum = 0;
            valueAxis.maximum = max_count;

            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // var ttl = new AmCharts.Title();

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "open:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            graph1.labelText = "[[open]]";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "close:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);

            // LEGEND
            // var legend = new AmCharts.AmLegend();
            // chart.addLegend(legend);

            // WRITE
            chart.write('fftwelve_right');




            var chartDatav12 = [
                {
                    "open": vo12,
                    "close": vc12
                }

            ];


            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartDatav12;
            // chart.categoryField = "month";
            chart.startDuration = 1;
            chart.columnSpacing = 4;
            chart.autoMargins = false;
            chart.marginRight = 45;
            chart.marginLeft = 0;
            chart.marginBottom = 10;
            chart.marginTop = 20;
            chart.fontSize = 10;


            var categoryAxis = chart.categoryAxis;
            categoryAxis.gridPosition = "start";
            categoryAxis.gridAlpha = 0;
            categoryAxis.axisAlpha = 0;
            categoryAxis.dashLength = 5;
            // categoryAxis.autoGridCount  = false;
            // categoryAxis.gridCount = 24;


            // Value
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.axisAlpha = 0.4;
            valueAxis.gridAlpha = 0;
            valueAxis.dashLength = 5;
            valueAxis.minimum =0;
            valueAxis.maximum = max_count;
            // valueAxis.autoGridCount  = false;
            // valueAxis.gridCount = 12;
            valueAxis.position = "right";

            chart.addValueAxis(valueAxis);

            // GRAPHS
            // first graph
            var graph1 = new AmCharts.AmGraph();
            graph1.type = "column";
            // graph1.labelText = "[[value]]";
            // graph1.labelPosition = "bottom";
            graph1.title = "open";
            graph1.valueField = "open";
            // graph1.balloonText = "Income:[[value]]";
            graph1.lineAlpha = 0;
            graph1.fillColors = "#6CD6CF";
            graph1.fillAlphas = 1;
            graph1.labelText = "[[open]]";
            chart.addGraph(graph1);

            // second graph
            var graph2 = new AmCharts.AmGraph();
            graph2.type = "column";
            // graph2.labelText = "[[value]]";
            // graph2.labelPosition = "bottom";
            graph2.title = "close";
            graph2.valueField = "close";
            // graph2.balloonText = "Expenses:[[value]]";
            graph2.lineAlpha = 0;
            graph2.fillColors = "#999999";
            graph2.fillAlphas = 1;
            graph2.labelText = "[[close]]";
            chart.addGraph(graph2);

            // WRITE
            chart.write('ffthrtn_right');

            $('#loading').hide();
        }

    });//end of reading data

}
