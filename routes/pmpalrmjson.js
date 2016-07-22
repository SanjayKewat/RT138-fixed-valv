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



exports.pumpdata=function(req, res,next){

    

    var rid=req.params.rig_id;
	var yr=req.params.year_val;
	
    
	var strQuery1 = "call pmp_chart("+yr+","+rid+")";
  
	
	mysqlPool.getConnection(function(err, connection) {

        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'Pump Alarm LOGS page error',
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

                    res.json({ message: rows });
                    //  connection.release();
                }
                catch (err) {

                    console.log('Error in Historical Alarm Details page ' + err);
                    res.json({ message: 404 });
                    connection.release();
                }

            });
        }
    });	

};

exports.slogdata=function(req, res,next){



    var rid=req.params.rig_id;
    var yr=req.params.year_val;
	
    
	
	var strQuery2 = "SELECT * FROM shutdwn_log where rig_id='"+rid+"' AND year(start_date_time)='"+yr+"'";
  
	
	mysqlPool.getConnection(function(err, connection) {

        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'Pump Alarm LOGS page error',
                err:    err.code
            });
        } else {

            connection.query(strQuery2, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'Pump Alarm LOGS page error',
                        err: err.code
                    });
                }
                try {

                    res.json({ message: rows });
                     connection.release();
                }
                catch (err) {

                    console.log('Error in Historical Alarm Details page ' + err);
                    res.json({ message: 404 });
                    connection.release();
                }

            });
        }
    });	

};


exports.slogdata_chart=function(req, res,next){



    var rid=req.params.rig_id;
    var yr=req.params.year_val;



    var strQuery3 = "call slog_chart("+yr+","+rid+")";
  
	
	mysqlPool.getConnection(function(err, connection) {

        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'Pump Alarm LOGS page error',
                err:    err.code
            });
        } else {

            connection.query(strQuery3, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'Pump Alarm LOGS page error',
                        err: err.code
                    });
                }
                try {

                    res.json({ message: rows });
                    connection.release();
                }
                catch (err) {

                    console.log('Error in Historical Alarm Details page ' + err);
                    res.json({ message: 404 });
                    connection.release();
                }

            });
        }

    });	

};

exports.pump_rtime=function(req, res,next){



  /*  var rid=req.params.rig_id;
    var yr=req.params.year_val;



	var strQuery4 = "SELECT * FROM pump_run_time where rig_id='"+rid+"' AND year(date_time)='"+yr+"'";


	mysqlPool.getConnection(function(err, connection) {

        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'Pump Alarm LOGS page error',
                err:    err.code
            });
        } else {

            connection.query(strQuery4, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'Pump Alarm LOGS page error',
                        err: err.code
                    });
                }
                try {

                    res.json({ message: rows });
                     connection.release();
                }
                catch (err) {

                    console.log('Error in Historical Alarm Details page ' + err);
                    res.json({ message: 404 });
                    connection.release();
                }

            });
        }
    });	*/


    var rid=req.params.rig_id;
    var yr=req.params.year_val;



    var strQuery1= "SELECT * FROM pump_run_time where rig_id='"+rid+"' AND year(date_time)='"+yr+"' order by pump_id";
    var strQuery2 = " SELECT * FROM pump_master WHERE rig_id='"+rid+"' order by pump_id";
    var pump_run_time=[],no_of_valve=[];

    mysqlPool.getConnection(function(err, connection) {

        if(err) throw err;

        connection.query(strQuery1, function(err, rows) {
            if(err) {
               // connection.release();
                console.error(err);
                return;
            }
            try
            {

                pump_run_time=rows;
             //   connection.release();
            }
            catch (err)
            {

                console.log('Error in pump alarm page '+err);
                res.json({ message: 404 });
                connection.release();
            }

        });

        connection.query(strQuery2, function(err, rows) {
            if(err) {

                console.error(err);
                return;
            }
            try
            {
                no_of_valve=rows;

//                res.json({ message2: rows });
                connection.release();
            }
            catch (err)
            {

                console.log('Error in pump alarm page '+err);
                no_of_valve=404;
                connection.release();
            }
            res.json({ message:pump_run_time ,nov:no_of_valve });

        });

    });

};