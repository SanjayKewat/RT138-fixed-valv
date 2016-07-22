var socket = io.connect(connection);

//initial state monday 28/04/14

var y =0;
var ff=[];
var new_arr = [];
var arr = [];
var k=1;
var rtdata = [],rtdata1 = [];

socket.on('current_data', function (data) {
    rtdata1=[];
    $( "#tank_status1").html('');
    $( "#tank_status2").html('');
//                           y = data.message;


    rtdata1.push({"bypass": data.curr_data[0].bypass,
        "ann": data.curr_data[0].annular_diverter,//annular--diverter
        "choke1": data.curr_data[0].port_choke_line_1,//choke line 1--choke1
        "spare": data.curr_data[0].spare,
        "pprm3":data.curr_data[0].pipe_ram_3,
        "pprm2": data.curr_data[0].pipe_ram_2,
        "hcr1": data.curr_data[0].hcr_1,
        "bs": data.curr_data[0].blind_shear,
        "hcr2": data.curr_data[0].hcr_2,
        "kill2": data.curr_data[0].kill_line_2,//kill line 2--kill2
        "kill1": data.curr_data[0].kill_line1_stbd,//kill line 1 -- kill1
        "pprm1": data.curr_data[0].pipe_ram_1,
        "choke2": data.curr_data[0].choke_line_2,//choke 2--choke2
        "acc_0": data.curr_data[0].pressure,
        "shaer_boost_mode_light": data.curr_data[0].shear_boost_mode_light,
        "motor_run_1_light": data.curr_data[0].motor_run1_light,
        "bop_light": data.curr_data[0].bop_mode_light,
        "low_rig_air_light": data.curr_data[0].low_rig_air_ligth,
        "motor_run_2_light": data.curr_data[0].motor_run2_light,
        "divert_light": data.curr_data[0].divert_mode_light,
        "stbd_open": data.curr_data[0].obp_2,
        "stbd_close": data.curr_data[0].obp_1,
        "tank_0": data.curr_data[0].low_hydraulic_light,
        "tank1": data.curr_data[0].motor_run1_light,
        "tank2": data.curr_data[0].motor_run2_light,
        "tank_status1": data.curr_data[0].pump_1_status,
        "tank_status2": data.curr_data[0].pump_2_status,
        "acc_pres_in": data.curr_data[0].acc_pres_in,
        "man_pres_in": data.curr_data[0].man_pres_in,
        "ann_pres_in": data.curr_data[0].ann_pres_in,
        "sb_pres_in": data.curr_data[0].sb_pres_in,
        "air_pres_in": data.curr_data[0].air_pres_in
    });
    if(k==1)
    {
        k++;
        rtdata = rtdata1;
        gauge2.set(parseInt(rtdata[0].acc_pres_in));
        gauge2_s.set(parseInt(rtdata[0].acc_pres_in));
        segDisplay2.value(rtdata[0].acc_pres_in);
        gauge12.value(rtdata[0].acc_pres_in);


        gauge1.set(parseInt(rtdata[0].man_pres_in));
        gauge1_s.set(parseInt(rtdata[0].man_pres_in));
        segDisplay1.value(rtdata[0].man_pres_in);
        gauge11.value(rtdata[0].man_pres_in);

        gauge3.set(parseInt(rtdata[0].ann_pres_in));
        gauge3_s.set(parseInt(rtdata[0].ann_pres_in));
        segDisplay3.value(rtdata[0].ann_pres_in);
        gauge13.value(rtdata[0].ann_pres_in);

        gauge4.set(parseInt(rtdata[0].sb_pres_in));
        gauge4_s.set(parseInt(rtdata[0].sb_pres_in));
        segDisplay4.value(rtdata[0].sb_pres_in);
        gauge14.value(rtdata[0].sb_pres_in);

        gauge5.set(parseInt(rtdata[0].air_pres_in));
        gauge5_s.set(parseInt(rtdata[0].air_pres_in));
        segDisplay5.value(rtdata[0].air_pres_in);
        gauge15.value(rtdata[0].air_pres_in);

        mani(rtdata[0].acc_0);   //manifold

        //VALVES START
        spare(rtdata[0].spare);
        hcr2(rtdata[0].hcr2);
        hcr1(rtdata[0].hcr1);
        chk2(rtdata[0].choke2);
        kill2(rtdata[0].kill2);
        chk1(rtdata[0].choke1);
        kill1(rtdata[0].kill1);
        pprm3(rtdata[0].pprm3);
        pprm2(rtdata[0].pprm2);
        pprm1(rtdata[0].pprm1);
        ann(rtdata[0].ann);
    }

    if(rtdata[0].man_pres_in!=rtdata1[0].man_pres_in)
    {
        rtdata[0].acc_pres_in=rtdata1[0].man_pres_in;
        gauge1.set(parseInt(rtdata[0].man_pres_in));
        gauge1_s.set(parseInt(rtdata[0].acc_pres_in));
//        arrow1.setValue(parseInt(rtdata[0].acc_pres_in));

    }
    segDisplay1.value(rtdata[0].man_pres_in);
    gauge11.value(rtdata[0].man_pres_in);

    if(rtdata[0].acc_pres_in!=rtdata1[0].acc_pres_in)
    {
        rtdata[0].acc_pres_in=rtdata1[0].acc_pres_in;
        gauge2.set(parseInt(rtdata[0].acc_pres_in));
        gauge2_s.set(parseInt(rtdata[0].acc_pres_in));
//        arrow2.setValue(parseInt(rtdata[0].man_pres_in));
    }
    segDisplay2.value(rtdata[0].acc_pres_in);
    gauge12.value(rtdata[0].acc_pres_in);
    if(rtdata[0].ann_pres_in!=rtdata1[0].ann_pres_in)
    {
        rtdata[0].ann_pres_in=rtdata1[0].ann_pres_in;
        gauge3.set(parseInt(rtdata[0].ann_pres_in));
        gauge3_s.set(parseInt(rtdata[0].ann_pres_in));
//        arrow3.setValue(parseInt(rtdata[0].ann_pres_in));
    }
    segDisplay3.value(rtdata[0].ann_pres_in);
    gauge13.value(rtdata[0].ann_pres_in);

    if(rtdata[0].sb_pres_in!=rtdata1[0].sb_pres_in)
    {
        rtdata[0].sb_pres_in=rtdata1[0].sb_pres_in;
        gauge4.set(parseInt(rtdata[0].sb_pres_in));
        gauge4_s.set(parseInt(rtdata[0].sb_pres_in));
//        arrow4.setValue(parseInt(rtdata[0].sb_pres_in));
    }
    segDisplay4.value(rtdata[0].sb_pres_in);
    gauge14.value(rtdata[0].sb_pres_in);

    if(rtdata[0].air_pres_in!=rtdata1[0].air_pres_in)
    {
        rtdata[0].air_pres_in=rtdata1[0].air_pres_in;
        gauge5.set(parseInt(rtdata[0].air_pres_in));
        gauge5_s.set(parseInt(rtdata[0].air_pres_in));
//        arrow5.setValue(parseInt(rtdata[0].air_pres_in));
    }
    segDisplay5.value(rtdata[0].air_pres_in);
    gauge15.value(rtdata[0].air_pres_in);

if(rtdata[0].spare!=rtdata1[0].spare )
{

    rtdata[0].spare=rtdata1[0].spare;
    spare(rtdata[0].spare);
}
    if(rtdata[0].hcr2!=rtdata1[0].hcr2 )
    {

        rtdata[0].hcr2=rtdata1[0].hcr2;
        hcr2(rtdata[0].hcr2);
    }
    if(rtdata[0].hcr1!=rtdata1[0].hcr1 )
    {
        rtdata[0].hcr1=rtdata1[0].hcr1;
        hcr1(rtdata[0].hcr1);
    }
    if(rtdata[0].choke2!=rtdata1[0].choke2 )
    {
        rtdata[0].choke2=rtdata1[0].choke2;
        chk2(rtdata[0].choke2);
    }
    if(rtdata[0].kill2!=rtdata1[0].kill2 )
    {
        rtdata[0].kill2=rtdata1[0].kill2;
        kill2(rtdata[0].choke2);
    }
    if(rtdata[0].choke1!=rtdata1[0].choke1 )
    {
        rtdata[0].choke1=rtdata1[0].choke1;
        chk1(rtdata[0].choke1);
    }
    if(rtdata[0].kill1!=rtdata1[0].kill1 )
    {
        rtdata[0].kill1=rtdata1[0].kill1;
        kill1(rtdata[0].kill1);
    }
    if(rtdata[0].pprm3!=rtdata1[0].pprm3 )
    {
        rtdata[0].pprm3=rtdata1[0].pprm3;
        pprm3(rtdata[0].pprm3);
    }
    if(rtdata[0].pprm2!=rtdata1[0].pprm2 )
    {
        rtdata[0].pprm2=rtdata1[0].pprm2;
        pprm2(rtdata[0].pprm2);
    }
    if(rtdata[0].pprm1!=rtdata1[0].pprm1 )
    {
        rtdata[0].pprm1=rtdata1[0].pprm1;
        pprm1(rtdata[0].pprm1);
    }
    if(rtdata[0].ann!=rtdata1[0].ann )
    {
        rtdata[0].ann=rtdata1[0].ann;
        ann(rtdata[0].ann);
    }













    //VALVES END

    if((rtdata[0].spare==4)&&(rtdata[0].hcr2==4)&&(rtdata[0].hcr1==4)&&(rtdata[0].choke2==4)&&(rtdata[0].kill2==4)&&(rtdata[0].choke1==4)&&(rtdata[0].kill1==4)&&(rtdata[0].pprm3==4)&&(rtdata[0].pprm2==4)&&(rtdata[0].pprm1==4))
    {
        $('#status_0').hide();
        $('#status_1').show();
    }
    else
    {
        $('#status_0').show();
        $('#status_1').hide();
    }

});

