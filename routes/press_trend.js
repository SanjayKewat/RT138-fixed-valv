/**
 * Created by Administrator on 11/5/2014.
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


//Here to read data for Pressure trend(Bop control) page
exports.bop_cntrl = function(req, res,next){
    var rigid=req.params.rig_id;
    var from=req.params.from;
    var to=req.params.to;

  //  console.log(req.params);
    var countQuery = "call sp_count_bop_ptrend("+rigid+","+from+","+to+")";
    var tot= 0,intrvl=0;

    var strQuery = function(itvl){
        if(itvl<2)
        {
            itvl=1;
        }

        // console.log("call sp_bop_ptrend("+rigid+",'"+from+"','"+to+"',"+itvl+")");
        return "call sp_bop_ptrend("+rigid+","+from+","+to+","+itvl+")";
    };
    mysqlPool.getConnection(function(err, connection) {
        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'pressure trend page error',
                err:    err.code
            });
        } else {
            connection.query(countQuery, function (err, rows) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'error',
                        err: err.code
                    });
                }
                try {

                    tot = rows[0].length;
                    console.log('count Total Rows : ' + tot);
                    //connection.release();
                }
                catch (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'Error in Pressure Log page ',
                        err: err.code
                    });
                }

                //Round a number downward to its nearest integer:
                intrvl = Math.floor(tot / 1000);
                console.log('Interval Rows : ' + intrvl);


                connection.query(strQuery(intrvl), function (err, rows) {
                    //    console.log('next Total Rows : ' + tot);
                    //   console.log('Interval Rows : ' + intrvl);
                    if (err) {
                        console.error(err);
                        res.statusCode = 500;
                        res.json({
                            result: 'Error in Pressure Log page ',
                            err: err.code
                        });
                    }
                    try {
                        res.statusCode = 200;
                        res.json({ message: rows[0] });
                        console.log('Total data Rows : ' + rows[0].length);
                        connection.release();
                    }
                    catch (err) {

                        console.error(err);
                        res.statusCode = 500;
                        res.json({
                            result: 'Error in Pressure Log page ',
                            err: err.code
                        });
                        connection.release();
                    }

                });

            });
        }
    });



};



//Here to read data for Pressure trend(Choke control) page
exports.csng_cntrl = function(req, res,next){
    var rigid=req.params.rig_id;
    var from=req.params.from;
    var to=req.params.to;
    var countQuery = "call sp_count_chk_ptrend("+rigid+","+from+","+to+")";
    var tot= 0,intrvl=0;

    var strQuery = function(itvl){
        if(itvl<2)
        {
            itvl=1;
        }
        return "call sp_chk_ptrend("+rigid+","+from+","+to+","+itvl+")";
    };
    mysqlPool.getConnection(function(err, connection) {
        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'error',
                err:    err.code
            });
        }
        else{
            connection.query(countQuery, function(err, rows) {
                if (err) {
                    console.error('CONNECTION error: ',err);
                    res.statusCode = 503;
                    res.json({
                        result: 'error',
                        err:    err.code
                    });
                }
                try {
                    //    res.json({ message: rows[0] });
                    tot = rows[0].length;
                    // console.log('count Total Rows : ' + tot);

                }
                catch (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'Error in Pressure Log page ',
                        err: err.code
                    });
                }

                //Round a number downward to its nearest integer:
                intrvl = Math.floor(tot / 1000);
                //  console.log('Interval Rows : ' + intrvl);


                connection.query(strQuery(intrvl), function (err, rows) {
                    //    console.log('next Total Rows : ' + tot);
                    //   console.log('Interval Rows : ' + intrvl);
                    if (err) {
                        console.error('CONNECTION error: ',err);
                        res.statusCode = 503;
                        res.json({
                            result: 'Error in Pressure Log page ',
                            err:    err.code
                        });
                    }
                    try {
                        res.statusCode = 200;
                        res.json({ message: rows[0] });
                        //    console.log('Total Rows : ' + rows[0].length);
                        connection.release();
                    }
                    catch (err) {

                        console.error(err);
                        res.statusCode = 500;
                        res.json({
                            result: 'Error in Pressure Log page ',
                            err: err.code
                        });
                        connection.release();
                    }

                });

            });
        }


    });


};

