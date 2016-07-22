/**
 * Created by Administrator on 2/23/2016.
 */
var rig_id=1;
$(function() {

    $('#data').append(alarmcontent());
    $('.f2').append(alarm_footer());
    $('.f1').append(userinfo());
    user_name();

    window.onload = fcall;
    window.onresize= fcall_1;
//    window.onload = ptab;

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

var img_index =66;
function zeros(dimensions) {
    var array = [];

    for (var i = 0; i < dimensions[0]; ++i) {
        array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
    }

    return array;
}

function fcall(){
    ptab();
    ccall();



}
function fcall_1()
{
    lx = $(window).width();
    if(lx>1444)
    {
        chart.radius=269;
        chart.columnWidth=0.8;
    }else
    {
        chart.radius=180;
        chart.columnWidth=0.6;
    }
    show_rze_uplgd1();
    table_adjust();
}
function table_adjust()
{

//    var $table = $('table.scroll'),
//            $bodyCells = $table.find('tbody tr:first').children(),
//            colWidth;
//    colWidth = $bodyCells.map(function() {
//        return $(this).width();
//    }).get();
//
//    // Set the width of thead columns
//    $table.find('thead tr').children().each(function(i, v) {
//        $(v).width(colWidth[i]+1);
//    });

}


function show_dialog() {
    $('#data').modal();

}