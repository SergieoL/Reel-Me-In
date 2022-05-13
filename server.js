var path = require('path');
var express = require('express');
var session = require('express-session');
var hbs = require('express-handlebars');
var bodyParser = require('body-parser');
var User= require('./models/user');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();
app.set('port', 9000);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
  key:'user_sid',
  secret:'somesecret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000
  }

}));

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: _dirname + '/views/layouts'}));
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user){
    res.clearCookie('user_sid');
  }
  next();
});

// route for Home-Page
app.get('/', sessionChecker, (req, res) => {
  res.redirect('/login');
});

// route for signup page
app.route('/signup')
    .get((req, res) => {
      //res.sendFile(_dirname + '/public/signup.html');
      res.render('signup', hbsContent);
    })
    .post((req, res) => {
      User.create({
        username: req.body.username,
        password: req.body.password
      })
      .then(user => {
        req.session.user = user.dataValues;
        res.redirect('/dashbord');
      })
      .catch(error => {
        res.redirect('/signup');
      });
    });

    // route for user login 
app.route('/login')
  .get((req, res) => {
    //res.sendFile(_dirname + '/public/login.html');
    res.render('login', hbsContent);
  })
  .post((req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({where: {username: username} }) .then(function(user) {
      if (!user) {
        res.redirect('/login');
      }else if (!user.validPassword(password)) {
        res.redirect('/login');
      }else {
        req.session.user = user.dataValues;
        res.redirect('/dashbord');
      }
    });
  });

  // Route for user dashboard
  app.get('/dashboard', (req,res) => {
    if (req.session.user && req.cookies.user_sid) {
      hbsContent.loggedin =true;
      hbsContent.username =req.session.user.username;
      hbsContent.title = "You are logged in";
      // res.sendFile(_dirname) + '/public/dashboard.html');
      res.render('/index', hbsContent);

    }else {
      res.redirect('/login');
    }
  });

  // route for user logout
  app.get('/logout', (req,res) => {
    if (req.session.user && req.cookies.user_sid) {
      hbsContent.loggedin =false;
      hbsContent.title = "You are logged out";
      res.clearCookie(user_sid);
      res.render('/', );

    }else {
      res.redirect('/login');
    }
  });
  // route for handling 404 requests(unabailable routes)
  app.use (function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  });
  app.listen(app.get('port'), () => console.log('App started on port'(app.get("port"))));


const sequelize = require('./config/connection');
const cookieParser = require('cookie-parser');
const User = require('./models/User');
const res = require('express/lib/response');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
