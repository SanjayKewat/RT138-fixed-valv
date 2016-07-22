/**
 * Created by Administrator on 2/23/2016.
 */
//    var g111,g112,g113,g114,g115;
var socket = io();
var acc = '', manifold = '', rig_air = '', annular = '',shear_bost = '';
$(document).ready(function(){

    var rig_id=1;
    socket.on('current_data', function (data) {

        JSON.stringify(data);
//        acc = '', manifold = '', rig_air = '', annular = '',shear_bost = '';
        for(i=0;i<data.curr_data.length;i++)
        {
            if(rig_id==data.curr_data[i].rig_id) {
                if( acc != data.curr_data[0].acc_pres_in)
                {

                    acc = data.curr_data[0].acc_pres_in;

                }
                segDisplay2.value(acc);
                gauge12.value(acc);
                gauge2.set(parseInt(acc));
                gauge2_s1.set(parseInt(acc));
                if( manifold != data.curr_data[0].man_pres_in)
                {
                    manifold = data.curr_data[0].man_pres_in

                }
                segDisplay3.value(manifold);
                gauge13.value(manifold);
                gauge3.set(parseInt(manifold));
                gauge3_s1.set(parseInt(manifold));
                if(annular != data.curr_data[0].ann_pres_in)
                {
                    annular = data.curr_data[0].ann_pres_in;

                }
                segDisplay1.value(annular);
                gauge11.value(annular);
                gauge1.set(parseInt(annular));
                gauge1_s1.set(parseInt(annular));
                if(shear_bost != data.curr_data[0].sb_pres_in)
                {
                    shear_bost = data.curr_data[0].sb_pres_in;

                }
                segDisplay4.value(shear_bost);
                gauge14.value(shear_bost);
                gauge4.set(parseInt(shear_bost));
                gauge4_s1.set(parseInt(shear_bost));
                if(rig_air != data.curr_data[0].air_pres_in)
                {
                    rig_air = data.curr_data[0].air_pres_in;

                }
                segDisplay5.value(rig_air);
                gauge15.value(rig_air);
//                arrow1.setValue(annular);
//                arrow2.setValue(acc);
//                arrow3.setValue(manifold);
//                arrow4.setValue(shear_bost);
//                arrow.setValue(rig_air);
                gauge5.set(parseInt(rig_air));
                gauge5_s1.set(parseInt(rig_air));
            }
            else
            {
                console.log('Data not Available on selected Rig');
            }
        }

    });

});