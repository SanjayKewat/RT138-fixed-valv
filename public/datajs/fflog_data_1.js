/**
 * Created by Administrator on 2/23/2016.
 */
//lower tab div
var rig_id=1;
$(function() {
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

    window.onload = ptab;
//    window.onresize=table_adjust;
//    window.onload = ptab;

//    VAlarms();
    $("#main").show();

});
//function table_adjust()
//{
//
////    var $table = $('table.scroll'),
////            $bodyCells = $table.find('tbody tr:first').children(),
////            colWidth;
////    colWidth = $bodyCells.map(function() {
////        return $(this).width();
////    }).get();
////
//////alert($(v).width(colWidth[i]+1));
////    // Set the width of thead columns
////    $('#t_head').find('thead tr').children().each(function(i, v) {
////        $(v).width(colWidth[i]);
////    });
//
//}
//
//var img_index =24;
//function zeros(dimensions) {
//    var array = [];
//
//    for (var i = 0; i < dimensions[0]; ++i) {
//        array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
//    }
//
//    return array;
//}
//function fcall_1(){
//
//    resize();
//
//    $('#rig').show();
//    $('#bop').show();
//    $('#chk').show();
//    $('#ground1').show();
//    $('#ground2').show();
//
//    $('.map').show();
//    $('.p_log').show();
//    $('.f1').show();
//    $('.f2').show();
//    $("#main").show();
//    div1_plot($('.dropdown1').val());
//    ffdiv1_plot($('.ffdropdown1').val());
//    table_adjust();
//}
//function fcall(){
//
//    ptab();
////    resize();
//
//
//    $('#rig').show();
//    $('#bop').show();
//    $('#chk').show();
//    $('#ground1').show();
//    $('#ground2').show();
//
//    $('.map').show();
//    $('.p_log').show();
//    $('.f1').show();
//    $('.f2').show();
//    $("#main").show();
//
//
//}


function show_dialog() {
    $('#data').modal();
//    VAlarms();
}

//function bind_table(){//bind data for VALVE POSITION FUNCTION FAIL DETAILS
//    // alert('function call');
////        $('#tab_ffail').html();
//    for(i=0;i<19;i++)
//    {
//        if(i%2==0)
//        {
//            $('#tab_ffail').append('<tr class="even"><td></td><td></td><td></td><td></td></tr>');
//        }
//        else
//        {
//            $('#tab_ffail').append('<tr><td></td><td></td><td></td><td></td></tr>');
//        }
//
//    }
//}