/**
 * Created by Administrator on 2/23/2016.
 */
var val1 = [];
//var test;
var count = 0, a = 0, b = 0;
var x, y, z;
var i, j;
var z1, z2;
var a1 = 0, a2 = 0, a3 = 0, a4 = 0, a5 = 0, a6 = 0;

var new_arr = [];
var new_arr1 = [];

var db = [];
var first = 0;

var c=0;
var x1,ink;
var tmstmp;
var momo=[],momo1=[],momo2=[];
var momov=[],momov1=[],momov2=[];
var momot=[],momot1=[],momot2=[];

var p=0,q=0,ra=[],raf=[],i1,j1,j2,j3,j4,ga=[];

var pre;
var pre1;
var prev;
var prev1;
var pret;
var pret1;
var pro=[],pro1=[];
var prov=[],prov1=[];
var prot=[],prot1=[];

var months=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// var temp_arr1=[],max1=0,rnme1='',rgname1=[];

// var max=0,rnme='',rgname=[],temp_arr=[];

var high=[]
var med=[];
var low=[];
var mov=[];
var maint=[];
var oth=[];
var hi1=[];
var me1=[];
var med1=[];
var high1=[];
var maint1=[];
var mov1=[];
var oth1=[];
var ga1=[0];
var ga11=[0];

var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

var tsvg = "M9 0c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9zM13.5 6.091l-2.909 2.909 2.909 2.909v1.591h-1.591l-2.909-2.909-2.909 2.909h-1.591v-1.591l2.909-2.909-2.909-2.909v-1.591h1.591l2.909 2.909 2.909-2.909h1.591v1.591z";

// var targetSVG1 =  "M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12 0 6.627-5.373 12-12 12zM10 16c0-3.314 2.686-6 6-6s6 2.686 6 6c0 3.314-2.686 6-6 6-3.314 0-6-2.686-6-6z";

