/**
 * Created by Administrator on 2/23/2016.
 */

$(function() {
    var rig_id=33;

    $('#data').append(alarmcontent());
    $('.f1').append(userinfo());
    $('.f2').append(alarm_footer());
    user_name();  //check user

    //here get selected rigname
    var rigname = window.localStorage.getItem("rgnm");
//    console.log(rigname);
    //  $('#rig_lbl').text(rigname); //display rigname


    window.onload = fcall;
    window.onresize=fcall_1;


//    binddata_bop_stac(rig_id,$('#dropdown1').val());

//    $('#dropdown1').change(function(){
//        var bopid = $(this).val();
//
//         binddata_bop_stac(rig_id,bopid);
//
////        alert($(this).val());
//    });

    pmp_data(rig_id);

    base_sett(rig_id);

    rig_dts(rig_id);

    table_adjust();


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
});


function fcall_1(){

    //  resize();
    table_adjust();
//    get_colum_data($('#year').val(),$('#month').val(),$('#trace').val());
//    get_colum_data1($('#year').val(),$('#month').val(),$('#trace').val());
}
function fcall(){

    ptab();
    //  resize();
//    tot_op_cls(opn_clos_tot);
//    tot_op_cls1(opn_clos_tot);


}
function table_adjust()
{

//            alert('call');
    var $table = $('table.scroll'),
        $bodyCells = $table.find('tbody tr:first').children(),
        colWidth;
    colWidth = $bodyCells.map(function() {
        return $(this).width();
    }).get();

    // Set the width of thead columns
    $table.find('thead tr').children().each(function(i, v) {
        $(v).width(colWidth[i]+1);
    });

}
function resize() {
//    var w = getwidth();  //' gives the height and width of all the images and stores it in an array w such that the column 1 corresponds to the widhts and column 2 corresponds to the heights.

    var w=[
        [180,25],//0
        [130,25],//1
        [130,25],//2
        [130,25],//3
        [130,25],//4
        [248,35],//5
        [248,35],//6
        [248,35],//7
        [248,35],//8
        [248,35],//9
        [233,29.5],
        [1760.5,563.5],
        [200,25],
        [200,25],
        [550,25],
        [420,25],
        [550,25],
        [260,25],
        [320,25],
        [270,25],
        [120,28],//20
        [120,28],
        [120,28],
        [120,28],
        [120,28],
        [120,28],
        [120,28],
        [120,28],
        [22,21],
        [22,21],
        [22,21],
        [22,21],
        [22,21],
        [22,21],
        [22,21],
        [233,29.5],
        [1915,618.5],
        [1863,44.5],
        [98,20],
        [500,57],
        [1915,35],              //44 btm arw
        [1915,37],[37,38],[30,35],[32,15]
//            [21,21],
//            [21,21],
//            [21,21],
//            [21,21],
//            [21,21],
//            [21,21],
//            [21,21],
//            [21,21],
//            [21,21],
//            [21,21],
//            [21,21],
//            [21,21],
//            [21,21],
//            [21,21],
//            [21,21],
//            [21,21],
//            [21,21],
//            [21,21],
//            [21,21],
//            [21,21],
//            [21,21],
//            [21,21],
//            [21,21],
//            [21,21],
//            [21,21],
//            [21,21],
//            [21,21],
//            [1900,45],
//            [145,22],
//            [1900,44.5],
//            [728.266,44.5],
//            [14,17],
//            [1900,35],
//            [1900,35]
//
////        [1680,670]
//
////        [180,21],
////        [180,21],
////        [180,21],
////        [220,76],
////        [180,21],
////        [180,21],
////        [180,21],
////        [200,20],
////        [123,20],
////        [123,20],
////        [123,20],
////        [123,20],
////        [21,21],
////        [21,21],
////        [1526.5,471.5],
////        [21,21],
////        [21,21],
////        [1900,44.5],
////        [1900,44.5],
////        [0.001,44.5],
////        [0.001,17],
////        [0.001,17],
////        [500,42],
////        [37,38],
////        [350,30],
////        [350,30],
////        [500,250],
////        [500,250],
////        [500,250],
////        [1582,350],
////        [0.001,0.01],
////        [500,235],
////        [1582,350],
////        [823,350],
////        [823,35],
////        [823,22],
////        [823,350],
////        [823,320],
////        [823,320],
////        [823,290],
////        [823,320],
////        [823,22],
////        [823,290],
////        [823,320],
////        [823,290],
////
////        [1900,35]
    ];




    ly = $(window).height();
    lx = $(window).width();
    var rad_tg = Math.sqrt(Math.pow(110.6415, 2) * (lx / 1920) * (ly / 2160));


//    $('#info').text(lx);
    var x = [
        [239.897,256.760],                  //Input the margins for all the images.
        [239.897,329.924],
        [239.897,403.088],
        [239.897,476.252],
        [239.897,549.416],
        [594.5,256.5],
        [594.5,329.5],
        [594.5,403.5],
        [594.5,476.5],
        [594.5,549.5],
        [73.5,-100.5],
        [74,156],
        [246.99,185.455],
        [246.99,250.669],
        [246.99,315.885],
        [246.99,381.1],
        [246.99,446.313],
        [246.99,511.528],
        [246.99,576.742],
        [246.99,641.957],
        [858.5,180.5],
        [858.5,245.5],
        [858.5,310.5],
        [858.5,376.5],
        [858.5,441.5],
        [858.5,506.5],
        [858.5,570.5],
        [858.5,636.5],
        [985,185.455],
        [985,250.669],
        [985,315.885],
        [985,381.1],
        [985,446.313],
        [985,511.528],
        [985,641.957],
        [73.5,40.5],
        [-0.5,122.5],
        [37,0.001],
        [0.001,0.001],
        [18.943,19.161],
        [0.5,1001],                              //44 btm arw
        [0.5,1036],[19.046,18.667],[1850.5,19.161],[1035,1022]
//            [1060.165,70],
//            [1080.165,70],
//            [1110.165,70],
//            [1130.165,70],
//            [1165.165,70],
//            [1185.165,70],
//            [1220.165,70],
//            [1240.165,70],
//            [1270.165,70],
//            [1290.165,70],
//            [1325.165,70],
//            [1345.165,70],
//            [1375.165,70],
//            [1395.165,70],
//            [1430.165,70],
//            [1450.165,70],
//            [1480.165,70],
//            [1500.165,70],
//            [1535.165,70],
//            [1555.165,70],
//            [1590.165,70],
//            [1610.165,70],
//            [1640.165,70],
//            [1660.165,70],
//            [1695.165,70],
//            [1715.165,70],
//            [1745.165,70],
//            [1765.165,70],
//            [0.5,71.5],
//            [160.165,30],
//            [0.001,0.001],
//            [37,0],
//            [0.001,0.001],
//            [0.5,1001],
//            [0.5,1036]
//
////        [0.001,0.001],
////        [0.001,0.001],
////        [308,2.5],
////        [598,2.5],
////        [908,2.5],
////        [1430,2.5],
////        [1192.196,2.5],
////        [1772.196,2.5],
////        [33,51],
////        [308,51],
////        [598,51],
////        [908,51],
////        [1430,51],
////        [1192.196,51],
////        [1772.196,51],
////        [111.5,300.7],
////        [33,8.4],
////        [33,8.4],
////        [0.5,71.5],
////        [0.5,71.5],
////        [37,0.001],
////        [2,13],
////        [10,0.001],
////        [18.943,19.161],
////        [18.943,19.161],
////        [79.938,30],
////        [362.5,30],
////        [72.938,75],
////        [705.5,75],
////        [1334.5,75],
////        [72.95,368],
////        [0.001,352.5],
////        [0.001,352.5],
////        [0.001,352.5],
////        [68.5,0],
////        [68.5,18],
////        [68.5,18],
////        [1008.938,0],
////        [0.001,40],
////        [0.001,20],
////        [0.001,30],
////        [68.438,420],
////        [0.001,-10],
////        [68.438,420],
////        [1008.938,420],
////        [68.438,420],
////        [0.5,1001],
////        [0.5,1036]
    ];



    m = zeros([img_index, 2]);
    c = zeros([img_index, 2]);
    w_ = zeros([img_index, 2]);


    x_ = zeros([img_index, 2]);

    for (var i = 0; i < x.length; i++) {
        for (var j = 0; j < x[i].length; j++) {
            if (j == 0) {
                c[i][j] = x[i][j] / 1920;

                m[i][j] = w[i][j] / 1920;
                w_[i][j] = (m[i][j]) * lx;


            }
            else {
                c[i][j] = x[i][j] / 1080;
                m[i][j] = w[i][j] / 1080;
                w_[i][j] = (m[i][j]) * ly;

            }



        }
    }

    x_[0][0] = c[0][0] * lx;
    x_[0][1] = c[0][1] * ly;



    for (var i = 0; i < x.length; i++) {
        for (var j = 0; j < x[i].length; j++) {
            if (j == 0) {
                var arr1 = w[i][j] / w[i][j + 1];

                var arr2 = w_[i][j] / w_[i][j + 1];

                if (arr2 > arr1) {
                    w_[i][j] = arr1 * w_[i][j + 1];
                }
                else {
                    w_[i][j + 1] = w_[i][j] / arr1;
                }

            }
            else {

            }
        }
    }

    for (var i = 0; i < x.length - 1; i++) {
        for (var j = 0; j < x[i].length; j++) {
            if (j == 0) {
                x_[i+1][j] = x_[i ][j] + ((x[i+1][j] - x[i ][j]) / w[i ][j]) * w_[i ][j];
            }
            else {
                x_[i+1][j] = x_[i ][j] + ((x[i+1][j] - x[i][j]) / w[i+1][j]) * w_[i+1][j] ;
            }
        }
    }


    var F01 = .033, F_0;
    var F11 = .048, F_1;
    var font=.0000102 * lx *ly;

//    F_0 = w_[56][1] * F01;
//    F_1 = w_[56][1] * F11;

//
//    if (x_[56][1] + w_[56][1] + F_0 + F_1 > ly) {
//        F_0 = (35 / 72) * (ly - (x_[56][1] + w_[56][1]));
//        F_1 = (37 / 72) * (ly - (x_[56][1] + w_[56][1]));
//    }





    $('#rig').show();
    $('#bop').show();
    $('#chk').show();
    $('#ground1').show();
    $('#ground2').show();

    $('.map').show();
    $('.p_log').show();
    $('.f1').show();
    $('.f2').show();
    $("#main").show();
}

