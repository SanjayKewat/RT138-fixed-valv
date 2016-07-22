var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var db_confg=require('db_confg');       //DB config module
var routes = require('./routes/index');
var users = require('./routes/users');
var ptrend=require('./routes/press_trend');//For Pressure Trend page.
var beerController = require('./controllers/beer');//module file for perform restfull operation
var usr=require('./routes/usr_authen'); //user authenticate file
var ann_area=require('./routes/ann_area'); // Reading pressure data
var rdet=require('./routes/rigdetjson');	//For Rig Details
var rspvalve=require('./routes/rspnstmelog'); //For Response time page
var ptrend=require('./routes/press_trend');//For Pressure Trend page
var hisdata=require('./routes/hist_alm');//For Historical Alarm page
var mwlog=require('./routes/mnth_wise_flog');//For Monthwise log page
var mwfflog=require('./routes/mnth_wise_fflog');//For Monthwise log page
var flogs=require('./routes/flogs');//For Historical Alarm page
var flogs2=require('./routes/flogs2');//For Historical Alarm page
var fflogs=require('./routes/fflogs');//For Historical Alarm page
var fflog=require('./routes/funlogjson');	//FUNCTION/FUNCTION FAIL LOGS
var myr=require('./routes/mislogsjson'); //miscellaneous alarm logs*/
var palarm=require('./routes/pmpalrmjson'); // pump alarm
var shut_log_charts=require('./routes/pmpalrmjson'); // shutdown log pie charts
var pmp_run_tm=require('./routes/pmpalrmjson'); // pump run time (shutdown logs)


var app = express();




// Create our Express router
// get an instance of router
var router = express.Router();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));// log every request to the console
//here managing session
app.set('trust proxy', 1); // trust first proxy
/*app.use(session({
    secret: 'af123kfs4kdfg564lsdf45',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true } //secure: true is a recommended option. However, it requires an https-enabled website, i.e., HTTPS is necessary for secure cookies.
}));*/
app.use(session({
    secret: 'af123kfs4kdfg564lsdf45',
    resave: false,
    saveUninitialized: true
}));
app.use(bodyParser.json()); //// Use the body-parser package in our application
app.use(bodyParser.urlencoded({ extended: true })); //get data from body of form
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));// set the static files location /public/img will be /img for users
app.set('views', __dirname + '/views');         // here is code to spesify the html page directory
app.engine('html', require('ejs').renderFile);  //render html using ejs module




//Use route middleware to process requests
// route middleware that will happen on every request
router.use(function(req, res, next) {

    // log each request to the console
    console.log('Log each request : ');
    console.log('Method : '+req.method,'Url : '+ req.url);

    // continue doing what we were doing and go to the route
    next();
});


//Use route middleware to validate parameters using .param()
// route middleware to validate :name
/*router.param('name', function(req, res, next, name) {
    // do validation on name here
    // blah blah validation
    // log something so we know its working
    console.log('doing name validations on ' + name);

    // once validation is done save the new item in the req
    req.name = name;
    // go to the next thing
    next();
});*/

//app.use('/users', users);

//here handling mysql connection when disconnected
function handleDisconnect() {

    connection = mysql.createConnection({
        host: db_confg.DB.host,
        user: db_confg.DB.user,
        password: db_confg.DB.password,
        database: db_confg.DB.database,
        port: db_confg.DB.port
    }),



// If there is an error connecting to the database
        connection.connect(function(err) {
            // connected! (unless `err` is set)
            if(err) {                                     // or restarting (takes a while sometimes).
                console.log('error when connecting to db:', err);
                setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
            }
        });

    connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleDisconnect();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
            throw err;                                  // server variable configures this)
        }
    });
};

handleDisconnect();



// apply the routes to our application
app.use('/',router);

//here START Calling Business Logic
// Start Restfull Operation from here
router.route('/beers')
    .post(beerController.postBeers)//adding new beer details
    .get(beerController.getBeers);//reterived all beers details

// Create endpoint handlers for /beers/:beer_id
router.route('/beers/:beer_id')
    .get(beerController.getBeer) //retrived selected beer details
    .put(beerController.putBeer)//retrived selected beer details
    .delete(beerController.deleteBeer); //delete selected beer details