// var targetSVG1 ="/svg/rig symbol-02.svg";
var map;
var rigname='';
var socket = io();
$(document).ready(function(){
//    keepAspectRatio(16,7);
    user_name();
    $('#logout').click(function() {
        location.href = '/logout';

    });
    var check=1;
    var ddd=0;
    socket.on('map_data', function (data) {
        ddd++;

        JSON.stringify(data);

        y = data.map_data.length;

        new_arr = [];
        new_arr_high = [];
        new_arr_med = [];

        new_arr_nw = [];
        new_arr_high_nw = [];
        new_arr_med_nw = [];
        //reading data from xml converted json file

        for(i=0;i<y;i++){

            // zozo=(i*0.1)+2;//zoom level variable


//            arry="'"+data.message[i].Val+"'";
//            arr=arry.split(",");
//
//            xlen = arr.length;
//            xlen = xlen-1;
//
//            arr[0] = arr[0].replace("'","");
//            arr[xlen] = arr[xlen].replace("'","");

            if( data.map_data[i].level==0 || data.map_data[i].level==1 || data.map_data[i].level==2)
            {


                new_arr.push({"name" : data.map_data[i].rig_name,
                    "lat" : data.map_data[i].latitude,
                    "longi" : data.map_data[i].longitude,
                    "level": data.map_data[i].level,
                    "fileu" : data.map_data[i].file_update

                    // "zoom" : zozo
                });


                if(data.map_data[i].level==2){
                    temp=[];
                    temp=data.map_data[i].timestamp;
                    temp=temp.split(",");
                    for(j=0;j<temp.length;j++)
                    {
                        new_arr_high.push({"name":data.map_data[i].rig_name,
                            "timestamp":temp[j]});

                    }

                }

                else if(data.map_data[i].level==1){
                    temp=[];
                    temp=data.map_data[i].timestamp;
                    temp=temp.split(",");
                    for(j=0;j<temp.length;j++)
                    {
                        new_arr_med.push({"name":data.map_data[i].rig_name,
                            "timestamp":temp[j]});

                    }

                }
            }
            else
            {
                new_arr.push({"name" :  data.map_data[i].rig_name,
                    "lat" : data.map_data[i].latitude,
                    "longi" : data.map_data[i].longitude,
                    "level": data.map_data[i].level,
                    "date" : data.map_data[i].file_update,
                    "time" : data.map_data[i].timestamp
                    // "zoom" : zozo

                });

            }
        }


        //end of reading data from xml converted json file

        if(check==1)
        {
            db = [];

            for (var i = 0; i < new_arr.length; i++) {

                if(new_arr[i].level==0 || new_arr[i].level==1 || new_arr[i].level==2)
                {
                    fu = hrdiff(new_arr[i].fileu);

                }

                zo=(i*0.1)+2;//zoom level variable

                // new_arr[i].push({"zoom":zo});

                if(new_arr[i].level==2 && fu<3){
                    db.push({
                        id: new_arr[i].name,
                        latitude: new_arr[i].lat,
                        longitude: new_arr[i].longi,
                        svgPath: targetSVG,
                        color: "#CC0000",
                        scale: 0.5,
                        label: new_arr[i].name,
                        labelShiftY: 2,
                        zoomLevel: zo,
                        title: "Click to go to "+new_arr[i].name,
                        myUrl: "/home"
                    });


                }
                else if(new_arr[i].level==1 && fu<3){
                    db.push({
                        id: new_arr[i].name,
                        latitude: new_arr[i].lat,
                        longitude: new_arr[i].longi,
                        svgPath: targetSVG,
                        color: "#FFCC00",
                        scale: 0.5,
                        label: new_arr[i].name,
                        labelShiftY: 2,
                        zoomLevel: zo,
                        title: "Click to go to "+new_arr[i].name,
                        myUrl: "/home"
                    });


                }
                else if(new_arr[i].level==0 && fu<3){
                    db.push({
                        id: new_arr[i].name,
                        latitude: new_arr[i].lat,
                        longitude: new_arr[i].longi,
                        svgPath: targetSVG,
                        color: "#4AB825",
                        scale: 0.5,
                        label: new_arr[i].name,
                        labelShiftY: 2,
                        zoomLevel: zo,
                        title: "Click to go to "+new_arr[i].name,
                        myUrl: "/home"
                    });


                }

                else if(new_arr[i].level==0 || new_arr[i].level==1 || new_arr[i].level==2 && fu>=3){

                    db.push({
                        id: new_arr[i].name,
                        latitude: new_arr[i].lat,
                        longitude: new_arr[i].longi,
                        svgPath: tsvg,
                        color: "#FF0000",
                        scale: 0.5,
                        label: new_arr[i].name,
                        labelShiftY: 2,
                        zoomLevel: zo,
                        title: "Click to go to "+new_arr[i].name,
                        myUrl: "/home"
                    });


                }

                else if(new_arr[i].level!=0 || new_arr[i].level!=1 || new_arr[i].level!=2){
                    db.push({
                        id: new_arr[i].name,
                        latitude: new_arr[i].lat,
                        longitude: new_arr[i].longi,
                        svgPath: targetSVG,
                        color: "",
                        scale: 0.5,
                        label: new_arr[i].name,
                        labelShiftY: 2,
                        zoomLevel: zo,
                        title: "Click to go to "+new_arr[i].name,
                        myUrl: "/home"
                    });

                }

            }

            var test =  {


                type: "map",
                pathToImages: "/images/",
                // color:"#999999",

                imagesSettings: {
                    //rollOverColor: "#CC0000",
                    rollOverScale: 1,            //zooming the rig when clicked
                    selectedScale: 1,
                    //selectedColor: "#CC0000"
                },

                zoomControl:{buttonFillColor:"#999999"},

                dataProvider: {
                    map: "worldLow",
                    images: db
                },

                // smallMap: {},

            };

            map = AmCharts.makeChart("mapdiv",test);

            map.validateData();


            map.addListener("clickMapObject", function (event) {
                // check if the map is already at traget zoomLevel and go to url if it is
                if ( event.mapObject.zoomLevel == map.zoomLevel() ) {
                    window.location.href = event.mapObject.myUrl;
//                 console.log(event.mapObject.label);
                    rigname=event.mapObject.label;//here to get selected rigname that clicked
                    passrignm(rigname);
                }
            });


// map.addListener("clickMapObject", function (event) {
//     // check if the map is already at traget zoomLevel and go to url if it is
//     if ( 'undefined' != typeof currentObject &&  event.mapObject.id == currentObject.id ) {
//         window.location.href = event.mapObject.myUrl;
//     }
//     currentObject = event.mapObject;
// });

            high=[];
            low=[];
            med=[];
            mov=[];
            maint=[];
            oth=[];

            hi1=[];
            me1=[];
            med1=[];
            high1=[];
            maint1=[];
            mov1=[];
            oth1=[];


            for (i = 0; i < db.length; i++) {


                z = new_arr[i].level;

                if (z == 2) {

                    high.push({"name" : new_arr[i].name,
                        "lat" : new_arr[i].lat,
                        "longi" : new_arr[i].longi,
                        "fileu" : new_arr[i].fileu,
                        // "zoom" : new_arr[i].zoom

                    });

                    //   for(j=0;j<new_arr_high.length;j++){

                    //    new_arr_high.push({"name":new_arr[i].name,
                    //                 "timestamp":new_arr_high[j].timestamp});

                    // }

                }

                else if (z == 1) {
                    med.push({"name" : new_arr[i].name,
                        "lat" : new_arr[i].lat,
                        "longi" : new_arr[i].longi,
                        "fileu" : new_arr[i].fileu,
                        // "zoom" : new_arr[i].zoom

                    });

                    //   for(j=0;j<new_arr[i].alarm.length;j++){

                    //     new_arr_med.push({"name":new_arr[i].name,
                    //                  "timestamp":new_arr[i].alarm[j].timestamp});

                    // }

                }

                else if (z == 0) {
                    low.push({"name" : new_arr[i].name,
                        "lat" : new_arr[i].lat,
                        "longi" : new_arr[i].longi,
                        "fileu" : new_arr[i].fileu,
                        // "zoom" : new_arr[i].zoom

                    });

                }

                else if (z == 3) {
                    maint.push({"name" : new_arr[i].name,
                        "lat" : new_arr[i].lat,
                        "longi" : new_arr[i].longi,
                        "date":new_arr[i].date,
                        "time":new_arr[i].time,
                        // "zoom" : new_arr[i].zoom
                    });


                }

                else if (z == 4) {
                    mov.push({"name" : new_arr[i].name,
                        "lat" : new_arr[i].lat,
                        "longi" : new_arr[i].longi,
                        "date":new_arr[i].date,
                        "time":new_arr[i].time,
                        // "zoom" : new_arr[i].zoom
                    });


                }

                else if (z == 5) {
                    oth.push({"name" : new_arr[i].name,
                        "lat" : new_arr[i].lat,
                        "longi" : new_arr[i].longi,
                        "date":new_arr[i].date,
                        "time":new_arr[i].time,
                        // "zoom" : new_arr[i].zoom
                    });


                }

            }



            //new_arr_high to hi1 start

            distinct(new_arr_high,hi1);
            bubbleSort(hi1,'timestamp');


            //new_arr_med to me1 start

            distinct(new_arr_med,me1);
            bubbleSort(me1, 'timestamp');

//make array with rigs and highest timestamp
            for(i=0;i<high.length;i++){

                for(k=0;k<hi1.length;k++){

                    if(hi1[k].name==high[i].name)   {

                        high1.push({"name" : high[i].name,
                            "lat" : high[i].lat,
                            "longi" :high[i].longi,
                            "fileu" :high[i].fileu,
                            // "zoom" : high[i].zoom,
                            "timestamp" :hi1[k].timestamp});

                    }
                }
            }

            for(i=0;i<med.length;i++){

                for(k=0;k<me1.length;k++){

                    if(me1[k].name==med[i].name)   {

                        med1.push({"name" : med[i].name,
                            "lat" : med[i].lat,
                            "longi" :med[i].longi,
                            "fileu" :med[i].fileu,
                            // "zoom" : med[i].zoom,
                            "timestamp" :me1[k].timestamp});

                    }
                }
            }

            for(kk=0;kk<maint.length;kk++){

                momo = (maint[kk].date).split("-");

                momo1[0] = momo[0];

                for(i=0;i<months.length;i++){

                    if(months[i]==momo[1])
                        momo1[1] = i;
                }

                if(momo[2]<100){

                    momo1[2] ="20"+momo[2];
                }
                else if(momo[2]>=100){

                    momo1[2] ="2"+momo[2];
                }


                pre = momo1[0]+"/"+momo1[1]+"/"+momo1[2];//new date to print with date/month/year format

                pro = momo1[2]+","+momo1[1]+","+momo1[0];

                momo2 = (maint[kk].time).split(" ");

                pre1 = pro+","+momo2[0].split(":").join(",")+","+"00";

                pro1 = pre1.split(",");

                if(momo2[1]=="PM"){

                    tmstmp = new Date(pro1[0],(parseInt(pro1[1])-1),pro1[2],(parseInt(pro1[3])+12),pro1[4],pro1[5]).getTime() /1000;
                    dtm = (parseInt(pro1[3])+12)+":"+pro1[4]+":"+pro1[5];
                }

                else{

                    tmstmp = new Date(pro1[0],(parseInt(pro1[1])-1),pro1[2],pro1[3],pro1[4],pro1[5]).getTime() /1000;
                    dtm = pro1[3]+":"+pro1[4]+":"+pro1[5];
                }


                maint1.push({"name" : maint[kk].name,
                    "lat" : maint[kk].lat,
                    "longi" :maint[kk].longi,
                    // "zoom" : maint[kk].zoom,
                    "date":pre,
                    "time":dtm,
                    "timestamp" :tmstmp});
            }



            for(kk=0;kk<mov.length;kk++){

                momov = (mov[kk].date).split("-");
                momov1[0] = momov[0];

                for(i=0;i<months.length;i++){

                    if(months[i]==momov[1])
                        momov1[1] = i;
                }

                if(momov[2]<100){

                    momov1[2] ="20"+momov[2];
                }
                else if(momov[2]>=100){

                    momov1[2] ="2"+momov[2];
                }


                prev = momov1[0]+"/"+momov1[1]+"/"+momov1[2];//new date to print with date/month/year format

                prov = momov1[2]+","+momov1[1]+","+momov1[0];

                momov2 = (mov[kk].time).split(" ");

                prev1 = prov+","+momov2[0].split(":").join(",")+","+"00";

                prov1 = prev1.split(",");

                if(momov2[1]=="PM"){

                    tmstmp1 = new Date(prov1[0],(parseInt(prov1[1])-1),prov1[2],(parseInt(prov1[3])+12),prov1[4],prov1[5]).getTime() /1000;
                    dtv = (parseInt(prov1[3])+12)+":"+prov1[4]+":"+prov1[5];
                }

                else{

                    tmstmp1 = new Date(prov1[0],(parseInt(prov1[1])-1),prov1[2],prov1[3],prov1[4],prov1[5]).getTime() /1000;
                    dtv = prov1[3]+":"+prov1[4]+":"+prov1[5];
                }


                mov1.push({"name" : mov[kk].name,
                    "lat" : mov[kk].lat,
                    "longi" :mov[kk].longi,
                    // "zoom" : mov[kk].zoom,
                    "date":prev,
                    "time":dtv,
                    "timestamp" :tmstmp1});
            }


            for(kk=0;kk<oth.length;kk++){

                momot = (oth[kk].date).split("-");
                momot1[0] = momot[0];

                for(i=0;i<months.length;i++){

                    if(months[i]==momot[1])
                        momot1[1] = i;
                }

                if(momot[2]<100){

                    momot1[2] ="20"+momot[2];
                }
                else if(momot[2]>=100){

                    momot1[2] ="2"+momot[2];
                }


                pret = momot1[0]+"/"+momot1[1]+"/"+momot1[2];//new date to print with date/month/year format

                prot = momot1[2]+","+momot1[1]+","+momot1[0];

                momot2 = (oth[kk].time).split(" ");

                pret1 = prot+","+momot2[0].split(":").join(",")+","+"00";

                prot1 = pret1.split(",");

                if(momot2[1]=="PM"){

                    tmstmp2 = new Date(prot1[0],(parseInt(prot1[1])-1),prot1[2],(parseInt(prot1[3])+12),prot1[4],prot1[5]).getTime() /1000;
                    dto = (parseInt(prot1[3])+12)+":"+prot1[4]+":"+prot1[5];

                }

                else{

                    tmstmp2 = new Date(prot1[0],(parseInt(prot1[1])-1),prot1[2],prot1[3],prot1[4],prot1[5]).getTime() /1000;
                    dto = prot1[3]+":"+prot1[4]+":"+prot1[5];
                }


                oth1.push({"name" : oth[kk].name,
                    "lat" : oth[kk].lat,
                    "longi" :oth[kk].longi,
                    // "zoom" : oth[kk].zoom,
                    "date":pret,
                    "time":dto,
                    "timestamp" :tmstmp2});
            }


            bubbleSort(high1, 'timestamp');
            bubbleSort(med1, 'timestamp');
            bubbleSort(maint1, 'timestamp');
            bubbleSort(mov1, 'timestamp');
            bubbleSort(oth1, 'timestamp');



            $('#row1').html('');
            $('#row2').html('');
            $('#row3').html('');
            $('#row8').html('');
            $('#row4').html('');
            $('#row5').html('');
            $('#row6').html('');
            $('#row7').html('');

            $(".yo").html('');
            $(".yo1").html('');
            $(".yo2").html('');

//        $('#row1').append('<td style="background-color:#CCCCCC" ><div style="width:130px;font-size:14px;color:#666666;">Rig Name</div></td> ');
//        $('#row2').append('<td style="background-color:#CCCCCC"><div style="width:130px;font-size:14px;color:#666666;">Latitude</div></td> ');
//        $('#row3').append('<td style="background-color:#CCCCCC"><div style="width:130px;font-size:14px;color:#666666;">Longitude</div></td> ');
//        $('#row8').append('<td style="background-color:#CCCCCC"><div style="width:130px;font-size:14px;color:#666666;">File Update</div></td> ');
//        $('#row4').append('<td style="background-color:#CCCCCC"><div class="heading1"  style="width:130px;font-size:14px;color:#666666;">Number of Alarms</div></td> ');
//        $('#row5').append('<td style="background-color:#CCCCCC"><div class="heading1"  style="width:130px;font-size:14px;color:#666666;">Total Days of Alarm</div></td> ');
//        $('#row6').append('<td style="background-color:#CCCCCC"><div class="heading1" style="width:130px;font-size:14px;color:#666666;">Date</div></td> ');
//        $('#row7').append('<td style="background-color:#CCCCCC"><div class="heading1" style="width:130px;font-size:14px;color:#666666;">Time</div></td> ');



            for (i = 0; i < high1.length; i++) {

                p=0;
                for(j1=0;j1<new_arr_high.length;j1++){

                    if(new_arr_high[j1].name==high1[i].name){

                        ra[p]=new_arr_high[j1].timestamp;//timestamp array of each rig
                        p++;


                    }
                }
                bubble_sort(ra,p);//sorted timestamps

                q=0;
                for(j2=0;j2<p;j2++){

                    raf[j2]=tstodate(ra[j2]);//sorted dates

                    if(q<ra[j2]){

                        q=ra[j2];//highest timestamp of each rig

                    }

                }

                $('#row1').append('<td id=da_' +i+ ' style="background-color:#D9343F; cursor: pointer; opacity:0.8;"  onclick="show_rig(\'' + high1[i].name + '\')"><div class="part-left" style="width:110px">' + high1[i].name + '</div></td> ');
                $('#row2').append('<td id=da1_' +i+ ' style="background-color:#D9343F;opacity:0.8;"><div class="part-left">' + high1[i].lat + '</div></td> ');
                $('#row3').append('<td id=da2_' +i+ ' style="background-color:#D9343F;opacity:0.8;"><div class="part-left">' + high1[i].longi + '</div></td> ');

                $('#row8').append('<td id=da8_' +i+ ' style="background-color:#D9343F;opacity:0.8;"><div class="part-left">' + tstodate(high1[i].fileu)+"  "+"  "+tstotime(high1[i].fileu) + '</div></td> ');


                $('#row4').append('<td id=da3_' +i+ ' style="background-color:#D9343F;opacity:0.8;"><div class="part-left">' + p + '</div><div class="part-right" style="background-color:#D44852;"></div></td> ');

                $('#row5').append('<td id=da4_' +i+ ' style="background-color:#D9343F;opacity:0.8;"><div class="part-left">' + tstonow(q)+'</div><div class="part-right" style="background-color:#D44852;"></div></td> ');


                $('#row6').append('<td id=da6_' +i+ ' style="background-color:#D9343F;opacity:0.8;"><div class="part-left">' +tstodate(q) + '</div><div class="part-right" style="background-color:#D44852;"><div class=arrow-right_'+i+'  onclick="show_sub(\''+ high1[i].name +'\',\''+i+'\')"  style="width: 0;height: 0;margin-left: 2px;border-top: 5px solid transparent;border-bottom: 5px solid transparent;opacity: 1;border-left: 5px solid white;"></div></div></td> ');

                $('#row7').append('<td id=da7_' +i+ ' style="background-color:#D9343F;opacity:0.8;"><div class="part-left">' + tstotime(q) + '</div><div class="part-right" style="background-color:#D44852;"></div></td> ');


            }//end of printing high1


            for (i = 0; i < med1.length; i++) {


                p=0;
                for(j1=0;j1<new_arr_med.length;j1++){

                    if(new_arr_med[j1].name==med1[i].name){

                        ra[p]=new_arr_med[j1].timestamp;//timestamp array of each rig
                        p++;


                    }
                }
                bubble_sort(ra,p);//sorted timestamps

                q=0;
                for(j2=0;j2<p;j2++){

                    raf[j2]=tstodate(ra[j2]);//sorted dates

                    if(q<ra[j2]){

                        q=ra[j2];//highest timestamp of each rig

                    }

                }
                $('#row1').append('<td id=db_' +i+ ' style="background-color:#FBB58A; cursor: pointer;" onclick="show_rig(\'' + med1[i].name + '\')"><div class="part-left" style="width:110px">' + med1[i].name + '</div></td> ');
                $('#row2').append('<td id=db1_' +i+ ' style="background-color:#FBB58A;"><div class="part-left">' + med1[i].lat + '</div></td> ');
                $('#row3').append('<td id=db2_' +i+ ' style="background-color:#FBB58A;"><div class="part-left">' + med1[i].longi + '</div></td> ');
                $('#row8').append('<td id=db8_' +i+ ' style="background-color:#FBB58A;"><div class="part-left">' + tstodate(med1[i].fileu)+"  "+"  "+tstotime(med1[i].fileu) + ' </div></td> ');


                $('#row4').append('<td id=db3_' +i+ ' style="background-color:#FBB58A;"><div class="part-left">' + p + '</div><div class="part-right" style="background-color:#F5A36B;"></div></td> ');

                $('#row5').append('<td id=db4_' +i+ ' style="background-color:#FBB58A;"><div class="part-left">' + tstonow(q)+ '</div><div class="part-right" style="background-color:#F5A36B;"></div></td> ');

                $('#row6').append('<td id=db6_' +i+ ' style="background-color:#FBB58A;"><div class="part-left">' + tstodate(q) + '</div><div class="part-right" style="background-color:#F5A36B;"><div class=arrow-right1_'+i+' onclick="show_sub1(\''+ med1[i].name +'\',\''+i+'\')" style="width: 0;height: 0;margin-left: 2px;border-top: 5px solid transparent;border-bottom: 5px solid transparent;opacity: 1;border-left: 5px solid white;"></div></div></td> ');
                $('#row7').append('<td id=db7_' +i+ ' style="background-color:#FBB58A;"><div class="part-left">' + tstotime(q) + '</div><div class="part-right" style="background-color:#F5A36B;"></div></td> ');

            }//end of printing med1


            for (i = 0; i < low.length; i++) {

                $('#row1').append('<td id=dc_' + i + ' style="background-color:#C7DE9B; cursor: pointer;" onclick="show_rig(\'' + low[i].name + '\')"><div class="part-left" style="width:110px">' + low[i].name + '</div></td> ');
                $('#row2').append('<td id=dc1_' + i + ' style="background-color:#C7DE9B;"><div class="part-left" style="width:110px">' + low[i].lat + '</div></td> ');
                $('#row3').append('<td id=dc2_' + i + ' style="background-color:#C7DE9B;"><div class="part-left" style="width:110px">' + low[i].longi + '</div></td> ');
                $('#row8').append('<td id=dc8_' + i + ' style="background-color:#C7DE9B;"><div class="part-left" style="width:110px">' + tstodate(low[i].fileu)+"  "+"  "+tstotime(low[i].fileu) + ' </div></td> ');
                $('#row4').append('<td id=dc3_' + i + ' style="background-color:#C7DE9B;"><div class="part-left" style="width:110px"></div></td> ');
                $('#row5').append('<td id=dc4_' + i + ' style="background-color:#C7DE9B;"><div class="part-left" style="width:110px"></div></td> ');
                $('#row6').append('<td id=dc6_' + i + ' style="background-color:#C7DE9B;"><div class="part-left" style="width:110px"></div></td> ');
                $('#row7').append('<td id=dc7_' + i + ' style="background-color:#C7DE9B;"><div class="part-left" style="width:110px"></div></td> ');

            }//end of printing low


            if(((high1.length)+(med1.length)+(low.length))>11)
            {
                cal=11-((high1.length)+(med1.length)+(low.length));
            }


            if(((high1.length)+(med1.length)+(low.length))==1)
            {
                cal=12-((high1.length)+(med1.length)+(low.length));
            }
            else
            {
                cal=11-((high1.length)+(med1.length)+(low.length));
            }

            if(cal>0)
            {
                for(i=0;i<cal;i++)
                {
                    $('#row1').append('<td id=de_' + i + ' style="background-color:white;"><div class="part-left" style="width:110px"></div></td> ');
                    $('#row2').append('<td id=de1_' + i + ' style="background-color:white;"><div class="part-left" style="width:110px"></div></td> ');
                    $('#row3').append('<td id=de2_' + i + ' style="background-color:white;"><div class="part-left" style="width:110px"></div></td> ');
                    $('#row8').append('<td id=de8_' + i + ' style="background-color:white;"><div class="part-left" style="width:110px"></div></td> ');
                    $('#row4').append('<td id=de3_' + i + ' style="background-color:white;"><div class="part-left" style="width:110px"></div></td> ');
                    $('#row5').append('<td id=de4_' + i + ' style="background-color:white;"><div class="part-left" style="width:110px"></div></td> ');
                    $('#row6').append('<td id=de6_' + i + ' style="background-color:white;"><div class="part-left" style="width:110px"></div></td> ');
                    $('#row7').append('<td id=de7_' + i + ' style="background-color:white;"><div class="part-left" style="width:110px"></div></td> ');

                }
            }



            for (i = 0; i < maint1.length; i++) {

                $('.yo').append('<tr id=dd_' + i + '><td class="hov" style="width:125px; cursor: pointer;" onclick="show_rig(\'' + maint1[i].name + '\')"><div>' + maint1[i].name + '</div></td>'+'<td  style="width:90px"><div>' + maint1[i].lat + '</div></td>'+'<td  style="width:90px" ><div>' + maint1[i].longi + '</div></td>'+'<td  style="width:122px" ><div>' + maint1[i].date + '</div></td>'+'<td  ><div>' + maint1[i].time + '</div></td>'+'</tr>');

            }//maint end


            if(maint1.length>12)
            {
                cal=11-(maint1.length);
            }


            if(maint1.length==1)
            {
                cal=12-(maint1.length);
            }
            else
            {
                cal=12-(maint1.length);
            }

            if(cal>0)
            {
                for(i=0;i<cal;i++)
                {
                    $('.yo').append('<tr style="height:17px;" id=dde_' + i + '><td  style="width:125px; cursor: pointer;" ><div></div></td>'+'<td  style="width:90px" ><div></div></td>'+'<td  style="width:90px" ><div></div></td>'+'<td  style="width:122px" ><div></div></td>'+'<td  ><div></div></td>'+'</tr>');

                }
            }//end of appending maint empty row


            for (i = 0; i < mov1.length; i++) {

                $('.yo1').append('<tr id=dd_' + i + '><td class="hov" style="width:125px; cursor: pointer;" onclick="show_rig(\'' + mov1[i].name + '\')"><div>' + mov1[i].name + '</div></td>'+'<td style="width:90px"><div>' + mov1[i].lat + '</div></td>'+'<td style="width:90px"><div>' + mov1[i].longi + '</div></td>'+'<td style="width:122px"><div>' + mov1[i].date+ '</div></td>'+'<td ><div>' + mov1[i].time+ '</div></td>'+'</tr>');

            }//mov end

            if(mov1.length>11)
            {
                cal=12-(mov1.length);
            }


            if(mov1.length==1)
            {
                cal=12-(mov1.length);
            }
            else
            {
                cal=12-(mov1.length);
            }

            if(cal>0)
            {
                for(i=0;i<cal;i++)
                {
                    $('.yo1').append('<tr style="height:17px;" id=dde_' + i + '><td style="width:125px; cursor: pointer;"><div></div></td>'+'<td style="width:90px"><div></div></td>'+'<td style="width:90px"><div></div></td>'+'<td style="width:122px"><div></div></td>'+'<td ><div></div></td>'+'</tr>');

                }
            }//end of appending mov empty row

            for (i = 0; i < oth1.length; i++) {

                $('.yo2').append('<tr  id=dd_' + i + '><td class="hov" style="width:125px; cursor: pointer;" onclick="show_rig(\'' + oth1[i].name + '\')"><div>' + oth1[i].name + '</div></td>'+'<td style="width:90px"><div>' + oth1[i].lat + '</div></td>'+'<td style="width:90px"><div>' + oth1[i].longi + '</div></td>'+'<td style="width:122px"><div>' + oth1[i].date + '</div></td>'+'<td ><div>' + oth1[i].time+ '</div></td>'+'</tr>');

            }//oth end

            if(oth1.length>11)
            {
                cal=12-(oth1.length);
            }


            if(oth1.length==1)
            {
                cal=12-(oth1.length);
            }
            else
            {
                cal=12-(oth1.length);
            }

            if(cal>0)
            {
                for(i=0;i<cal;i++)
                {
                    $('.yo2').append('<tr style="height:17px;" id=dde_' + i + '><td><div></div></td>'+'<td><div></div></td>'+'<td><div></div></td>'+'<td><div></div></td>'+'<td><div></div></td>'+'</tr>');

                }
            }//end of appending oth empty row





            function tstotime(timestamp){

                var date=new Date(timestamp*1000);
                var hours=date.getHours();
                var minutes=date.getMinutes();
                var seconds=date.getSeconds();

                var formattedTime=hours+':'+minutes+':'+seconds;
                return formattedTime;
            }



            function tstodate(timestamp){

                var date=new Date(timestamp*1000);
                var year=date.getFullYear();
                var month=date.getMonth()+1;
                var day=date.getDate();

                var formattedDate=day+'/'+month+'/'+year;
                return formattedDate;
            }



            function tstonow(timestamp){

                var now = new Date();
                var currentts=now.getTime();

                var diff=(currentts-(timestamp*1000));
                var noofdays=diff/(86400*1000);
                return parseInt(noofdays);

            }





            function bubble_sort(list,n)
            {
                var c, d, t;

                for (c = 0 ; c < ( n - 1 ); c++)
                {
                    for (d = 0 ; d < n - c - 1; d++)
                    {
                        if (list[d] < list[d+1])
                        {
                            /* Swapping */

                            t         = list[d];
                            list[d]   = list[d+1];
                            list[d+1] = t;
                        }
                    }
                }
            }






        }
        check++;
        if(ddd==60)
        {
            db = [];

            for (var i = 0; i < new_arr.length; i++) {

                if(new_arr[i].level==0 || new_arr[i].level==1 || new_arr[i].level==2)
                {
                    fu = hrdiff(new_arr[i].fileu);

                }

                zo=(i*0.1)+2;//zoom level variable

                // new_arr[i].push({"zoom":zo});

                if(new_arr[i].level==2 && fu<3){
                    db.push({
                        id: new_arr[i].name,
                        latitude: new_arr[i].lat,
                        longitude: new_arr[i].longi,
                        svgPath: targetSVG,
                        color: "#CC0000",
                        scale: 0.5,
                        label: new_arr[i].name,
                        labelShiftY: 2,
                        zoomLevel: zo,
                        title: "Click to go to "+new_arr[i].name,
                        myUrl: "/home"
                    });


                }
                else if(new_arr[i].level==1 && fu<3){
                    db.push({
                        id: new_arr[i].name,
                        latitude: new_arr[i].lat,
                        longitude: new_arr[i].longi,
                        svgPath: targetSVG,
                        color: "#FFCC00",
                        scale: 0.5,
                        label: new_arr[i].name,
                        labelShiftY: 2,
                        zoomLevel: zo,
                        title: "Click to go to "+new_arr[i].name,
                        myUrl: "/home"
                    });


                }
                else if(new_arr[i].level==0 && fu<3){
                    db.push({
                        id: new_arr[i].name,
                        latitude: new_arr[i].lat,
                        longitude: new_arr[i].longi,
                        svgPath: targetSVG,
                        color: "#4AB825",
                        scale: 0.5,
                        label: new_arr[i].name,
                        labelShiftY: 2,
                        zoomLevel: zo,
                        title: "Click to go to "+new_arr[i].name,
                        myUrl: "/home"
                    });


                }

                else if(new_arr[i].level==0 || new_arr[i].level==1 || new_arr[i].level==2 && fu>=3){

                    db.push({
                        id: new_arr[i].name,
                        latitude: new_arr[i].lat,
                        longitude: new_arr[i].longi,
                        svgPath: tsvg,
                        color: "#FF0000",
                        scale: 0.5,
                        label: new_arr[i].name,
                        labelShiftY: 2,
                        zoomLevel: zo,
                        title: "Click to go to "+new_arr[i].name,
                        myUrl: "/home"
                    });


                }

                else if(new_arr[i].level!=0 || new_arr[i].level!=1 || new_arr[i].level!=2){
                    db.push({
                        id: new_arr[i].name,
                        latitude: new_arr[i].lat,
                        longitude: new_arr[i].longi,
                        svgPath: targetSVG,
                        color: "",
                        scale: 0.5,
                        label: new_arr[i].name,
                        labelShiftY: 2,
                        zoomLevel: zo,
                        title: "Click to go to "+new_arr[i].name,
                        myUrl: "/home"
                    });

                }

            }

            var test =  {


                type: "map",
                pathToImages: "/images/",
                // color:"#999999",

                imagesSettings: {
                    //rollOverColor: "#CC0000",
                    rollOverScale: 1,            //zooming the rig when clicked
                    selectedScale: 1,
                    //selectedColor: "#CC0000"
                },

                zoomControl:{buttonFillColor:"#999999"},

                dataProvider: {
                    map: "worldLow",
                    images: db
                },

                // smallMap: {},

            };

            map = AmCharts.makeChart("mapdiv",test);

            map.validateData();


            map.addListener("clickMapObject", function (event) {
                // check if the map is already at traget zoomLevel and go to url if it is
                if ( event.mapObject.zoomLevel == map.zoomLevel() ) {
                    window.location.href = event.mapObject.myUrl;
//                 console.log(event.mapObject.label);
                    rigname=event.mapObject.label;//here to get selected rigname that clicked
                    passrignm(rigname);
                }
            });


// map.addListener("clickMapObject", function (event) {
//     // check if the map is already at traget zoomLevel and go to url if it is
//     if ( 'undefined' != typeof currentObject &&  event.mapObject.id == currentObject.id ) {
//         window.location.href = event.mapObject.myUrl;
//     }
//     currentObject = event.mapObject;
// });

            high=[];
            low=[];
            med=[];
            mov=[];
            maint=[];
            oth=[];

            hi1=[];
            me1=[];
            med1=[];
            high1=[];
            maint1=[];
            mov1=[];
            oth1=[];


            for (i = 0; i < db.length; i++) {


                z = new_arr[i].level;

                if (z == 2) {

                    high.push({"name" : new_arr[i].name,
                        "lat" : new_arr[i].lat,
                        "longi" : new_arr[i].longi,
                        "fileu" : new_arr[i].fileu,
                        // "zoom" : new_arr[i].zoom

                    });

                    //   for(j=0;j<new_arr_high.length;j++){

                    //    new_arr_high.push({"name":new_arr[i].name,
                    //                 "timestamp":new_arr_high[j].timestamp});

                    // }

                }

                else if (z == 1) {
                    med.push({"name" : new_arr[i].name,
                        "lat" : new_arr[i].lat,
                        "longi" : new_arr[i].longi,
                        "fileu" : new_arr[i].fileu,
                        // "zoom" : new_arr[i].zoom

                    });

                    //   for(j=0;j<new_arr[i].alarm.length;j++){

                    //     new_arr_med.push({"name":new_arr[i].name,
                    //                  "timestamp":new_arr[i].alarm[j].timestamp});

                    // }

                }

                else if (z == 0) {
                    low.push({"name" : new_arr[i].name,
                        "lat" : new_arr[i].lat,
                        "longi" : new_arr[i].longi,
                        "fileu" : new_arr[i].fileu,
                        // "zoom" : new_arr[i].zoom

                    });

                }

                else if (z == 3) {
                    maint.push({"name" : new_arr[i].name,
                        "lat" : new_arr[i].lat,
                        "longi" : new_arr[i].longi,
                        "date":new_arr[i].date,
                        "time":new_arr[i].time,
                        // "zoom" : new_arr[i].zoom
                    });


                }

                else if (z == 4) {
                    mov.push({"name" : new_arr[i].name,
                        "lat" : new_arr[i].lat,
                        "longi" : new_arr[i].longi,
                        "date":new_arr[i].date,
                        "time":new_arr[i].time,
                        // "zoom" : new_arr[i].zoom
                    });


                }

                else if (z == 5) {
                    oth.push({"name" : new_arr[i].name,
                        "lat" : new_arr[i].lat,
                        "longi" : new_arr[i].longi,
                        "date":new_arr[i].date,
                        "time":new_arr[i].time,
                        // "zoom" : new_arr[i].zoom
                    });


                }

            }



            //new_arr_high to hi1 start

            distinct(new_arr_high,hi1);
            bubbleSort(hi1,'timestamp');


            //new_arr_med to me1 start

            distinct(new_arr_med,me1);
            bubbleSort(me1, 'timestamp');

//make array with rigs and highest timestamp
            for(i=0;i<high.length;i++){

                for(k=0;k<hi1.length;k++){

                    if(hi1[k].name==high[i].name)   {

                        high1.push({"name" : high[i].name,
                            "lat" : high[i].lat,
                            "longi" :high[i].longi,
                            "fileu" :high[i].fileu,
                            // "zoom" : high[i].zoom,
                            "timestamp" :hi1[k].timestamp});

                    }
                }
            }

            for(i=0;i<med.length;i++){

                for(k=0;k<me1.length;k++){

                    if(me1[k].name==med[i].name)   {

                        med1.push({"name" : med[i].name,
                            "lat" : med[i].lat,
                            "longi" :med[i].longi,
                            "fileu" :med[i].fileu,
                            // "zoom" : med[i].zoom,
                            "timestamp" :me1[k].timestamp});

                    }
                }
            }

            for(kk=0;kk<maint.length;kk++){

                momo = (maint[kk].date).split("-");

                momo1[0] = momo[0];

                for(i=0;i<months.length;i++){

                    if(months[i]==momo[1])
                        momo1[1] = i;
                }

                if(momo[2]<100){

                    momo1[2] ="20"+momo[2];
                }
                else if(momo[2]>=100){

                    momo1[2] ="2"+momo[2];
                }


                pre = momo1[0]+"/"+momo1[1]+"/"+momo1[2];//new date to print with date/month/year format

                pro = momo1[2]+","+momo1[1]+","+momo1[0];

                momo2 = (maint[kk].time).split(" ");

                pre1 = pro+","+momo2[0].split(":").join(",")+","+"00";

                pro1 = pre1.split(",");

                if(momo2[1]=="PM"){

                    tmstmp = new Date(pro1[0],(parseInt(pro1[1])-1),pro1[2],(parseInt(pro1[3])+12),pro1[4],pro1[5]).getTime() /1000;
                    dtm = (parseInt(pro1[3])+12)+":"+pro1[4]+":"+pro1[5];
                }

                else{

                    tmstmp = new Date(pro1[0],(parseInt(pro1[1])-1),pro1[2],pro1[3],pro1[4],pro1[5]).getTime() /1000;
                    dtm = pro1[3]+":"+pro1[4]+":"+pro1[5];
                }


                maint1.push({"name" : maint[kk].name,
                    "lat" : maint[kk].lat,
                    "longi" :maint[kk].longi,
                    // "zoom" : maint[kk].zoom,
                    "date":pre,
                    "time":dtm,
                    "timestamp" :tmstmp});
            }



            for(kk=0;kk<mov.length;kk++){

                momov = (mov[kk].date).split("-");
                momov1[0] = momov[0];

                for(i=0;i<months.length;i++){

                    if(months[i]==momov[1])
                        momov1[1] = i;
                }

                if(momov[2]<100){

                    momov1[2] ="20"+momov[2];
                }
                else if(momov[2]>=100){

                    momov1[2] ="2"+momov[2];
                }


                prev = momov1[0]+"/"+momov1[1]+"/"+momov1[2];//new date to print with date/month/year format

                prov = momov1[2]+","+momov1[1]+","+momov1[0];

                momov2 = (mov[kk].time).split(" ");

                prev1 = prov+","+momov2[0].split(":").join(",")+","+"00";

                prov1 = prev1.split(",");

                if(momov2[1]=="PM"){

                    tmstmp1 = new Date(prov1[0],(parseInt(prov1[1])-1),prov1[2],(parseInt(prov1[3])+12),prov1[4],prov1[5]).getTime() /1000;
                    dtv = (parseInt(prov1[3])+12)+":"+prov1[4]+":"+prov1[5];
                }

                else{

                    tmstmp1 = new Date(prov1[0],(parseInt(prov1[1])-1),prov1[2],prov1[3],prov1[4],prov1[5]).getTime() /1000;
                    dtv = prov1[3]+":"+prov1[4]+":"+prov1[5];
                }


                mov1.push({"name" : mov[kk].name,
                    "lat" : mov[kk].lat,
                    "longi" :mov[kk].longi,
                    // "zoom" : mov[kk].zoom,
                    "date":prev,
                    "time":dtv,
                    "timestamp" :tmstmp1});
            }


            for(kk=0;kk<oth.length;kk++){

                momot = (oth[kk].date).split("-");
                momot1[0] = momot[0];

                for(i=0;i<months.length;i++){

                    if(months[i]==momot[1])
                        momot1[1] = i;
                }

                if(momot[2]<100){

                    momot1[2] ="20"+momot[2];
                }
                else if(momot[2]>=100){

                    momot1[2] ="2"+momot[2];
                }


                pret = momot1[0]+"/"+momot1[1]+"/"+momot1[2];//new date to print with date/month/year format

                prot = momot1[2]+","+momot1[1]+","+momot1[0];

                momot2 = (oth[kk].time).split(" ");

                pret1 = prot+","+momot2[0].split(":").join(",")+","+"00";

                prot1 = pret1.split(",");

                if(momot2[1]=="PM"){

                    tmstmp2 = new Date(prot1[0],(parseInt(prot1[1])-1),prot1[2],(parseInt(prot1[3])+12),prot1[4],prot1[5]).getTime() /1000;
                    dto = (parseInt(prot1[3])+12)+":"+prot1[4]+":"+prot1[5];

                }

                else{

                    tmstmp2 = new Date(prot1[0],(parseInt(prot1[1])-1),prot1[2],prot1[3],prot1[4],prot1[5]).getTime() /1000;
                    dto = prot1[3]+":"+prot1[4]+":"+prot1[5];
                }


                oth1.push({"name" : oth[kk].name,
                    "lat" : oth[kk].lat,
                    "longi" :oth[kk].longi,
                    // "zoom" : oth[kk].zoom,
                    "date":pret,
                    "time":dto,
                    "timestamp" :tmstmp2});
            }


            bubbleSort(high1, 'timestamp');
            bubbleSort(med1, 'timestamp');
            bubbleSort(maint1, 'timestamp');
            bubbleSort(mov1, 'timestamp');
            bubbleSort(oth1, 'timestamp');



            $('#row1').html('');
            $('#row2').html('');
            $('#row3').html('');
            $('#row8').html('');
            $('#row4').html('');
            $('#row5').html('');
            $('#row6').html('');
            $('#row7').html('');

            $(".yo").html('');
            $(".yo1").html('');
            $(".yo2").html('');

//        $('#row1').append('<td style="background-color:#CCCCCC" ><div style="width:130px;font-size:14px;color:#666666;">Rig Name</div></td> ');
//        $('#row2').append('<td style="background-color:#CCCCCC"><div style="width:130px;font-size:14px;color:#666666;">Latitude</div></td> ');
//        $('#row3').append('<td style="background-color:#CCCCCC"><div style="width:130px;font-size:14px;color:#666666;">Longitude</div></td> ');
//        $('#row8').append('<td style="background-color:#CCCCCC"><div style="width:130px;font-size:14px;color:#666666;">File Update</div></td> ');
//        $('#row4').append('<td style="background-color:#CCCCCC"><div class="heading1"  style="width:130px;font-size:14px;color:#666666;">Number of Alarms</div></td> ');
//        $('#row5').append('<td style="background-color:#CCCCCC"><div class="heading1"  style="width:130px;font-size:14px;color:#666666;">Total Days of Alarm</div></td> ');
//        $('#row6').append('<td style="background-color:#CCCCCC"><div class="heading1" style="width:130px;font-size:14px;color:#666666;">Date</div></td> ');
//        $('#row7').append('<td style="background-color:#CCCCCC"><div class="heading1" style="width:130px;font-size:14px;color:#666666;">Time</div></td> ');



            for (i = 0; i < high1.length; i++) {

                p=0;
                for(j1=0;j1<new_arr_high.length;j1++){

                    if(new_arr_high[j1].name==high1[i].name){

                        ra[p]=new_arr_high[j1].timestamp;//timestamp array of each rig
                        p++;


                    }
                }
                bubble_sort(ra,p);//sorted timestamps

                q=0;
                for(j2=0;j2<p;j2++){

                    raf[j2]=tstodate(ra[j2]);//sorted dates

                    if(q<ra[j2]){

                        q=ra[j2];//highest timestamp of each rig

                    }

                }

                $('#row1').append('<td id=da_' +i+ ' style="background-color:#D9343F; cursor: pointer; opacity:0.8;"  onclick="show_rig(\'' + high1[i].name + '\')"><div class="part-left" style="width:110px">' + high1[i].name + '</div></td> ');
                $('#row2').append('<td id=da1_' +i+ ' style="background-color:#D9343F;opacity:0.8;"><div class="part-left">' + high1[i].lat + '</div></td> ');
                $('#row3').append('<td id=da2_' +i+ ' style="background-color:#D9343F;opacity:0.8;"><div class="part-left">' + high1[i].longi + '</div></td> ');

                $('#row8').append('<td id=da8_' +i+ ' style="background-color:#D9343F;opacity:0.8;"><div class="part-left">' + tstodate(high1[i].fileu)+"  "+"  "+tstotime(high1[i].fileu) + '</div></td> ');


                $('#row4').append('<td id=da3_' +i+ ' style="background-color:#D9343F;opacity:0.8;"><div class="part-left">' + p + '</div><div class="part-right" style="background-color:#D44852;"></div></td> ');

                $('#row5').append('<td id=da4_' +i+ ' style="background-color:#D9343F;opacity:0.8;"><div class="part-left">' + tstonow(q)+'</div><div class="part-right" style="background-color:#D44852;"></div></td> ');


                $('#row6').append('<td id=da6_' +i+ ' style="background-color:#D9343F;opacity:0.8;"><div class="part-left">' +tstodate(q) + '</div><div class="part-right" style="background-color:#D44852;"><div class=arrow-right_'+i+'  onclick="show_sub(\''+ high1[i].name +'\',\''+i+'\')"  style="width: 0;height: 0;margin-left: 2px;border-top: 5px solid transparent;border-bottom: 5px solid transparent;opacity: 1;border-left: 5px solid white;"></div></div></td> ');

                $('#row7').append('<td id=da7_' +i+ ' style="background-color:#D9343F;opacity:0.8;"><div class="part-left">' + tstotime(q) + '</div><div class="part-right" style="background-color:#D44852;"></div></td> ');


            }//end of printing high1


            for (i = 0; i < med1.length; i++) {


                p=0;
                for(j1=0;j1<new_arr_med.length;j1++){

                    if(new_arr_med[j1].name==med1[i].name){

                        ra[p]=new_arr_med[j1].timestamp;//timestamp array of each rig
                        p++;


                    }
                }
                bubble_sort(ra,p);//sorted timestamps

                q=0;
                for(j2=0;j2<p;j2++){

                    raf[j2]=tstodate(ra[j2]);//sorted dates

                    if(q<ra[j2]){

                        q=ra[j2];//highest timestamp of each rig

                    }

                }
                $('#row1').append('<td id=db_' +i+ ' style="background-color:#FBB58A; cursor: pointer;" onclick="show_rig(\'' + med1[i].name + '\')"><div class="part-left" style="width:110px">' + med1[i].name + '</div></td> ');
                $('#row2').append('<td id=db1_' +i+ ' style="background-color:#FBB58A;"><div class="part-left">' + med1[i].lat + '</div></td> ');
                $('#row3').append('<td id=db2_' +i+ ' style="background-color:#FBB58A;"><div class="part-left">' + med1[i].longi + '</div></td> ');
                $('#row8').append('<td id=db8_' +i+ ' style="background-color:#FBB58A;"><div class="part-left">' + tstodate(med1[i].fileu)+"  "+"  "+tstotime(med1[i].fileu) + ' </div></td> ');


                $('#row4').append('<td id=db3_' +i+ ' style="background-color:#FBB58A;"><div class="part-left">' + p + '</div><div class="part-right" style="background-color:#F5A36B;"></div></td> ');

                $('#row5').append('<td id=db4_' +i+ ' style="background-color:#FBB58A;"><div class="part-left">' + tstonow(q)+ '</div><div class="part-right" style="background-color:#F5A36B;"></div></td> ');

                $('#row6').append('<td id=db6_' +i+ ' style="background-color:#FBB58A;"><div class="part-left">' + tstodate(q) + '</div><div class="part-right" style="background-color:#F5A36B;"><div class=arrow-right1_'+i+' onclick="show_sub1(\''+ med1[i].name +'\',\''+i+'\')" style="width: 0;height: 0;margin-left: 2px;border-top: 5px solid transparent;border-bottom: 5px solid transparent;opacity: 1;border-left: 5px solid white;"></div></div></td> ');
                $('#row7').append('<td id=db7_' +i+ ' style="background-color:#FBB58A;"><div class="part-left">' + tstotime(q) + '</div><div class="part-right" style="background-color:#F5A36B;"></div></td> ');

            }//end of printing med1


            for (i = 0; i < low.length; i++) {

                $('#row1').append('<td id=dc_' + i + ' style="background-color:#C7DE9B; cursor: pointer;" onclick="show_rig(\'' + low[i].name + '\')"><div class="part-left" style="width:110px">' + low[i].name + '</div></td> ');
                $('#row2').append('<td id=dc1_' + i + ' style="background-color:#C7DE9B;"><div class="part-left" style="width:110px">' + low[i].lat + '</div></td> ');
                $('#row3').append('<td id=dc2_' + i + ' style="background-color:#C7DE9B;"><div class="part-left" style="width:110px">' + low[i].longi + '</div></td> ');
                $('#row8').append('<td id=dc8_' + i + ' style="background-color:#C7DE9B;"><div class="part-left" style="width:110px">' + tstodate(low[i].fileu)+"  "+"  "+tstotime(low[i].fileu) + ' </div></td> ');
                $('#row4').append('<td id=dc3_' + i + ' style="background-color:#C7DE9B;"><div class="part-left" style="width:110px"></div></td> ');
                $('#row5').append('<td id=dc4_' + i + ' style="background-color:#C7DE9B;"><div class="part-left" style="width:110px"></div></td> ');
                $('#row6').append('<td id=dc6_' + i + ' style="background-color:#C7DE9B;"><div class="part-left" style="width:110px"></div></td> ');
                $('#row7').append('<td id=dc7_' + i + ' style="background-color:#C7DE9B;"><div class="part-left" style="width:110px"></div></td> ');

            }//end of printing low


            if(((high1.length)+(med1.length)+(low.length))>11)
            {
                cal=11-((high1.length)+(med1.length)+(low.length));
            }


            if(((high1.length)+(med1.length)+(low.length))==1)
            {
                cal=12-((high1.length)+(med1.length)+(low.length));
            }
            else
            {
                cal=11-((high1.length)+(med1.length)+(low.length));
            }

            if(cal>0)
            {
                for(i=0;i<cal;i++)
                {
                    $('#row1').append('<td id=de_' + i + ' style="background-color:white;"><div class="part-left" style="width:110px"></div></td> ');
                    $('#row2').append('<td id=de1_' + i + ' style="background-color:white;"><div class="part-left" style="width:110px"></div></td> ');
                    $('#row3').append('<td id=de2_' + i + ' style="background-color:white;"><div class="part-left" style="width:110px"></div></td> ');
                    $('#row8').append('<td id=de8_' + i + ' style="background-color:white;"><div class="part-left" style="width:110px"></div></td> ');
                    $('#row4').append('<td id=de3_' + i + ' style="background-color:white;"><div class="part-left" style="width:110px"></div></td> ');
                    $('#row5').append('<td id=de4_' + i + ' style="background-color:white;"><div class="part-left" style="width:110px"></div></td> ');
                    $('#row6').append('<td id=de6_' + i + ' style="background-color:white;"><div class="part-left" style="width:110px"></div></td> ');
                    $('#row7').append('<td id=de7_' + i + ' style="background-color:white;"><div class="part-left" style="width:110px"></div></td> ');

                }
            }



            for (i = 0; i < maint1.length; i++) {

                $('.yo').append('<tr id=dd_' + i + '><td class="hov" style="width:125px" onclick="show_rig(\'' + maint1[i].name + '\')"><div>' + maint1[i].name + '</div></td>'+'<td  style="width:90px"><div>' + maint1[i].lat + '</div></td>'+'<td  style="width:90px" ><div>' + maint1[i].longi + '</div></td>'+'<td  style="width:122px" ><div>' + maint1[i].date + '</div></td>'+'<td  ><div>' + maint1[i].time + '</div></td>'+'</tr>');

            }//maint end


            if(maint1.length>12)
            {
                cal=11-(maint1.length);
            }


            if(maint1.length==1)
            {
                cal=12-(maint1.length);
            }
            else
            {
                cal=12-(maint1.length);
            }

            if(cal>0)
            {
                for(i=0;i<cal;i++)
                {
                    $('.yo').append('<tr style="height:17px;" id=dde_' + i + '><td  style="width:125px" ><div></div></td>'+'<td  style="width:90px" ><div></div></td>'+'<td  style="width:90px" ><div></div></td>'+'<td  style="width:122px" ><div></div></td>'+'<td  ><div></div></td>'+'</tr>');

                }
            }//end of appending maint empty row


            for (i = 0; i < mov1.length; i++) {

                $('.yo1').append('<tr id=dd_' + i + '><td class="hov" style="width:125px" onclick="show_rig(\'' + mov1[i].name + '\')"><div>' + mov1[i].name + '</div></td>'+'<td style="width:90px"><div>' + mov1[i].lat + '</div></td>'+'<td style="width:90px"><div>' + mov1[i].longi + '</div></td>'+'<td style="width:122px"><div>' + mov1[i].date+ '</div></td>'+'<td ><div>' + mov1[i].time+ '</div></td>'+'</tr>');

            }//mov end

            if(mov1.length>11)
            {
                cal=12-(mov1.length);
            }


            if(mov1.length==1)
            {
                cal=12-(mov1.length);
            }
            else
            {
                cal=12-(mov1.length);
            }

            if(cal>0)
            {
                for(i=0;i<cal;i++)
                {
                    $('.yo1').append('<tr style="height:17px;" id=dde_' + i + '><td style="width:125px"><div></div></td>'+'<td style="width:90px"><div></div></td>'+'<td style="width:90px"><div></div></td>'+'<td style="width:122px"><div></div></td>'+'<td ><div></div></td>'+'</tr>');

                }
            }//end of appending mov empty row

            for (i = 0; i < oth1.length; i++) {

                $('.yo2').append('<tr  id=dd_' + i + '><td class="hov" style="width:125px" onclick="show_rig(\'' + oth1[i].name + '\')"><div>' + oth1[i].name + '</div></td>'+'<td style="width:90px"><div>' + oth1[i].lat + '</div></td>'+'<td style="width:90px"><div>' + oth1[i].longi + '</div></td>'+'<td style="width:122px"><div>' + oth1[i].date + '</div></td>'+'<td ><div>' + oth1[i].time+ '</div></td>'+'</tr>');

            }//oth end

            if(oth1.length>11)
            {
                cal=12-(oth1.length);
            }


            if(oth1.length==1)
            {
                cal=12-(oth1.length);
            }
            else
            {
                cal=12-(oth1.length);
            }

            if(cal>0)
            {
                for(i=0;i<cal;i++)
                {
                    $('.yo2').append('<tr style="height:17px;" id=dde_' + i + '><td><div></div></td>'+'<td><div></div></td>'+'<td><div></div></td>'+'<td><div></div></td>'+'<td><div></div></td>'+'</tr>');

                }
            }//end of appending oth empty row





            function tstotime(timestamp){

                var date=new Date(timestamp*1000);
                var hours=date.getHours();
                var minutes=date.getMinutes();
                var seconds=date.getSeconds();

                var formattedTime=hours+':'+minutes+':'+seconds;
                return formattedTime;
            }



            function tstodate(timestamp){

                var date=new Date(timestamp*1000);
                var year=date.getFullYear();
                var month=date.getMonth()+1;
                var day=date.getDate();

                var formattedDate=day+'/'+month+'/'+year;
                return formattedDate;
            }



            function tstonow(timestamp){

                var now = new Date();
                var currentts=now.getTime();

                var diff=(currentts-(timestamp*1000));
                var noofdays=diff/(86400*1000);
                return parseInt(noofdays);

            }








            function bubble_sort(list,n)
            {
                var c, d, t;

                for (c = 0 ; c < ( n - 1 ); c++)
                {
                    for (d = 0 ; d < n - c - 1; d++)
                    {
                        if (list[d] < list[d+1])
                        {
                            /* Swapping */

                            t= list[d];
                            list[d]   = list[d+1];
                            list[d+1] = t;
                        }
                    }
                }
            }






            ddd=0
        }
//        req.session.rig_name=rigname;

        /*Display Current date&time*/
        var dt=new Date(data.time);
        $('#dttm').text(dt.toString("dd/MM/yyyy")+' '+dt.toString("hh:mm:ss tt"));
    });
});//end of ready function