function show_dialog() {
    $('#data').modal();

}
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

var n;


function rig_dts(rigid)
{
    // socket.on('plot', function (data) {
    $.get('/det/'+rigid, {}, function(data){
        JSON.stringify(data);
        $("#five").text(data.message[0].rig_name);
        $("#four").text(data.message[0].rig_id);
        $("#three").text(data.message[0].latitude +','+ data.message[0].longitude);
        $("#two").text(data.message[0].location);
        $("#one").text(data.message[0].customer_name);

    });

}

function binddata_bop_stac(rigid,bopid){

    $('#bop_stng').html('');var ctrl= 0,cal=0;
    // socket.on('plot', function (data) {
    $.get('/bop_set/'+rigid+'/'+bopid, {}, function(data){
        JSON.stringify(data);
        for (i = 0; i < data.message.length; i++) {
            ctrl++;
            $("#bop_stng").append("<tr><td>" + data.message[i].valve_name+ "</td><td>" + data.message[i].make+ "</td><td>" + data.message[i].model+ "</td><td>" + data.message[i].bore_size+ "</td><td>" + data.message[i].max_working_press+ "</td><td>" + data.message[i].operating_press+ "</td><td>" + data.message[i].gallons_to_close+ "</td><td>" + data.message[i].gallons_to_open+ "</td></tr>");
        }

        if(ctrl>16)
        {
            cal=16-(ctrl);
        }


        if(ctrl==1)
        {
            cal=17-(ctrl);
        }
        else
        {
            cal=16-(ctrl);
        }


        if(cal>0)
        {
            for(j=0;j<cal;j++)
            {
                $("#bop_stng").append("<tr style='height: 30px;'><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");

            }
        }
        table_adjust();
    });




}