router.route('/login')
    .post(usr.user_auth)// process the form (POST http://localhost:8080/login)
    // show the form (GET http://localhost:8080/login)
    .get(function(req,res){
        res.render('login.html');
    });

router.post('/new_usr',usr.new_user);

//====>>> Data fetching Function start here ==========>>

////====>> Fetching data for Fusion chart start =======>>

router.get('/accarea/:rig_id', ann_area.acc);   //fetch  realtime data for Area Accumulator pressure
router.get('/maniarea/:rig_id',ann_area.mani);  //fetch  realtime data for Area Manifold pressure
router.get('/annarea/:rig_id', ann_area.ann);   //fetch  realtime data for Area Annular pressure
router.get('/bsarea/:rig_id',ann_area.shear);    //fetch  realtime data for Area Shear BOOST pressure
router.get('/rgair/:rig_id',ann_area.rig);        //fetch  realtime data for Area Rig Air pressure
router.get('/dpress/:rig_id',ann_area.all);   //fetch realtime data for Ann,Manifold,Rig Air & Acc pressure
router.get('/press/:rig_id',ann_area.casing);  //fetch realtime data for Drill pipe & casing pressure
router.get('/rsppress/:rig_id',ann_area.rsptmdt);  //fetch realtime data for Responsetime Manifold pipe & Annular pressure

////====>> Fetching data for Fusion chart End=======>>

router.get('/det/:rig_id',rdet.rigdata);//For Rig Details
router.get('/bop_set/:rig_id/:bop_stack_id',rdet.bop_st_config);//For bop stack configuration Details
router.get('/pmp_st/:rig_id',rdet.pmp_stng);//For Pump setting
router.get('/base_st/:rig_id',rdet.base_stng);//For base setting
router.get('/rsp_val/:rig_id', rspvalve.getdata);  // Responsetime table details
router.get('/rsp_cht/:rig_id/:frmdt/:todt', rspvalve.rspchart);  //Here to read data for Response time chart before & after 5 seconds
router.get('/his_rsp/:rig_id/:month/:year', rspvalve.his_rsp);
router.get('/rsp_valv_master/:rig_id', rspvalve.rsp_valv_master); //Here to read data for Response time valve master
router.route('/bop_ctrl/:rig_id/:from/:to')   //reading  pressure trend data for BOP control
    .get(ptrend.bop_cntrl);
router.route('/csng_cntrl/:rig_id/:from/:to')  //reading  pressure trend data for Casing control
    .get(ptrend.csng_cntrl);
router.get('/alm_hist/:rig_id/:from/:to', hisdata.alrm_hist); //reading Historical Alarm data page
router.get('/mwise_flog_clm/:rig_id/:vid/:year/:month', mwlog.mwise_flog_clm); //reading data for Function log monthwise column chart
router.get('/mnth_wise_flog_sct/:rig_id/:vid/:year/:month', mwlog.mwise_flog_sct); //reading data for Function log monthwise Scatter chart
router.get('/flog_drop/:rig_id', mwlog.flog_drop); //reading data for function log valve dropdown
router.get('/mwise_fflog_clm/:rig_id/:vid/:year/:month', mwfflog.mwise_fflog_clm); //reading data for Function Fail log monthwise column chart
router.get('/mnth_wise_fflog_sct/:rig_id/:vid/:year/:month', mwfflog.mwise_fflog_sct); //reading data for Function Fail log monthwise Scatter chart
router.get('/fflog_drop/:rig_id', mwfflog.fflog_drop); //reading data for function log valve dropdown
router.get('/funlog/:year/:rig_id',flogs.fldata);//function logs monthly
router.get('/funlog2/:year/:rig_id',flogs2.fldata);//function logs monthly
router.get('/ffunlog/:year/:rig_id',fflogs.fldata);//function logs monthly
router.get('/logs/:rig_id/:frm_dt/:to_dt',fflog.ff_logs);//FUNCTION/FUNCTION FAIL LOGS
router.get('/misyr/:rig_id/:year',myr.misyrdata);//miscellaneous alarm logs year data
router.get('/miss_log_clm/:rig_id/:ls_id/:year/:month',myr.miss_log_clm);//miscellaneous alarm logs month column data
router.get('/miss_log_sct/:rig_id/:ls_id/:year/:month',myr.miss_log_sct);//miscellaneous alarm logs month column data
router.get('/loss_drop/:rig_id',myr.loss_drop);//miscellaneous  logs dropdown
router.get('/pump/:rig_id/:year_val',palarm.pumpdata); //pump alarms data
router.get('/slog/:rig_id/:year_val',palarm.slogdata); //shutdown logs
router.get('/slog_chart/:rig_id/:year_val',palarm.slogdata_chart); //shutdown logs
router.get('/pmp_rtime/:rig_id/:year_val',pmp_run_tm.pump_rtime);  // pump run time (shutdown logs)