// function show_rig(zi,index,latitude,longitude){

//       map.zoomToLongLat(zi, longitude, latitude);
//       }

function passrignm(rgname)
{
    window.localStorage.setItem("rgnm", rgname);
}

function show_rig(id){

    map.clickMapObject(map.getObjectById(id));

}

function show_sub(rig,index){



    var c=0,x=0;
    var x1,ink=0;


    ga=[];
    ga1=[0];
    ga11=[0];
    ra=[];
    raf=[];

    // $(this).toggleClass('clicked');


    p=0;
    for(j1=0;j1<new_arr_high.length;j1++){

        if(new_arr_high[j1].name==rig){

            ra[p]=new_arr_high[j1].timestamp;//timestamp array of each rig

            p++;//no of alarms per rig
        }
    }

    bubble_sort(ra,p);//sorted timestamps

    q=0;
    for(j2=0;j2<p;j2++){

        raf[j2]=tstodate(ra[j2]);//sorted dates

    }



    for(j3=0;j3<raf.length;j3=j3+x){
        x=0;

        for(j4=j3;j4<raf.length;j4++){

            if(j4==0){

                $(".heading1").css("color","#666666");

                if(($('#dk1_'+j4+'_'+index).is(':visible')) && ($('#dk2_'+j4+'_'+index).is(':visible')) && ($('#dk3_'+j4+'_'+index).is(':visible')) && ($('#dk5_'+j4+'_'+index).is(':visible')) && ($('#dk6_'+j4+'_'+index).is(':visible')) && ($('#dk7_'+j4+'_'+index).is(':visible')) && ($('#dk8_'+j4+'_'+index).is(':visible')))
                {




                    $('#dk1_'+j4+'_'+index).hide();
                    $('#dk2_'+j4+'_'+index).hide();
                    $('#dk3_'+j4+'_'+index).hide();
                    $('#dk8_'+j4+'_'+index).hide();
                    // $('#dk4_'+j4).hide();
                    $('#dk5_'+j4+'_'+index).hide();
                    $('#dk6_'+j4+'_'+index).hide();
                    $('#dk7_'+j4+'_'+index).hide();
                }

                else
                {

                    $(".heading1").css("color","black");


                    $('#da_'+index).after('<td id=dk1_'+j4+'_'+index+' style="background-color:white;border-bottom:0px;border-top:0px;border-right:0px;border-left:0px;"><div style="width:74px;font-size:12px"></div></td> ').show();
                    $('#da1_'+index).after('<td id=dk2_'+j4+'_'+index+' style="background-color:white;border-bottom:0px;border-top:0px;border-right:0px;border-left:0px;"><div style="width:74px;font-size:12px"></div></td> ').show();
                    $('#da2_'+index).after('<td  id=dk3_'+j4+'_'+index+' style="background-color:white;border-bottom:0px;border-top:0px;border-right:0px;border-left:0px;color:#D9343F;"><div style="width:74px;font-size:12px"></div></td> ').show();
                    $('#da8_'+index).after('<td  id=dk8_'+j4+'_'+index+' style="background-color:white;border-bottom:0px;border-top:0px;border-right:0px;border-left:0px;color:black;"><div style="width:74px;font-size:12px;">Alarm Details</div></td> ').show();
                    // $('#da3_0').after('<td id=dk4_'+j4+' style="background-color:#FFA6A6;"><div style="width:74px;font-size:12px"> </div></td> ').show();
                    $('#da4_'+index).after('<td id=dk5_'+j4+'_'+index+' style="background-color:#FFA6A6;"><div style="width:74px;">'+tstonow(ra[j4])+'</div></td> ').show();
                    $('#da6_'+index).after('<td id=dk6_'+j4+'_'+index+' style="background-color:#FFA6A6;"><div style="width:74px;">'+raf[j4]+'</div></td> ').show();
                    $('#da7_'+index).after('<td id=dk7_'+j4+'_'+index+' style="background-color:#FFA6A6;"><div style="width:74px;">'+tstotime(ra[j4])+'</div></td> ').show();
                }

            }

            if(raf[j3]==raf[j4]){
                x++;
            }

            else{
                ga1.push(j4);

                if(($('#dk1_'+j4+'_'+index).is(':visible')) && ($('#dk2_'+j4+'_'+index).is(':visible')) && ($('#dk3_'+j4+'_'+index).is(':visible')) && ($('#dk5_'+j4+'_'+index).is(':visible')) && ($('#dk6_'+j4+'_'+index).is(':visible')) && ($('#dk7_'+j4+'_'+index).is(':visible')) && ($('#dk8_'+j4+'_'+index).is(':visible'))) {


                    $('#dk1_'+j4+'_'+index).hide();
                    $('#dk2_'+j4+'_'+index).hide();
                    $('#dk3_'+j4+'_'+index).hide();
                    $('#dk8_'+j4+'_'+index).hide();
                    // $('#dk4_'+j4).hide();
                    $('#dk5_'+j4+'_'+index).hide();
                    $('#dk6_'+j4+'_'+index).hide();
                    $('#dk7_'+j4+'_'+index).hide();

                }

                else
                {

                    $('#da_'+index).after('<td id=dk1_'+j4+'_'+index+' style="background-color:white;border-bottom:0px;border-top:0px;border-right:0px;border-left:0px;"><div style="width:74px;font-size:12px"></div></td> ').show();
                    $('#da1_'+index).after('<td id=dk2_'+j4+'_'+index+' style="background-color:white;border-bottom:0px;border-top:0px;border-right:0px;border-left:0px;"><div style="width:74px;font-size:12px"></div></td> ').show();
                    $('#da2_'+index).after('<td  id=dk3_'+j4+'_'+index+' style="background-color:white;border-bottom:0px;border-top:0px;border-right:0px;border-left:0px;"><div style="width:74px;font-size:12px"></div></td> ').show();
                    $('#da8_'+index).after('<td  id=dk8_'+j4+'_'+index+' style="background-color:white;border-bottom:0px;border-top:0px;border-right:0px;border-left:0px;"><div style="width:74px;font-size:12px"></div></td> ').show();
                    // $('#da3_0').after('<td id=dk4_'+j4+' style="background-color:#FFA6A6;"><div style="width:74px;font-size:12px"> </div></td> ').show();
                    $('#da4_'+index).after('<td id=dk5_'+j4+'_'+index+' style="background-color:#FFA6A6;"><div style="width:74px;">'+tstonow(ra[j4])+'</div></td> ').show();
                    $('#da6_'+index).after('<td id=dk6_'+j4+'_'+index+' style="background-color:#FFA6A6;"><div style="width:74px;">'+raf[j4]+'</div></td> ').show();
                    $('#da7_'+index).after('<td id=dk7_'+j4+'_'+index+' style="background-color:#FFA6A6;"><div style="width:74px;">'+tstotime(ra[j4])+'</div></td> ').show();
                }

                break;
            }
        }
        ga.push(x);
    }

    for(j5=0;j5<ga1.length;j5++){

        if($('#dk4_'+ga1[j5]+'_'+index).is(':visible')){

            $('#dk4_'+ga1[j5]+'_'+index).hide();
        }

        else{

            $('#da3_'+index).after('<td id=dk4_'+ga1[j5]+'_'+index+' style="background-color:#FFA6A6;"><div style="width:74px;"> '+ga[j5]+'</div></td> ').show();
        }

    }

}//end of show_sub