function pmp_data(rigid)
{
    // socket.on('plot', function (data) {
    $.get('/pmp_st/'+rigid, {}, function(data){
        JSON.stringify(data);
        $("#yo7").text(data.message[0].vol_of_accum);
        $("#yo6").text(data.message[0].no_of_accum_bottle);
        $("#yo5").text(data.message[0].manif_set_press);
        $("#yo4").text(data.message[0].accum_press);
        $("#yo3").text(data.message[0].pump_runtime);
        $("#yo2").text(data.message[0].time_to_charge_3000);
        $("#yo1").text(data.message[0].pump_stop_press);
        $("#yo").text(data.message[0].pump_start_press);

    });
}

function base_sett(rigid)
{
    rigid=1;
    var ctrl= 0,cal=0;

    $.get('/base_st/'+rigid, {}, function(data){
        JSON.stringify(data);
        for (i = 0; i < data.message.length; i++) {
            ctrl++;
            //$("#base_stng").append("<tr><td>" + data.message[i].sr_no+ "</td><td>" + data.message[i].valve_name+ "</td><td>" + data.message[i].make+ "</td><td>" + data.message[i].model+ "</td><td>" + data.message[i].size+ "</td><td>" + data.message[i].max_working_pressure+ "</td><td>" + data.message[i].accum_pressure+ "</td><td>" + data.message[i].manif_pressure+ "</td><td>" + data.message[i].response_time+ "</td></tr>");
            $("#base_stng").append("<tr><td>" + ctrl+ "</td><td>" + data.message[i].valve_name+ "</td><td>" + data.message[i].accum_pressure+ "</td><td>" + data.message[i].manif_pressure+ "</td><td>" + new Date(data.message[i].date_time).toString("dd/MM/yyyy")+ "</td><td>" + data.message[i].response_time+ "</td></tr>");
        }
        if(ctrl>18)
        {
            cal=18-(ctrl);
        }


        if(ctrl==1)
        {
            cal=19-(ctrl);
        }
        else
        {
            cal=18-(ctrl);
        }


        if(cal>0)
        {
            for(j=0;j<cal;j++)
            {
                $("#base_stng").append("<tr style='height: 24.724px;'><td></td><td></td><td></td><td></td><td></td><td></td></tr>");

            }
        }

    });


    table_adjust();
}