//here END Calling Business Logic


//here START Defining HTML Pages Route

//Logout link
router.get('/logout',function(req,res) {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/');
        }
    });
});

//Login Page
router.get('/', function(req, res) {

    if(req.session.name){
        res.redirect('/map');
    }
    else
    {
        res.render('login.html');
    }


});

// World Map page
router.get('/map', function(req, res) {
    if(req.session.name)
    {

        //res.render('index.html');
        res.render('world_map.html');
    }
    else
    {
        res.redirect('/');
    }
});

//New user Page
router.get('/new_usr', function(req, res) {
res.render('new_user.html');
});

//Home page for navigation
router.get('/home',function(req, res){
    if(req.session.name)
    {
        //        console.log('session  exit');
        res.render('home.html');
    }
    else
    {
        res.redirect('/');
    }

});

//BOP Unit page
router.get('/bop',function(req, res){
    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('bop.html');
    }
    else
    {
        res.redirect('/');
    }
});

// Gauge page with area chart
router.get('/gauge',function(req, res){


    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('gauges.html');
    }
    else
    {
        res.redirect('/');
    }

});

// Pump Alarm page (PUMP ALARM LOGS,MISCELLANEOUS LOGS,SHUTDOWN LOGS)
router.get('/pumpalm',function(req, res) {


    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('pump_alarms.html');
    }
    else
    {
        res.redirect('/');
    }

});
//Choke Manifold page

router.get('/logpage',function(req, res) { // Valve page logs (FUNCTION/FUNCTION FAIL LOGS)


    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('fflogs.html'); //amit changes page
    }
    else
    {
        res.redirect('/');
    }

});

router.get('/fflog',function(req, res){ //Monthwise Log details page(Function fail,logs)

    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('monthffaillog.html');
    }
    else
    {
        res.redirect('/');
    }
});

router.get('/flog',function(req, res){ //Monthwise Log details page(Function fail,logs)


    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('monthflog.html');
    }
    else
    {
        res.redirect('/');
    }
});

router.get('/hisalm',function(req, res){ //Historical Alarm details page


    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('alarmhistoric.html');
    }
    else
    {
        res.redirect('/');
    }
});

router.get('/chk',function(req, res){

    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('choke.html');
    }
    else
    {
        res.redirect('/');
    }

});

//Historical Pressure Log page
router.get('/ptrend',function(req, res){

    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('presstrend.html');
    }
    else
    {
        res.redirect('/');
    }
});

router.get('/rigdts',function(req, res){  // Rig Details page(RIG DETAILS,BOP STACK CONFIGURATION,PUMP SETTINGS,BASELINE SETTINGS)

    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('rig_info.html');
    }
    else
    {
        res.redirect('/');
    }
});

//Response Time Log details page (REAL TIME VALVE RESPONSE TIME,RESPONSE TIME LOGS,HISTORICAL RESPONSE TIME)
router.get('/resptme',function(req, res){
    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('respnstime.html');
    }
    else
    {
        res.redirect('/');
    }
});

router.get('/ftest',function(req, res) { // (FUNCTION Test)


    if(req.session.name)
    {
//        console.log('session  exit');
        res.render('function_test.html');
    }
    else
    {
        res.redirect('/');
    }

});

// route with parameters (http://localhost:8080/hello/:name)
router.get('/hello/:name', function(req, res) {
    res.send('hello ' + req.params.name + '!');
});
//here END Defining HTML Pages Route




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});




module.exports = app;