function spare(id)
{
    switch(id)
    {
        case '0':
            $('#spare_0').show();
            $('#spare_1').hide();
            $('#spare_2').hide();
            $('#spare_3').hide();
            $('#spare_4').hide();
            $('#spare_5').hide();
            break;
        case '1':
            $('#spare_0').hide();
            $('#spare_1').show();
            $('#spare_2').hide();
            $('#spare_3').hide();
            $('#spare_4').hide();
            $('#spare_5').hide();
            break;
        case '2':
            $('#spare_0').hide();
            $('#spare_1').hide();
            $('#spare_2').show();
            $('#spare_3').hide();
            $('#spare_4').hide();
            $('#spare_5').hide();
            break;
        case '3':
            $('#spare_0').hide();
            $('#spare_1').hide();
            $('#spare_2').hide();
            $('#spare_3').show();
            $('#spare_4').hide();
            $('#spare_5').hide();
            break;
        case '4':
            $('#spare_0').hide();
            $('#spare_1').hide();
            $('#spare_2').hide();
            $('#spare_3').hide();
            $('#spare_4').show();
            $('#spare_5').hide();
            break;
        default:
            $('#spare_0').hide();
            $('#spare_1').hide();
            $('#spare_2').hide();
            $('#spare_3').hide();
            $('#spare_4').hide();
            $('#spare_5').show();
    }

}

