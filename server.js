var express = require('express');
//ejs,engine are ther templating required modules
var ejs = require('ejs');
var engine = require('ejs-mate');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();	
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(3000,function(err,rea){
	console.log("listening 3000 port")
})
app.get('/',function(req, res){
	res.render('welcome')
})
