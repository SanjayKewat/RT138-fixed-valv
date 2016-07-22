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



exports.alrm_hist=function(req, res,next){

    

    var rigid=req.params.rig_id;
	var fm=req.params.from;
	var tm=req.params.to;
    var strQuery1 = "SELECT * FROM alarm_table_hist WHERE rig_id="+rigid+" AND alarm_day >=FROM_UNIXTIME("+fm+") AND alarm_clear<= FROM_UNIXTIME("+tm+")";
	
  
	
	mysqlPool.getConnection(function(err, connection) {
        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'Historical Alarm Log page error',
                err:    err.code
            });
        } else {

            connection.query(strQuery1, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'Historical Alarm Log page error',
                        err: err.code
                    });
                }
                try {

                    res.json({ message: rows });
                   // connection.release();
                }
                catch (err) {

                    console.log('Error in Historical Alarm Details page ' + err);
                    res.json({ message: 404 });
                    connection.release();
                }

            });
        }
    });	

}