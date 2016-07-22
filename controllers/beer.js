// Load required packages
var mysql = require('mysql'),
db_confg=require('mysql_dbconfig'),
connectionpool  = mysql.createPool({
    host: db_confg.DB.host,
    user: db_confg.DB.user,
    password: db_confg.DB.password,
    database: db_confg.DB.database,
    port: db_confg.DB.port,
    multipleStatements:true
});

// Create endpoint /api/beers for POST(for insert new row)
exports.postBeers = function(req, res) {

// Save the beer and check for errors

var qrysql="insert into beer(name,type,quantity,userId)values('"+req.body.name+"','"+req.body.type+"',"+req.body.quantity+",'"+req.body.userId+"')";
 connectionpool.getConnection(function(err, connection) {
        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'error',
                err:    err.code
            });
        } else {
            connection.query(qrysql, function(err, rows, fields) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'error',
                        err: err.code                       
                    });
                }
                console.log('body:'+req.body.name);
                res.statusCode = 200;
                res.json({
                    result: 'New Beer row add successfully',
                    err:    '',
                    fields: fields,
                    json:   rows
//                    length: rows.length
                   
                });
                connection.release();
            });
        }
    });
};

// Create endpoint /api/beers for GET(for reterived all rows)
exports.getBeers = function(req, res) {
  // Use the Beer model to find all beer

var qrysql="select * from beer";
 connectionpool.getConnection(function(err, connection) {
        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'error',
                err:    err.code
            });
        } else {
            connection.query(qrysql, function(err, rows, fields) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'error',
                        err: err.code                       
                    });
                }
                res.json({
                    result: 'Selected rows return',
                    err:    '',
                    // fields: fields, //for this u get information about current table, db
                    json:   rows,
                    length: rows.length+' rows'
                   
                });
                connection.release();
            });
        }
    });
};

// Create endpoint /api/beers/:beer_id for GET(for reterived specific row)
exports.getBeer = function(req, res) {
  // Use the Beer model to find a specific beer

var qrysql="select * from beer where id='"+req.params.beer_id+"'";
 connectionpool.getConnection(function(err, connection) {
        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'error',
                err:    err.code
            });
        } else {
            connection.query(qrysql, function(err, rows, fields) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'error',
                        err: err.code                       
                    });
                }
                res.json({
                    result: 'All rows retrived successfully',
                    err:    '',
                    // fields: fields, //for this u get information about current table, db
                    json:   rows,
                    length: rows.length+' rows'
                   
                });
                connection.release();
            });
        }
    });

};

// Create endpoint /api/beers/:beer_id for PUT(for update query)
exports.putBeer = function(req, res) {
  // Use the Beer model to find a specific beer

var qrysql="update beer set name='"+req.body.name+"',type='"+req.body.type+"',quantity="+req.body.quantity+",userId='"+req.body.userId+"' where id="+req.params.beer_id;
 connectionpool.getConnection(function(err, connection) {
        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'error',
                err:    err.code
            });
        } else {
            connection.query(qrysql, function(err, rows, fields) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'error',
                        err: err.code                       
                    });
                }
                res.json({
                    result: 'Successfully Updated',
                    err:    '',
                    // fields: fields, //for this u get information about current table, db
                    json:   rows
                    // length: rows.length+' rows'
                   
                });
                connection.release();
            });
        }
    });

};

// Create endpoint /api/beers/:beer_id for DELETE(deleting rows)
exports.deleteBeer = function(req, res) {
  // Use the Beer model to find a specific beer and remove it

var qrysql="delete from beer where id="+req.params.beer_id;
 connectionpool.getConnection(function(err, connection) {
        if (err) {
            console.error('CONNECTION error: ',err);
            res.statusCode = 503;
            res.json({
                result: 'error',
                err:    err.code
            });
        } else {
            connection.query(qrysql, function(err, rows, fields) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.json({
                        result: 'error',
                        err: err.code                       
                    });
                }
                res.json({
                    result: 'Deleted Successfully',
                    err:    '',
                    // fields: fields, //for this u get information about current table, db
                    json:   rows,
                    length: rows.length
                   
                });
                connection.release();
            });
        }
    });

};