function hcr2(id)
{
    switch(id)
    {
        case '0':
            $('#hcr_2_0').show();
            $('#hcr_2_1').hide();
            $('#hcr_2_2').hide();
            $('#hcr_2_3').hide();
            $('#hcr_2_4').hide();
            $('#hcr_2_5').hide();
            break;
        case '1':
            $('#hcr_2_0').hide();
            $('#hcr_2_1').show();
            $('#hcr_2_2').hide();
            $('#hcr_2_3').hide();
            $('#hcr_2_4').hide();
            $('#hcr_2_5').hide();
            break;
        case '2':
            $('#hcr_2_0').hide();
            $('#hcr_2_1').hide();
            $('#hcr_2_2').show();
            $('#hcr_2_3').hide();
            $('#hcr_2_4').hide();
            $('#hcr_2_5').hide();
            break;
        case '3':
            $('#hcr_2_0').hide();
            $('#hcr_2_1').hide();
            $('#hcr_2_2').hide();
            $('#hcr_2_3').show();
            $('#hcr_2_4').hide();
            $('#hcr_2_5').hide();
            break;
        case '4':
            $('#hcr_2_0').hide();
            $('#hcr_2_1').hide();
            $('#hcr_2_2').hide();
            $('#hcr_2_3').hide();
            $('#hcr_2_4').show();
            $('#hcr_2_5').hide();
            break;
        default:
            $('#hcr_2_0').hide();
            $('#hcr_2_1').hide();
            $('#hcr_2_2').hide();
            $('#hcr_2_3').hide();
            $('#hcr_2_4').hide();
            $('#hcr_2_5').show();
    }

}

