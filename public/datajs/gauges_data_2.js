/**
 * Created by Administrator on 2/23/2016.
 */
var socket = io();
var acc = '', manifold = '', rig_air = '', annular = '',shear_bost = '';
$(document).ready(function(){
    var rig_id=1;
    socket.on('current_data', function (data) {

        JSON.stringify(data);
        acc = '', manifold = '', rig_air = '', annular = '',shear_bost = '';
        for(i=0;i<data.curr_data.length;i++)
        {
            if(rig_id==data.curr_data[i].rig_id)
            {
                acc=data.curr_data[0].acc_pres_in;
                manifold =data.curr_data[0].man_pres_in;
                annular = data.curr_data[0].ann_pres_in;
                shear_bost= data.curr_data[0].sb_pres_in;
                rig_air = data.curr_data[0].air_pres_in;

                segDisplay.value(annular); segDisplay_s1.value(annular);
                gauge.value(annular); gauge_s1.value(annular);




                segDisplay_2.value(acc); segDisplay_2_s2.value(acc);
                gauge_2.value(acc);  gauge_2_s2.value(acc);

                gauge_3.value(manifold);   gauge_3_s3.value(manifold);
                segDisplay_3.value(manifold);    segDisplay_3_s3.value(manifold);

                segDisplay_4.value(rig_air);  segDisplay_4_s4.value(rig_air);
                gauge_4.value(rig_air); gauge_4_s4.value(rig_air);

                segDisplay_5.value(shear_bost); segDisplay_5_s5.value(shear_bost);
                gauge_5.value(shear_bost);    gauge_5_s5.value(shear_bost);

                gauge1.set(parseInt(annular)); gauge1_s1.set(parseInt(annular));
                gauge2.set(parseInt(acc));       gauge2_s2.set(parseInt(acc));
                gauge3.set(parseInt(manifold)); gauge3_s3.set(parseInt(manifold));
                gauge4.set(parseInt(rig_air));     gauge4_s4.set(parseInt(rig_air));
                gauge5.set(parseInt(shear_bost));    gauge5_s5.set(parseInt(shear_bost));
            }
            else
            {
                console.log('Data not Available on selected Rig');
            }

        }




    });
});

$(window).on('beforeunload', function(){
    socket.close();
});