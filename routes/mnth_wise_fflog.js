/**
 * Created by Administrator on 11/7/2014.
 */


var mysql = require('mysql');
var db_confg=require('db_confg');

var mysqlPool  = mysql.createPool({
    host: db_confg.DB.host,
    user: db_confg.DB.user,
    password: db_confg.DB.password,
    database: db_confg.DB.database,
    port: db_confg.DB.port,
    multipleStatements:true

});


//Here to read data for Monthwise FunctionFail  logs page
/*
exports.mwise_fflog_clm = function(req, res,next){
    var rigid=req.param('rig_id');
    var vid=req.param('vid');
    var year=req.param('year');
    var month=req.param('month');
    var open_col_name,close_col_name;
    var opn_arry=[];
    vid=parseInt(vid);

    switch (vid) {

        case 1:
            open_col_name="an_open_fail_total";
            close_col_name="an_close_fail_total";
            break;

        case 2:
            open_col_name="up_open_fail_total";
            close_col_name="up_close_fail_total";
            break;

        case 3:
            open_col_name="bl_open_fail_total";
            close_col_name="bl_close_fail_total";
            break;

        case 4:
            open_col_name="lo_open_fail_total";
            close_col_name="lo_close_fail_total";
            break;

        case 5:
            open_col_name="ch_open_fail_total";
            close_col_name="ch_close_fail_total";
            break;

        case 6:
            open_col_name="ki_open_fail_total";
            close_col_name="ki_close_fail_total";
            break;

        case 7:
            open_col_name="by_low_fail_total";
            close_col_name="by_high_fail_total";
            break;

    }


    var opnQuery = "select id,rig_id,local_time,com_day,com_month,"+open_col_name+" as 'open_total',"+close_col_name+" as 'close_total' from month_colmn_log_view where rig_id="+rigid+" and com_month="+month+" and com_year="+year;


    mysqlPool.getConnection(function(err, connection) {

        if(err) throw err;

        connection.query(opnQuery, function(err, rows) {
            if(err) {
                connection.release();
                console.error(err);
                return;
            }
            try
            {
                opn_arry= rows;
                connection.release();
            }
            catch (err)
            {

                console.log('Error in Month wise Function logs page '+err);
                opn_arry= 404;
                connection.release();
            }
            res.json({open:opn_arry});
        });

    });
};
*/