function hcr1(id)
{
    switch(id)
    {
        case '0':
            $('#hcr_1_0').show();
            $('#hcr_1_1').hide();
            $('#hcr_1_2').hide();
            $('#hcr_1_3').hide();
            $('#hcr_1_4').hide();
            $('#hcr_1_5').hide();

            break;
        case '1':
            $('#hcr_1_0').hide();
            $('#hcr_1_1').show();
            $('#hcr_1_2').hide();
            $('#hcr_1_3').hide();
            $('#hcr_1_4').hide();
            $('#hcr_1_5').hide();
            break;
        case '2':
            $('#hcr_1_0').hide();
            $('#hcr_1_1').hide();
            $('#hcr_1_2').show();
            $('#hcr_1_3').hide();
            $('#hcr_1_4').hide();
            $('#hcr_1_5').hide();
            break;
        case '3':
            $('#hcr_1_0').hide();
            $('#hcr_1_1').hide();
            $('#hcr_1_2').hide();
            $('#hcr_1_3').show();
            $('#hcr_1_4').hide();
            $('#hcr_1_5').hide();
            break;
        case '4':
            $('#hcr_1_0').hide();
            $('#hcr_1_1').hide();
            $('#hcr_1_2').hide();
            $('#hcr_1_3').hide();
            $('#hcr_1_4').show();
            $('#hcr_1_5').hide();
            break;
        default:
            $('#hcr_1_0').hide();
            $('#hcr_1_1').hide();
            $('#hcr_1_2').hide();
            $('#hcr_1_3').hide();
            $('#hcr_1_4').hide();
            $('#hcr_1_5').show();
    }


}

function chk2(id)
{
    switch(id)
    {
        case '0':
            $('#chk_2_0').show();
            $('#chk_2_1').hide();
            $('#chk_2_2').hide();
            $('#chk_2_3').hide();
            $('#chk_2_4').hide();
            $('#chk_2_5').hide();
            break;
        case '1':
            $('#chk_2_0').hide();
            $('#chk_2_1').show();
            $('#chk_2_2').hide();
            $('#chk_2_3').hide();
            $('#chk_2_4').hide();
            $('#chk_2_5').hide();
            break;
        case '2':
            $('#chk_2_0').hide();
            $('#chk_2_1').hide();
            $('#chk_2_2').show();
            $('#chk_2_3').hide();
            $('#chk_2_4').hide();
            $('#chk_2_5').hide();
            break;
        case '3':
            $('#chk_2_0').hide();
            $('#chk_2_1').hide();
            $('#chk_2_2').hide();
            $('#chk_2_3').show();
            $('#chk_2_4').hide();
            $('#chk_2_5').hide();
            break;
        case '4':
            $('#chk_2_0').hide();
            $('#chk_2_1').hide();
            $('#chk_2_2').hide();
            $('#chk_2_3').hide();
            $('#chk_2_4').show();
            $('#chk_2_5').hide();
            break;
        default:
            $('#chk_2_0').hide();
            $('#chk_2_1').hide();
            $('#chk_2_2').hide();
            $('#chk_2_3').hide();
            $('#chk_2_4').hide();
            $('#chk_2_5').show();
    }

}

