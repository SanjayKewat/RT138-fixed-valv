/**
 * Created by Administrator on 2/23/2016.
 */

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

$(document).ready(function () {
    $('#txtfr').datetimepicker({
        timepicker: true,
        format: 'Y-m-d H:i'
    });

    $('#txtto').datetimepicker({
        timepicker: true,
        format: 'Y-m-d H:i'
    });
//            $('#equip_drp').val(2);
    user_name();
    $('#data').append(alarmcontent());
    $('.f2').append(alarm_footer());
    $('.f1').append(userinfo());

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





    var rig_id=1;


    var to=new Date();
    var predate=new Date();
    predate.setDate(predate.getDate()-30);


    $('#txtfr').val(predate.getFullYear()+"-"+addZero(predate.getMonth()+1)+"-"+addZero(predate.getDate())+" "+addZero(predate.getHours())+":00");
    $('#txtto').val(to.getFullYear()+"-"+addZero(to.getMonth()+1)+"-"+addZero(to.getDate())+" "+addZero(to.getHours())+":00");

    fetchdata(rig_id,$('#txtfr').val(),$('#txtto').val());
    $('#btn').click(function(){
        fetchdata(rig_id,$('#txtfr').val(),$('#txtto').val());
    });


});
var a= 1,a1=1;
function fetchdata(rigid,frm,to) {
    var f = new Date(Date.parse(frm));
    var t = new Date(Date.parse(to));

    f= f.getTime()/1000;//converting into unix timestamp
    t= t.getTime()/1000;//converting into unix timestamp
//console.log("From "+frm+"  To  "+to);
    if (f > t) {
        alert('Make sure From Date not be greater than To Date');
    }
    else {

        if ($('#equip_drp').val() == 1) {

            $('#loading').show();
            $.ajax({
                type: 'GET',
                contentType: 'application/json',
                url: '/bop_ctrl/' + rigid + '/' + f + '/' + t,
                success: function (data) {

                    a++;
                    JSON.stringify(data);

                    $('#lgnd_bop').show();
                    $('#lgnd_chk').hide();
                    var strxml = "", str_cate1 = "", Ac = "", Mn = "", rg = "", An = "",dt="";

                    strxml = "<chart chartLeftMargin='0' formatnumberscale='0' compactDataMode='1' dataSeparator='|' showBorder='0' showShadow='0' chartBottomMargin='20' showLegend='0' drawAnchors='0' legendPosition='below' bgAlpha='0,0'  showValues='1' canvasbgalpha='60' canvasbgangle='90' canvasBorderThickness='1' canvasBorderAlpha='20'  paletteThemeColor='5D57A5' divLineColor='5D57A5' divLineAlpha='40' vDivLineAlpha='40' dynamicAxis='1'>";
                    str_cate1 = "<categories>";
                    Ac = "<dataset seriesName='Accumulator Pressure' color='0071bc' dashed='1'>";
                    Mn = "<dataset seriesName='Manifold Pressure' color='50527A' >";
                    rg = "<dataset seriesName='Rig Air' color='835C3B' dashed='1'>";
                    An = "<dataset seriesName='Annular Pressure' color='6cd6cf'>";

                    if(data.message.length!=0) {
                        $.each(data.message, function (idx, value) {

                            var press_id = parseInt(value.press_id);

                            switch (press_id) {
                                case 1:  //Manifold pressure data
                                    Mn += value.pressure + '|';
                                    break;

                                case 2://Accumulator pressure data
                                    dt = new Date(value.date_time);
                                    str_cate1 += dt.toString("dd-MM-yyyy") + "{br}" + dt.toString("hh:mm tt") + '|';
                                    Ac += value.pressure + '|';
                                    break;

                                case 3:  //Annular pressure data
                                    An += value.pressure + '|';
                                    break;

                                case 7: //Rig Air Pressure data
                                    rg += value.pressure + '|';
                                    break;
                            }

                        });
                    }
                    else
                    {
                        alert('Data not available in selected range. Please check another date range.');
                    }

                    str_cate1 += "</categories>";

                    Ac += "</dataset>";
                    Mn += "</dataset>";
                    rg += "</dataset>";
                    An += "</dataset>";
                    strxml += str_cate1 + Ac + Mn + rg + An + "</chart>";


                    document.getElementsByName
                    FusionCharts.setCurrentRenderer('javascript');


                    var line = new FusionCharts('FusionCharts/ZoomLine.swf', 'chart-'+a, '100%', '105%', '0', '0');
                    line.setXMLData(strxml);
                    line.setTransparent(true);
                    line.render('bop');

                    $('#loading').hide();

                }
            });


        }
        else if ($('#equip_drp').val() == 2) {
            $('#lgnd_bop').hide();
            $('#lgnd_chk').show();
            $('#loading').show();
            $.ajax({
                type: 'GET',
                contentType: 'application/json',
                url: '/csng_cntrl/' + rigid + '/' + f + '/' + t,
                success: function (data) {

                    a++;
                    JSON.stringify(data);

                    var strxml = "", str_cate1 = "", drill = "", csg = "", dt = "";


                    strxml = "<chart chartLeftMargin='0' formatnumberscale='0' compactDataMode='1' dataSeparator='|' showBorder='0' showShadow='0' chartBottomMargin='50' showLegend='0' drawAnchors='0' legendPosition='below' bgAlpha='0,0'  showValues='1' canvasbgalpha='60' canvasbgangle='90' canvasBorderThickness='1' canvasBorderAlpha='20'  paletteThemeColor='5D57A5' divLineColor='5D57A5' divLineAlpha='40' vDivLineAlpha='40' dynamicAxis='1'>";
                    str_cate1 = "<categories>";
                    drill = "<dataset seriesName='Drill Pressure' color='7ab54a' dashed='1'>";
                    csg = "<dataset seriesName='Casing Pressure' color='e2dc44'  >";


                    if (data.message.length != 0) {

                        $.each(data.message, function (idx, value) {

                            var press_id = parseInt(value.press_id);

                            switch (press_id) {

                                case 6: //Drill Pipe Pressure data
                                    dt = new Date(value.date_time);
                                    drill += value.pressure + '|';
                                    str_cate1 += dt.toString("dd-MM-yyyy") + "{br}" + dt.toString("hh:mm tt") + '|';
                                    break;

                                case 4: //Casing Pressure data
                                    csg += value.pressure + '|';
                                    break;

                            }

                        });

                    }

                    else {
                        alert('Data not available in selected range. Please check another date range.');
                    }

                    str_cate1 += "</categories>";

                    drill += "</dataset>";
                    csg += "</dataset>";

                    strxml += str_cate1 + drill + csg + "</chart>";


                    document.getElementsByName
                    FusionCharts.setCurrentRenderer('javascript');


                    var line = new FusionCharts('FusionCharts/ZoomLine.swf', 'chart-' + a1, '100%', '105%', '0', '0');
                    line.setXMLData(strxml);
                    line.setTransparent(true);
                    line.render('bop');

                    $('#loading').hide();
                }
            });


        }
    }
}



function show_dialog() {
    $('#data').modal();

}
