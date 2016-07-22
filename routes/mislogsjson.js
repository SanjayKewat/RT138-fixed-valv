/**
 * Created by Administrator on 6/5/2014.
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



exports.misyrdata=function(req, res,next){

    var year=req.params.year;
    var rigid=req.params.rig_id;
//    var tm=req.param('to');

    var strQuery1 = " SELECT * FROM yr_miss WHERE rig_id='"+rigid+"' AND yr ='"+year+"' order by loss_id";
    var strQuery2 = " SELECT * FROM mnth_miss WHERE rig_id='"+rigid+"' AND yr ='"+year+"' order by loss_id";

    var yr_miss=[],mnth_miss=[];

    mysqlPool.getConnection(function(err, connection) {

        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'MISCELLANEOUS LOGS page error',
                err:    err.code
            });
        } else {

            connection.query(strQuery1, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'MISCELLANEOUS LOGS page error',
                        err: err.code
                    });
                }
                try {

                    yr_miss = rows;
//                res.json({ message: rows });
                    //connection.release();
                }
                catch (err) {

                    console.log('Error in Function Log Details page ' + err);
//                res.json({ message: 404 });
                    yr_miss = 404;
                    connection.release();
                }

            });
            connection.query(strQuery2, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'MISCELLANEOUS LOGS page error',
                        err: err.code
                    });
                }
                try {
                    mnth_miss = rows;
//                res.json({ message2: rows });
                   connection.release();
                }
                catch (err) {

                    console.log('Error in Function Log Details page ' + err);
                    mnth_miss = 404;
                    connection.release();
                }
                res.json({ message: yr_miss, message1: mnth_miss });

            });
        }
    });

};




//Here to read data for Monthwise Function  logs page
exports.miss_log_clm = function(req, res,next){
    var rigid=req.params.rig_id;
    var lsid=req.params.ls_id;
    var year=req.params.year;
    var month=req.params.month;
    var sqlQuery = "call miss_log_clm("+rigid+","+lsid+","+year+","+month+")";

    mysqlPool.getConnection(function(err, connection) {

        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'MISCELLANEOUS LOGS page error',
                err:    err.code
            });
        } else {
            connection.query(sqlQuery, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'MISCELLANEOUS LOGS page error',
                        err: err.code
                    });
                }
                try {
                    res.json({ message: rows });
                     connection.release();
                }
                catch (err) {

                    console.log('Error in Month wise MISCELLANEOUS logs page ' + err);
                    res.json({ message: 404 });
                    connection.release();
                }


            });
        }

    });
};


//Here to read data for Monthwise MISCELLANEOUS  logs page
exports.miss_log_sct = function(req, res,next){
    var rigid=req.params.rig_id;
    var lsid=req.params.ls_id;
    var year=req.params.year;
    var month=req.params.month;
    var sqlQuery = "call miss_log_sct("+rigid+","+lsid+","+year+","+month+")";


    mysqlPool.getConnection(function(err, connection) {

        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'MISCELLANEOUS LOGS Scatter page error',
                err:    err.code
            });
        } else {

            connection.query(sqlQuery, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'MISCELLANEOUS LOGS page error',
                        err: err.code
                    });
                }
                try {
                    res.json({message: rows});
                     connection.release();
                }
                catch (err) {

                    console.log('Error in Month wise MISCELLANEOUS logs page ' + err);
                    res.json({message: 404});
                    connection.release();
                }


            });
        }

    });
};


//Here to read data for MISCELLANEOUS logs Valve Drop down page
exports.loss_drop = function(req, res){
    var rigid=req.params.rig_id;

    var strQuery = "SELECT * FROM loss_master  where rig_id="+rigid;

    mysqlPool.getConnection(function(err, connection) {
        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'MISCELLANEOUS LOGS page error',
                err:    err.code
            });
        } else {

            connection.query(strQuery, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'MISCELLANEOUS LOGS page error',
                        err: err.code
                    });
                }
                try {
                    res.json({ message: rows });
//                res.send(rigid+","+chtid+","+valid);
                     connection.release();
                }
                catch (err) {

                    console.log('Error in MISCELLANEOUS Dropdown  page ' + err);
                    res.json({ message: 404 });
                    connection.release();
                }
            });
        }


    });
};