exports.mwise_fflog_clm = function(req, res,next){

    var rigid=req.params.rig_id;
    var vid=req.params.vid;
    var year=req.params.year;
    var month=req.params.month;
    var open_col_name,close_col_name;
    var opn_arry=[],cls_arry=[];
    vid=parseInt(vid);

    switch (vid) {

        case 1:
            close_col_name=1;
            open_col_name=2;
            break;

        case 2:
            close_col_name=11;
            open_col_name=12;
            break;

        case 3:
            close_col_name=3;
            open_col_name=4;
            break;

        case 4:
            close_col_name=13;
            open_col_name=14;
            break;

        case 5:
            close_col_name=7;
            open_col_name=8;
            break;

        case 6:
            close_col_name=9;
            open_col_name=10;
            break;

        case 7:
            close_col_name=5;
            open_col_name=6;
            break;

        case 8:
            close_col_name=15;
            open_col_name=16;
            break;

        case 9:
            close_col_name=17;
            open_col_name=18;
            break;

        case 10:
            close_col_name=19;
            open_col_name=20;
            break;

        case 11:
            close_col_name=21;
            open_col_name=22;
            break;

        case 12:
            close_col_name=23;
            open_col_name=24;
            break;

        case 13:
            close_col_name=25;
            open_col_name=26;
            break;
    }


    var opnQuery = "select * from ff_month_colmn_log_view where Rig_ID="+rigid+" and valve_id="+open_col_name+" and com_month="+month+" and com_year="+year;
    var clsQuery = "select * from ff_month_colmn_log_view where Rig_ID="+rigid+" and valve_id="+close_col_name+" and com_month="+month+" and com_year="+year;

    mysqlPool.getConnection(function(err, connection) {

        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'Monthwise Function Fail Log Column page error',
                err:    err.code
            });
        } else {

            connection.query(opnQuery, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'Monthwise Function Fail Log page error',
                        err: err.code
                    });
                }
                try {
                    opn_arry = rows;
//                res.send(rigid+","+chtid+","+valid);
                 //   connection.release();
                }
                catch (err) {

                    console.log('Error in Month wise Function logs page ' + err);
                    opn_arry = 404;
                    connection.release();
                }

            });

            connection.query(clsQuery, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'Monthwise Function Fail Log page error',
                        err: err.code
                    });
                }
                try {
                    cls_arry = rows;
//                res.send(rigid+","+chtid+","+valid);
                  connection.release();
                }
                catch (err) {

                    console.log('Error in Month wise Function logs page ' + err);
                    cls_arry = 404;
                    connection.release();
                }

                res.json({open: opn_arry, close: cls_arry});

            });
        }
    });
};
//Here to read data for Scatter Monthwise FunctionFail  logs page
exports.mwise_fflog_sct = function(req, res,next){
    var rigid=req.params.rig_id;
    var vid=req.params.vid;
    var year=req.params.year;
    var month=req.params.month;
    var open_col_name,close_col_name;
    var opn_arry=[],cls_arry=[];

    vid=parseInt(vid);
    switch (vid) {

        case 1:
            close_col_name=1;
            open_col_name=2;
            break;

        case 2:
            close_col_name=11;
            open_col_name=12;
            break;

        case 3:
            close_col_name=3;
            open_col_name=4;
            break;

        case 4:
            close_col_name=13;
            open_col_name=14;
            break;

        case 5:
            close_col_name=7;
            open_col_name=8;
            break;

        case 6:
            close_col_name=9;
            open_col_name=10;
            break;

        case 7:
            close_col_name=5;
            open_col_name=6;
            break;

        case 8:
            close_col_name=15;
            open_col_name=16;
            break;

        case 9:
            close_col_name=17;
            open_col_name=18;
            break;

        case 10:
            close_col_name=19;
            open_col_name=20;
            break;

        case 11:
            close_col_name=21;
            open_col_name=22;
            break;

        case 12:
            close_col_name=23;
            open_col_name=24;
            break;

        case 13:
            close_col_name=25;
            open_col_name=26;
            break;
    }

    var opnQuery = "select * from function_fail where Value=1 and Rig_ID="+rigid+" and Valve_ID="+open_col_name+" and month(Date_time)="+month+" and year(Date_time)="+year;
    var clsQuery = "select * from function_fail where Value=1 and Rig_ID="+rigid+" and Valve_ID="+close_col_name+" and month(Date_time)="+month+" and year(Date_time)="+year;

    mysqlPool.getConnection(function(err, connection) {

        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'Monthwise Function Scatter Log page error',
                err:    err.code
            });
        }
        else {

            connection.query(opnQuery, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'Monthwise Function Fail Scatter Log page error',
                        err: err.code
                    });
                }
                try {
                    opn_arry = rows;
//                res.send(rigid+","+chtid+","+valid);
                    //   connection.release();
                }
                catch (err) {

                    console.log('Error in Month wise Function logs page ' + err);
                    opn_arry = 404;
                    connection.release();
                }

            });

            connection.query(clsQuery, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'Monthwise Function fail Scatter Log page error',
                        err: err.code
                    });
                }
                try {
                    cls_arry = rows;
//                res.send(rigid+","+chtid+","+valid);
                   connection.release();
                }
                catch (err) {

                    console.log('Error in Month wise Function logs page ' + err);
                    cls_arry = 404;
                    connection.release();
                }

                res.json({open: opn_arry, close: cls_arry});

            });
        }
    });
};

//Here to read data for Function logs Valve Drop down page
exports.fflog_drop = function(req, res){

    var rig_id=req.params.rig_id;
   // var strQuery = "SELECT * FROM fun_fail_master_view";
    var strQuery = "SELECT * FROM valve_2_master where rig_id="+rig_id;
    mysqlPool.getConnection(function(err, connection) {

        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'Monthwise Function fail Log Valve name page error',
                err:    err.code
            });
        } else {

            connection.query(strQuery, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'Monthwise Function Log Valve name page error',
                        err: err.code
                    });
                }
                try {
                    res.json({ message: rows });
//                res.send(rigid+","+chtid+","+valid);
                  connection.release();
                }
                catch (err) {

                    console.log('Error in Flog Dropdown  page ' + err);
                    res.json({ message: 404 });
                    connection.release();
                }
            });


        }
    });
};