function kill2(id)
{
    switch(id)
    {
        case '0':
            $('#kill_2_0').show();
            $('#kill_2_1').hide();
            $('#kill_2_2').hide();
            $('#kill_2_3').hide();
            $('#kill_2_4').hide();
            $('#kill_2_5').hide();
            break;
        case '1':
            $('#kill_2_0').hide();
            $('#kill_2_1').show();
            $('#kill_2_2').hide();
            $('#kill_2_3').hide();
            $('#kill_2_4').hide();
            $('#kill_2_5').hide();
            break;
        case '2':
            $('#kill_2_0').hide();
            $('#kill_2_1').hide();
            $('#kill_2_2').show();
            $('#kill_2_3').hide();
            $('#kill_2_4').hide();
            $('#kill_2_5').hide();
            break;
        case '3':
            $('#kill_2_0').hide();
            $('#kill_2_1').hide();
            $('#kill_2_2').hide();
            $('#kill_2_3').show();
            $('#kill_2_4').hide();
            $('#kill_2_5').hide();
            break;
        case '4':
            $('#kill_2_0').hide();
            $('#kill_2_1').hide();
            $('#kill_2_2').hide();
            $('#kill_2_3').hide();
            $('#kill_2_4').show();
            $('#kill_2_5').hide();
            break;
        default:
            $('#kill_2_0').hide();
            $('#kill_2_1').hide();
            $('#kill_2_2').hide();
            $('#kill_2_3').hide();
            $('#kill_2_4').hide();
            $('#kill_2_5').show();
    }

}

function chk1(id)
{
    switch(id)
    {
        case '0':
            $('#chk_1_0').show();
            $('#chk_1_1').hide();
            $('#chk_1_2').hide();
            $('#chk_1_3').hide();
            $('#chk_1_4').hide();
            $('#chk_1_5').hide();

            break;
        case '1':
            $('#chk_1_0').hide();
            $('#chk_1_1').show();
            $('#chk_1_2').hide();
            $('#chk_1_3').hide();
            $('#chk_1_4').hide();
            $('#chk_1_5').hide();
            break;
        case '2':
            $('#chk_1_0').hide();
            $('#chk_1_1').hide();
            $('#chk_1_2').show();
            $('#chk_1_3').hide();
            $('#chk_1_4').hide();
            $('#chk_1_5').hide();
            break;
        case '3':
            $('#chk_1_0').hide();
            $('#chk_1_1').hide();
            $('#chk_1_2').hide();
            $('#chk_1_3').show();
            $('#chk_1_4').hide();
            $('#chk_1_5').hide();
            break;
        case '4':
            $('#chk_1_0').hide();
            $('#chk_1_1').hide();
            $('#chk_1_2').hide();
            $('#chk_1_3').hide();
            $('#chk_1_4').show();
            $('#chk_1_5').hide();
            break;
        default:
            $('#chk_1_0').hide();
            $('#chk_1_1').hide();
            $('#chk_1_2').hide();
            $('#chk_1_3').hide();
            $('#chk_1_4').hide();
            $('#chk_1_5').show();
    }

}