function show_sub1(rig,index){

    var c=0,x=0;
    var x1,ink=0;

    ga=[];
    ga1=[0];
    ga11=[0];
    ra=[];
    raf=[];

    // $(this).toggleClass('clicked');

    p=0;
    for(j1=0;j1<new_arr_med.length;j1++){

        if(new_arr_med[j1].name==rig){

            ra[p]=new_arr_med[j1].timestamp;//timestamp array of each rig

            p++;//no of alarms per rig
        }
    }

    bubble_sort(ra,p);//sorted timestamps

    q=0;
    for(j2=0;j2<p;j2++){

        raf[j2]=tstodate(ra[j2]);//sorted dates

    }



    for(j3=0;j3<raf.length;j3=j3+x){
        x=0;

        for(j4=j3;j4<raf.length;j4++){

            if(j4==0){

                if(($('#dm1_'+j4+'_'+index).is(':visible')) && ($('#dm2_'+j4+'_'+index).is(':visible')) && ($('#dm3_'+j4+'_'+index).is(':visible')) && ($('#dm5_'+j4+'_'+index).is(':visible')) && ($('#dm6_'+j4+'_'+index).is(':visible')) && ($('#dm7_'+j4+'_'+index).is(':visible')) && ($('#dm8_'+j4+'_'+index).is(':visible')))
                {
                    $(".heading1").css("color","#666666");


                    $('#dm1_'+j4+'_'+index).hide();
                    $('#dm2_'+j4+'_'+index).hide();
                    $('#dm3_'+j4+'_'+index).hide();
                    $('#dm8_'+j4+'_'+index).hide();
                    // $('#dk4_'+j4).hide();
                    $('#dm5_'+j4+'_'+index).hide();
                    $('#dm6_'+j4+'_'+index).hide();
                    $('#dm7_'+j4+'_'+index).hide();
                }
                else{
                    $(".heading1").css("color","black");

                    $('#db_'+index).after('<td id=dm1_'+j4+'_'+index+' style="background-color:white;border-bottom:0px;border-top:0px;border-right:0px;border-left:0px;"><div style="width:74px;font-size:12px"></div></td> ').show();
                    $('#db1_'+index).after('<td id=dm2_'+j4+'_'+index+' style="background-color:white;border-bottom:0px;border-top:0px;border-right:0px;border-left:0px;"><div style="width:74px;font-size:12px"></div></td> ').show();
                    $('#db2_'+index).after('<td  id=dm3_'+j4+'_'+index+' style="background-color:white;border-bottom:0px;border-top:0px;border-right:0px;border-left:0px;color:#D9343F;"> <div style="width:74px;font-size:12px"></div></td> ').show();
                    $('#db8_'+index).after('<td  id=dm8_'+j4+'_'+index+' style="background-color:white;border-bottom:0px;border-top:0px;border-right:0px;border-left:0px;color:black;">  <div style="width:74px;font-size:12px">Alarm Details</div></td> ').show();
                    // $('#da3_0').after('<td id=dk4_'+j4+' style="background-color:#FFA6A6;"><div style="width:74px;font-size:12px"> </div></td> ').show();
                    $('#db4_'+index).after('<td id=dm5_'+j4+'_'+index+' style="background-color:#FFD2BA;"><div style="width:74px;">'+tstonow(ra[j4])+'</div></td> ').show();
                    $('#db6_'+index).after('<td id=dm6_'+j4+'_'+index+' style="background-color:#FFD2BA;"><div style="width:74px;">'+raf[j4]+'</div></td> ').show();
                    $('#db7_'+index).after('<td id=dm7_'+j4+'_'+index+' style="background-color:#FFD2BA;"><div style="width:74px;">'+tstotime(ra[j4])+'</div></td> ').show();
                }

            }

            if(raf[j3]==raf[j4]){
                x++;
            }

            else{
                ga1.push(j4);

                if(($('#dm1_'+j4+'_'+index).is(':visible')) && ($('#dm2_'+j4+'_'+index).is(':visible')) && ($('#dm3_'+j4+'_'+index).is(':visible')) && ($('#dm5_'+j4+'_'+index).is(':visible')) && ($('#dm6_'+j4+'_'+index).is(':visible')) && ($('#dm7_'+j4+'_'+index).is(':visible')) && ($('#dm8_'+j4+'_'+index).is(':visible'))) {


                    $('#dm1_'+j4+'_'+index).hide();
                    $('#dm2_'+j4+'_'+index).hide();
                    $('#dm3_'+j4+'_'+index).hide();
                    $('#dm8_'+j4+'_'+index).hide();
                    // $('#dk4_'+j4).hide();
                    $('#dm5_'+j4+'_'+index).hide();
                    $('#dm6_'+j4+'_'+index).hide();
                    $('#dm7_'+j4+'_'+index).hide();
                }
                else{

                    $('#db_'+index).after('<td id=dm1_'+j4+'_'+index+' style="background-color:white;border-bottom:0px;border-top:0px;border-right:0px;border-left:0px;"><div style="width:74px;font-size:12px"></div></td> ').show();
                    $('#db1_'+index).after('<td id=dm2_'+j4+'_'+index+' style="background-color:white;border-bottom:0px;border-top:0px;border-right:0px;border-left:0px;"><div style="width:74px;font-size:12px"></div></td> ').show();
                    $('#db2_'+index).after('<td  id=dm3_'+j4+'_'+index+' style="background-color:white;border-bottom:0px;border-top:0px;border-right:0px;border-left:0px;"><div style="width:74px;font-size:12px"></div></td> ').show();
                    $('#db8_'+index).after('<td  id=dm8_'+j4+'_'+index+' style="background-color:white;border-bottom:0px;border-top:0px;border-right:0px;border-left:0px;"><div style="width:74px;font-size:12px"></div></td> ').show();
                    // $('#da3_0').after('<td id=dk4_'+j4+' style="background-color:#FFA6A6;"><div style="width:74px;font-size:12px"> </div></td> ').show();
                    $('#db4_'+index).after('<td id=dm5_'+j4+'_'+index+' style="background-color:#FFD2BA;"><div style="width:74px;">'+tstonow(ra[j4])+'</div></td> ').show();
                    $('#db6_'+index).after('<td id=dm6_'+j4+'_'+index+' style="background-color:#FFD2BA;"><div style="width:74px;">'+raf[j4]+'</div></td> ').show();
                    $('#db7_'+index).after('<td id=dm7_'+j4+'_'+index+' style="background-color:#FFD2BA;"><div style="width:74px;">'+tstotime(ra[j4])+'</div></td> ').show();
                }

                break;
            }
        }
        ga.push(x);
    }

    for(j5=0;j5<ga1.length;j5++){

        if($('#dm4_'+ga1[j5]+'_'+index).is(':visible')){

            $('#dm4_'+ga1[j5]+'_'+index).hide();
        }

        else{

            $('#db3_'+index).after('<td id=dm4_'+ga1[j5]+'_'+index+' style="background-color:#FFD2BA;"><div style="width:74px;"> '+ga[j5]+'</div></td> ').show();
        }

    }

}//end of show_sub1

