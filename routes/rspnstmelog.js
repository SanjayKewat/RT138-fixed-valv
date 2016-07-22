/**
 * Created by Administrator on 5/9/2014.
 */

var mysql = require('mysql');
var db_confg=require('db_confg');

var mysqlPool  = mysql.createPool({
    connectionLimit : 100, //important
    host: db_confg.DB.host,
    user: db_confg.DB.user,
    password: db_confg.DB.password,
    database: db_confg.DB.database,
    port: db_confg.DB.port,
    multipleStatements:true

});

//Here to read data for Response time table page
exports.getdata = function(req, res,next){
    var rigid=req.params.rig_id;

    var strQuery ="SELECT * FROM response_time_data_view_new where rig_id='"+rigid+"' order by valve_id asc";

    mysqlPool.getConnection(function(err, connection) {

        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'Response Time Log page error',
                err:    err.code
            });
        } else {
            connection.query(strQuery, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'Response Time Log page error',
                        err: err.code
                    });
                }
                try {
                    res.json({ message: rows });
                    connection.release();
                }
                catch (err) {

                    console.log('Error in  Response time table page : ' + err);
                    res.json({ message: rows });
                    connection.release();
                }
            });
        }
    });
};


exports.rsp_valv_master = function(req, res,next){
    var rigid=req.params.rig_id;

    var strQuery ="SELECT * FROM resp_valve_master where rig_id="+rigid;

    mysqlPool.getConnection(function(err, connection) {

        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'Response Time Log page error',
                err:    err.code
            });
        } else {
            connection.query(strQuery, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'Response Time Log page error',
                        err: err.code
                    });
                }
                try {
                    res.json({ message: rows });
                    connection.release();
                }
                catch (err) {

                    console.log('Error in  Response time table page : ' + err);
                    res.json({ message: rows });
                    connection.release();
                }
            });
        }
    });
};



//Here to read data for Response time chart before & after 5 seconds
exports.rspchart = function(req, res,next){
    var rigid=req.params.rig_id;
    var frmdt=req.params.frmdt;
    var todt=req.params.todt;
    var shr_data=[],mani_data=[],ann_data=[];
    var shrQuery = "call sp_rsp_shr_chart(2,"+rigid+","+frmdt+","+todt+")";
    var maniQuery = "call sp_rsp_mani_chart(1,"+rigid+","+frmdt+","+todt+")";
    var annQuery = "call sp_rsp_ann_chart(3,"+rigid+","+frmdt+","+todt+")";

    mysqlPool.getConnection(function(err, connection) {

        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'Response Time Log page error',
                err:    err.code
            });
        } else {

            connection.query(shrQuery, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'Response Time Log page error',
                        err: err.code
                    });
                }
                try {
                    shr_data = rows[0];
                  //   connection.release();
                }
                catch (err) {

                    console.log('Error in Response time page ' + err);
                    shr_data = 404;
                    connection.release();
                }
            });

            connection.query(maniQuery, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'Response Time Log page error',
                        err: err.code
                    });
                }
                try {
                    mani_data = rows[0];
                   // connection.release();
                }
                catch (err) {

                    console.log('Error in Response time page ' + err);
                    mani_data = 404;
                    connection.release();
                }
            });

            connection.query(annQuery, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'Response Time Log page error',
                        err: err.code
                    });
                }
                try {
                    ann_data = rows[0];
                    connection.release();
                }
                catch (err) {

                    console.log('Error in Response time page ' + err);
                    ann_data = 404;
                    connection.release();
                }


                res.json({shear: shr_data, mani: mani_data, annular: ann_data});
            });
        }
    });
};



//Here to read data for Response time chart Historical
exports.his_rsp = function(req, res){
    var rigid=req.params.rig_id;
    var month=req.params.month;
    var year=req.params.year;
    var strQuery = "SELECT * FROM valve_hist_data where rig_id='"+rigid+"' and month(date_time)="+month+" and year(date_time)="+year;

    mysqlPool.getConnection(function(err, connection) {
        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'Response Time Log page error',
                err:    err.code
            });
        } else {

            connection.query(strQuery, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'Response Time Log page error',
                        err: err.code
                    });
                }



                try {
                    res.json({ message: rows });
//                res.send(rigid+","+chtid+","+valid);
                   connection.release();
                }
                catch (err) {

                    console.log('Error in Response Time page ' + err);
                    res.json({ message: 404 });
                  connection.release();
                }
            });
        }

    });

};