function kill1(id)
{
    switch(id)
    {
        case '0':
            $('#kill_1_0').show();
            $('#kill_1_1').hide();
            $('#kill_1_2').hide();
            $('#kill_1_3').hide();
            $('#kill_1_4').hide();
            $('#kill_1_5').hide();

            break;
        case '1':
            $('#kill_1_0').hide();
            $('#kill_1_1').show();
            $('#kill_1_2').hide();
            $('#kill_1_3').hide();
            $('#kill_1_4').hide();
            $('#kill_1_5').hide();
            break;
        case '2':
            $('#kill_1_0').hide();
            $('#kill_1_1').hide();
            $('#kill_1_2').show();
            $('#kill_1_3').hide();
            $('#kill_1_4').hide();
            $('#kill_1_5').hide();
            break;
        case '3':
            $('#kill_1_0').hide();
            $('#kill_1_1').hide();
            $('#kill_1_2').hide();
            $('#kill_1_3').show();
            $('#kill_1_4').hide();
            $('#kill_1_5').hide();
            break;
        case '4':
            $('#kill_1_0').hide();
            $('#kill_1_1').hide();
            $('#kill_1_2').hide();
            $('#kill_1_3').hide();
            $('#kill_1_4').show();
            $('#kill_1_5').hide();
            break;
        default:
            $('#kill_1_0').hide();
            $('#kill_1_1').hide();
            $('#kill_1_2').hide();
            $('#kill_1_3').hide();
            $('#kill_1_4').hide();
            $('#kill_1_5').show();
    }

}

function pprm3(id)
{
    switch(id)
    {
        case '0':
            $('#pprm_3_0').show();
            $('#pprm_3_1').hide();
            $('#pprm_3_2').hide();
            $('#pprm_3_3').hide();
            $('#pprm_3_4').hide();
            $('#pprm_3_5').hide();
            break;
        case '1':
            $('#pprm_3_0').hide();
            $('#pprm_3_1').show();
            $('#pprm_3_2').hide();
            $('#pprm_3_3').hide();
            $('#pprm_3_4').hide();
            $('#pprm_3_5').hide();
            break;
        case '2':
            $('#pprm_3_0').hide();
            $('#pprm_3_1').hide();
            $('#pprm_3_2').show();
            $('#pprm_3_3').hide();
            $('#pprm_3_4').hide();
            $('#pprm_3_5').hide();
            break;
        case '3':
            $('#pprm_3_0').hide();
            $('#pprm_3_1').hide();
            $('#pprm_3_2').hide();
            $('#pprm_3_3').show();
            $('#pprm_3_4').hide();
            $('#pprm_3_5').hide();
            break;
        case '4':
            $('#pprm_3_0').hide();
            $('#pprm_3_1').hide();
            $('#pprm_3_2').hide();
            $('#pprm_3_3').hide();
            $('#pprm_3_4').show();
            $('#pprm_3_5').hide();
            break;
        default:
            $('#pprm_3_0').hide();
            $('#pprm_3_1').hide();
            $('#pprm_3_2').hide();
            $('#pprm_3_3').hide();
            $('#pprm_3_4').hide();
            $('#pprm_3_5').show();
    }

}

function pprm2(id)
{
    switch(id)
    {
        case '0':
            $('#pprm_2_0').show();
            $('#pprm_2_1').hide();
            $('#pprm_2_2').hide();
            $('#pprm_2_3').hide();
            $('#pprm_2_4').hide();
            $('#pprm_2_5').hide();
            break;
        case '1':
            $('#pprm_2_0').hide();
            $('#pprm_2_1').show();
            $('#pprm_2_2').hide();
            $('#pprm_2_3').hide();
            $('#pprm_2_4').hide();
            $('#pprm_2_5').hide();
            break;
        case '2':
            $('#pprm_2_0').hide();
            $('#pprm_2_1').hide();
            $('#pprm_2_2').show();
            $('#pprm_2_3').hide();
            $('#pprm_2_4').hide();
            $('#pprm_2_5').hide();
            break;
        case '3':
            $('#pprm_2_0').hide();
            $('#pprm_2_1').hide();
            $('#pprm_2_2').hide();
            $('#pprm_2_3').show();
            $('#pprm_2_4').hide();
            $('#pprm_2_5').hide();
            break;
        case '4':
            $('#pprm_2_0').hide();
            $('#pprm_2_1').hide();
            $('#pprm_2_2').hide();
            $('#pprm_2_3').hide();
            $('#pprm_2_4').show();
            $('#pprm_2_5').hide();
            break;
        default:
            $('#pprm_2_0').hide();
            $('#pprm_2_1').hide();
            $('#pprm_2_2').hide();
            $('#pprm_2_3').hide();
            $('#pprm_2_4').hide();
            $('#pprm_2_5').show();
    }

}