function tstotime(timestamp){

    var date=new Date(timestamp*1000);
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();

    var formattedTime=hours+':'+minutes+':'+seconds;
    return formattedTime;
}

function tstodate(timestamp){

    var date=new Date(timestamp*1000);
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var day=date.getDate();

    var formattedDate=day+'/'+month+'/'+year;
    return formattedDate;
}

function tstonow(timestamp){

    var now = new Date();
    var currentts=now.getTime();

    var diff=(currentts-(timestamp*1000));
    var noofdays=diff/(86400*1000);
    return parseInt(noofdays);

}

function bubble_sort(list,n)
{
    var c, d, t;

    for (c = 0 ; c < ( n - 1 ); c++)
    {
        for (d = 0 ; d < n - c - 1; d++)
        {
            if (list[d] < list[d+1])
            {
                /* Swapping */

                t         = list[d];
                list[d]   = list[d+1];
                list[d+1] = t;
            }
        }
    }
}

//function keepAspectRatio(width, height) {
//
//    switch(true) {
//        case (window.innerWidth > 1024):
//            $("#mapdiv").css({
//
//                'width': (window.innerWidth * 70) / 100 + 'px',
//                'height': (((window.innerWidth * 70) / 100) / (width / height)) + 'px'
//
////        'z-index': '0'
//            });
////            $(".map_cover").css({
////                'margin-right': 200+'px',
////                'background-color': 'white',
////                'width': (window.innerWidth * 69) / 100 + 'px',
////                'height': (((window.innerWidth * 69) / 100) / (width / height)) + 'px'
////
//////        'z-index': '0'
////            });
//            break;
//        default:
////            $(".map_cover").css({
////
////                'width': (window.innerWidth * 100) / 100 + 'px',
////                'height': (((window.innerWidth * 100) / 100) / (width / height)) + 'px'
////
//////        'z-index': '0'
////            });
////            $(".mapdiv").css({
////
////                'width': (window.innerWidth * 100) / 100 + 'px',
////                'height': (((window.innerWidth * 100) / 100) / (width / height)) + 'px'
////
//////        'z-index': '0'
////            });
//    }
//}
//function my_ratio()
//{
//    keepAspectRatio( 16,9);
//}
function bubbleSort(a, par) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i][par] < a[i + 1][par]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

function distinct(array1,array2){

    var max=0,rnme='',rgname=[],temp_arr=[];

    for(i=0;i<array1.length;i++)
    {

        if( temp_arr[array1[i].name]) continue;
        temp_arr[array1[i].name] = true;
        rgname.push({"name":array1[i].name});

    }

    for(i=0;i<rgname.length;i++)
    {

        for(k=0;k<array1.length;k++)
        {
            if(rgname[i].name==array1[k].name)
            {


                if(array1[k].timestamp>max)
                {
                    max=array1[k].timestamp;
                    rnme=array1[k].name;
                }
            }
        }
        array2.push({"name":rgname[i].name,
            "timestamp":max});
        max=0;
    }
}
function hrdiff(timestamp){

    var now = new Date();
    var currentts=now.getTime();

    var diff=(currentts-(timestamp*1000));
    var noofhrs=diff/(3600*1000);
    return parseInt(noofhrs);

}