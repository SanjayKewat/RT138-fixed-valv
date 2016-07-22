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



exports.ff_logs=function(req, res,next){

    

    var rigid=req.params.rig_id;
	var fm=req.params.frm_dt;
	var tm=req.params.to_dt;
    var strQuery1 = "SELECT * FROM valve_pos_fn_fail_det WHERE rig_id='"+rigid+"' AND date_time >=FROM_UNIXTIME("+fm+") AND date_time<= DATE_ADD(FROM_UNIXTIME("+tm+"),INTERVAL 1 DAY)";
	
  
	
	mysqlPool.getConnection(function(err, connection) {

        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'Valve Position Function Log page error',
                err:    err.code
            });
        } else {

            connection.query(strQuery1, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'Valve Position Function Log page error',
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