function pprm1(id)
{
    switch(id)
    {
        case '0':
            $('#pprm_1_0').show();
            $('#pprm_1_1').hide();
            $('#pprm_1_2').hide();
            $('#pprm_1_3').hide();
            $('#pprm_1_4').hide();
            $('#pprm_1_5').hide();
            break;
        case '1':
            $('#pprm_1_0').hide();
            $('#pprm_1_1').show();
            $('#pprm_1_2').hide();
            $('#pprm_1_3').hide();
            $('#pprm_1_4').hide();
            $('#pprm_1_5').hide();
            break;
        case '2':
            $('#pprm_1_0').hide();
            $('#pprm_1_1').hide();
            $('#pprm_1_2').show();
            $('#pprm_1_3').hide();
            $('#pprm_1_4').hide();
            $('#pprm_1_5').hide();
            break;
        case '3':
            $('#pprm_1_0').hide();
            $('#pprm_1_1').hide();
            $('#pprm_1_2').hide();
            $('#pprm_1_3').show();
            $('#pprm_1_4').hide();
            $('#pprm_1_5').hide();
            break;
        case '4':
            $('#pprm_1_0').hide();
            $('#pprm_1_1').hide();
            $('#pprm_1_2').hide();
            $('#pprm_1_3').hide();
            $('#pprm_1_4').show();
            $('#pprm_1_5').hide();
            break;
        default:
            $('#pprm_1_0').hide();
            $('#pprm_1_1').hide();
            $('#pprm_1_2').hide();
            $('#pprm_1_3').hide();
            $('#pprm_1_4').hide();
            $('#pprm_1_5').show();
    }

}

function ann(id)
{
    switch(id)
    {
        case '0':
            $('#ann_0').show();
            $('#ann_1').hide();
            $('#ann_2').hide();
            $('#ann_3').hide();
            $('#ann_4').hide();
            $('#ann_5').hide();
            break;
        case '1':
            $('#ann_0').hide();
            $('#ann_1').show();
            $('#ann_2').hide();
            $('#ann_3').hide();
            $('#ann_4').hide();
            $('#ann_5').hide();
            break;
        case '2':
            $('#ann_0').hide();
            $('#ann_1').hide();
            $('#ann_2').show();
            $('#ann_3').hide();
            $('#ann_4').hide();
            $('#ann_5').hide();
            break;
        case '3':
            $('#ann_0').hide();
            $('#ann_1').hide();
            $('#ann_2').hide();
            $('#ann_3').show();
            $('#ann_4').hide();
            $('#ann_5').hide();
            break;
        case '4':
            $('#ann_0').hide();
            $('#ann_1').hide();
            $('#ann_2').hide();
            $('#ann_3').hide();
            $('#ann_4').show();
            $('#ann_5').hide();
            break;
        default:
            $('#ann_0').hide();
            $('#ann_1').hide();
            $('#ann_2').hide();
            $('#ann_3').hide();
            $('#ann_4').hide();
            $('#ann_5').show();
    }

}

function mani(id)
{
    if(id==1)
    {
        $('#mani_1').show();
        $('#mani_0').hide();
    }
    else
    {
        $('#mani_0').show();
        $('#mani_1').hide();
    }
}