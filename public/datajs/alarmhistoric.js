/**
 * Created by Administrator on 2/23/2016.
 */
var img_index = 38;
function zeros(dimensions) {
    var array = [];

    for (var i = 0; i < dimensions[0]; ++i) {
        array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
    }

    return array;
}

function resize() {
//    var w = getwidth();  //' gives the height and width of all the images and stores it in an array w such that the column 1 corresponds to the width and column 2 corresponds to the heights.

    //width,height
    //0 home  1 h_log  2log_out 3 head 4 contnt   5 f1        6 f2  8 hcr 1   9 chk2    10 kill2  11 chk1   12 kill1  13 ppr3
    var w=[[37,38],[30,35],[320,45],[100,45],[1754,790],[1918,37],[1918,37]
    ];




    var ly = $(window).height();
    var lx = $(window).width();

    var rad_tg = Math.sqrt(Math.pow(110.6415, 2) * (lx / 1920) * (ly / 2160));



    $('#main').show();
}


$(function() {
    /*
     $('.f1').append(userinfo());
     */

    $('#data').append(alarmcontent());
    $('.f1').append(userinfo());
    $('.f2').append(alarm_footer());
    user_name();  //check user

    //here get selected rigname
    var rigname = window.localStorage.getItem("rgnm");
    //    console.log(rigname);
    //	$('#rig_lbl').text(rigname); //display rigname


    window.onload = fcall;
    window.onresize=fcall_1;
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

    resize();
    table_adjust();
    //    get_colum_data($('#year').val(),$('#month').val(),$('#trace').val());
    //    get_colum_data1($('#year').val(),$('#month').val(),$('#trace').val());
}
function fcall(){

    ptab();
    resize();
    //    tot_op_cls(opn_clos_tot);
    //    tot_op_cls1(opn_clos_tot);


}




$(function () {
    $('#txtfr').datetimepicker({
        timepicker: false,
        format: 'Y-m-d'
    });

    $('#txtto').datetimepicker({
        timepicker: false,
        format: 'Y-m-d'
    });

    window.onload = resize;
    window.onresize=resize;

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


    // Helper function to convert a string of the form "Mar 15, 1987" into
    // a Date object.
    var date_from_string = function(str){
        var months = ["jan","feb","mar","apr","may","jun","jul",
            "aug","sep","oct","nov","dec"];
        var pattern = "^([a-zA-Z]{3})\\s*(\\d{2}),\\s*(\\d{4})$";
        var re = new RegExp(pattern);
        var DateParts = re.exec(str).slice(1);

        var Year = DateParts[2];
        var Month = $.inArray(DateParts[0].toLowerCase(), months);
        var Day = DateParts[1];
        return new Date(Year, Month, Day);
    }

    var moveBlanks = function(a, b) {
        if ( a < b ){
            if (a == "")
                return 1;
            else
                return -1;
        }
        if ( a > b ){
            if (b == "")
                return -1;
            else
                return 1;
        }
        return 0;
    };
    var moveBlanksDesc = function(a, b) {
        // Blanks are by definition the smallest value, so we don't have to
        // worry about them here
        if ( a < b )
            return 1;
        if ( a > b )
            return -1;
        return 0;
    };

    var table = $("#val_alarm,#oth_alarm").stupidtable({
        "date":function(a,b){
            // Get these into date objects for comparison.

            aDate = date_from_string(a);
            bDate = date_from_string(b);

            return aDate - bDate;
        },
        "moveBlanks": moveBlanks,
        "moveBlanksDesc": moveBlanksDesc,
    });

    table.on("beforetablesort", function (event, data) {
        // data.column - the index of the column sorted after a click
        // data.direction - the sorting direction (either asc or desc)
        $("#msg").text("Sorting index " + data.column)
    });

    table.on("aftertablesort", function (event, data) {
        var th = $(this).find("th");
        th.find(".arrow").remove();
        var dir = $.fn.stupidtable.dir;

        var arrow = data.direction === dir.ASC ? "&uarr;" : "&darr;";
        th.eq(data.column).append('<span class="arrow">' + arrow +'</span>');
    });


});

var value='',comdt='',len= 0;
var arry=[];
function fetchdata(fm,tm){
    var rigid='1';
    var frm=new Date(Date.parse(fm));
    var to=new Date(Date.parse(tm));
    frm= frm.getTime()/1000;//converting into unix timestamp
    to= to.getTime()/1000;//converting into unix timestamp
    //to.setDate(to.getDate() + 1);

    var s_no= 0,ctrl= 0,ctrl1=0;
    $("#val_alarm_data").html('');
    $("#oth_alarm_data").html('');
    if(frm>to)
    {
        alert('Make sure From Date not be greater than To Date');
    }
    else {
        $('#loading').show();

        $.ajax({
            type: 'GET',
            contentType: 'application/json',
            url:'/alm_hist/'+rigid+'/' + frm + '/' + to,
            success: function (data) {
                JSON.stringify(data);

//                  alert(data.message[0].Array[1].String[0].Val[0]);
                for (i = 0; i < data.message.length; i++) {
//
                    var dt= new Date(data.message[i].alarm_day);
                    var dt1= new Date(data.message[i].alarm_clear);
                    if (data.message[i].alarm_group_id==1)
                    {
                        ctrl++;

                        $("#val_alarm_data").append("<tr><td style='width: 10%;'>" +ctrl + "</td><td style='width: 30%;'>" + data.message[i].alarm_name+ "</td><td style='width: 30%;'>" + dt.toString("dd/MM/yyyy") + "&nbsp;&nbsp;&nbsp;&nbsp;" + dt.toString("hh:mm tt")+ "</td><td style='width: 30%;'>" + dt1.toString("dd/MM/yyyy") + "&nbsp;&nbsp;&nbsp;&nbsp;" + dt1.toString("hh:mm tt")+ "</td></tr>");
                    }
                    else
                    {
                        ctrl1++;
                        $("#oth_alarm_data").append("<tr><td style='width: 10%;'>" + ctrl1+ "</td><td style='width: 30%;'>" + data.message[i].alarm_name+ "</td><td style='width: 30%;'>" + dt.toString("dd/MM/yyyy") + "&nbsp;&nbsp;&nbsp;&nbsp;" + dt.toString("hh:mm tt")+ "</td><td style='width: 30%;'>" + dt1.toString("dd/MM/yyyy") + "&nbsp;&nbsp;&nbsp;&nbsp;" + dt1.toString("hh:mm tt")+ "</td></tr>");
                    }
                }
                $('#loading').hide();
            }
        });
    }
}


function show_dialog() {
    $('#data').modal();
}
