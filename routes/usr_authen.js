/**
 * Created by Administrator on 6/5/2014.
 */

var mysql = require('mysql');
var db_confg=require('db_confg'); //Ist creating obj

var mysqlPool  = mysql.createPool({
    host: db_confg.DB.host, //here access its member
    user: db_confg.DB.user,
    password: db_confg.DB.password,
    database: db_confg.DB.database,
    port: db_confg.DB.port,
    multipleStatements:true

});

exports.user_auth=function(req, res){
//    handleDisconnect();
    var usrdata=[];
    var usr=req.body.username;
    var pwd=req.body.password;
    var strQuery = "SELECT * FROM userdetails where User_name='"+usr+"'";

  //console.log('usr_name : '+usr +' pwd : '+pwd);
    mysqlPool.getConnection(function(err, connection) {

        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'error',
                err:    err.code
            });
        } else {

            connection.query(strQuery, function (err, rows) {
                if (err) {
                    connection.release();
                    console.error(err);
                    res.statusCode = 503;
                    res.json({'usr_dts': 503});
                    return;
                }
                try {
                    var user = rows[0].User_name;
                    var pass = rows[0].Password;
                    var app_sts = rows[0].approve_status;
//                        alert(data.usr_dts.length);
                    if ((usr === user) && (pwd === pass) && (app_sts === 1)) {

                        req.session.name=usr;
                        res.statusCode = 200;
                        res.json({'usr_dts': 200});
                    }
                    else {
                       // res.statusCode = 401;
                        res.json({'usr_dts': 401});
                        res.statusCode = 401;
                    }

                    connection.release();
                }
                catch (err) {

                    res.json({'usr_dts': 500});
                    res.statusCode = 503;
                    connection.release();
                }
            });
        }
    });

};

exports.new_user=function(req, res,next){

//    handleDisconnect();

    var name=req.body.nme;
    var usr_name=req.body.usr;
    var pwd=req.body.con_pwd;
    var email=req.body.email;
    var ph_no=req.body.phn;
    var add=req.body.add;

    var strQuery = "insert into userdetails(Name,User_name,Password,Email_Address,Phone_no,Address)values('"+name+"','"+usr_name+"','"+pwd+"','"+email+"','"+ph_no+"','"+add+"')";


    mysqlPool.getConnection(function(err, connection) {
        if(err) throw err;
        connection.query(strQuery, function(err, rows) {
            if(err) {
                connection.release();
                console.error(err);
                res.statusCode = 503;
                res.json({error:err,status:500});
                return;
            }
            try
            {
                res.statusCode=200;
                res.json({succ:rows,status:200});
                connection.release();
            }
            catch (err)
            {
                res.statusCode = 503;
                res.json({'usr_dts':503});
                connection.release();
            }
        });
    });


};






