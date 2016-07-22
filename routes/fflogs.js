/**
 * Created by Administrator on 6/5/2014.
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



exports.fldata=function(req, res,next){

    var year=req.params.year;
    var rigid=req.params.rig_id;
 //   console.log(rigid);
//    var tm=req.param('to');

    var strQuery1 = "call ffun_log_yr_open("+rigid+","+year+")";// " SELECT * FROM ffun_log_year_open WHERE rig_id='"+rigid+"' AND yr ='"+year+"'";
    var strQuery2 ="call ffun_log_yr_close("+rigid+","+year+")";// " SELECT * FROM ffun_log_year_close WHERE rig_id='"+rigid+"' AND yr ='"+year+"'";
    var strQuery3 = "call ffun_log_month_open("+rigid+","+year+")";//" SELECT * FROM ffun_log_mnth_open WHERE rig_id='"+rigid+"' AND yr ='"+year+"'";
    var strQuery4 = "call ffun_log_month_close("+rigid+","+year+")";//" SELECT * FROM ffun_log_mnth_close WHERE rig_id='"+rigid+"' AND yr ='"+year+"'";
    var year_f_log_open=[],year_f_log_close=[],mnth_f_log_open=[],mnth_f_log_close=[];

    mysqlPool.getConnection(function(err, connection) {

        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'Yearly Function fail Log page error',
                err:    err.code
            });
        } else {
            connection.query(strQuery1, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'Yearly Function fail Log page error',
                        err: err.code
                    });
                }
                try {

                    year_f_log_open = rows[0];
//                res.json({ message: rows });
                    // connection.release();
                }
                catch (err) {

                    console.log('Error in Function Log Details page ' + err);
//                res.json({ message: 404 });
                    year_f_log_open = 404;
                    connection.release();
                }

            });


            connection.query(strQuery2, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'Yearly Function fail Log page error',
                        err: err.code
                    });
                }
                try {
                    year_f_log_close = rows[0];
//                res.json({ message2: rows });
                   // connection.release();
                }
                catch (err) {

                    console.log('Error in Function Log Details page ' + err);
                    year_f_log_close = 404;
                    connection.release();
                }
                //  res.json({ message: year_f_log_open,message1:year_f_log_close });

            });

            connection.query(strQuery3, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'Yearly Function fail Log page error',
                        err: err.code
                    });
                }
                try {
                    mnth_f_log_open = rows[0];
//                res.json({ message2: rows });
                  //  connection.release();
                }
                catch (err) {

                    console.log('Error in Function Log Details page ' + err);
                    mnth_f_log_open = 404;
                    connection.release();
                }
                //     res.json({ message: year_f_log_open,message1:year_f_log_close });

            });

            connection.query(strQuery4, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'Yearly Function fail Log page error',
                        err: err.code
                    });
                }
                try {
                    mnth_f_log_close = rows[0];
//                res.json({ message2: rows });
                    connection.release();
                }
                catch (err) {

                    console.log('Error in Function Log Details page ' + err);
                    mnth_f_log_close = 404;
                    connection.release();
                }
                res.json({ message: year_f_log_open, message1: year_f_log_close, message3: mnth_f_log_open, message4: mnth_f_log_close });

            });

        }
    });

};