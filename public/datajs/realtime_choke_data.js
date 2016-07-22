/**
 * Created by Administrator on 2/23/2016.
 */
var socket = io();
var drill,casing,pum1strk,pum2strk,pum1totstrk,pum2totstrk,chkhand,chk1,chk2,rig_Id=1;
$(document).ready(function(){
    socket.on('current_data', function (data) {
//            JSON.stringify(data);



        $.each(data.curr_data,function(idx,val){

            if(val.rig_id==rig_Id){
                drill=val.drill_pipe_pressure;
                casing=val.casing_pressure;
                pum1strk=val.pump_1_stroke_min;
                pum2strk=val.pump_2_stroke_min;
                pum1totstrk=val.pump_1_counter_reg;
                pum2totstrk=val.pump_2_counter_reg;
                chkhand=val.choke_handpump_hydraulic_pres;
                chk1=val.choke_1_open_percent;
                chk2=val.choke_2_open_percent;
            }

        });

        gauge1.set(parseInt(drill));gauge1_s1.set(parseInt(drill));
        gauge2.set(parseInt(casing)); gauge2_s2.set(parseInt(casing));

        segDisplay.value(drill);segDisplay_s1.value(drill);
        gauge.value(drill);gauge_s1.value(drill);

        segDisplay_2.value(casing);segDisplay_2_s2.value(casing);
        gauge_2.value(casing);gauge_2_s2.value(casing);

//console.log(drill);
        $('#stroke1').text(parseInt(pum1strk));
        $('#stroke2').text(parseInt(pum2strk));
        $('#tstroke1').text(parseInt(pum1totstrk));
        $('#tstroke2').text(parseInt(pum2totstrk));
        $('#chk_pump1').text(parseInt(chkhand));
//    g1.refresh(Math.round(chk1));//choke 1
//    g2.refresh(Math.round(chk2));//choke 2

        gauge3.set(parseInt(chk1));gauge3_s3.set(parseInt(chk1));
        gauge4.set(parseInt(chk2)); gauge4_s4.set(parseInt(chk2));
        $('#g1_txt').text(Math.round(chk1)+' %');
        $('#g2_txt').text(Math.round(chk2)+' %');

    });
});