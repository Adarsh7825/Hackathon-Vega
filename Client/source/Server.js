'use strict';

const http = require('http');
const path = require('path');
const hbs = require('hbs');
const express = require('express');
const process = require('process');
const session = require("express-session")
const bcrypt = require("bcrypt")
const cors = require('cors');
const app = express();

const env = require('./../config/envvar')

//Setting Middleware
app.use('/', express.static(__dirname + "/public"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())

//Setting Handlebars View Folder
hbs.registerPartials(__dirname + "/views/partials")
app.set("views", __dirname + "/views")
app.set("view engine","hbs")

//Session Management
app.use(session({
	secret: 'ADDJDSJSDKIOEWWEJKJKSD',
	resave: false,
	saveUninitialized: false
}))

//Using Handlebars
app.get("/form",(req,res)=>{
	res.render( "form" ) 
})
app.get("/blogs/:year/:page",(req,res)=>{ 
	if((req.params.year > 2023 || req.params.year < 1998)) res.status(404).end("Bad Request");
	res.render( "blog" , { 
		year:req.params.year,
		pno:req.params.page,
		//para:extractData(req.params.year,req.params.page),
		nextno: req.params.page+1,
		prevno: req.params.page-1
	} ) 
})

//Using Sessions
app.get('/cart',(req,res) => {
	const saltRounds = 10;
	const myPlaintextPassword = "s0/\/\P4$$w0rD";
	bcrypt.genSalt(saltRounds, function(err, salt) {
		bcrypt.hash(myPlaintextPassword, salt).then(function (hash) {
			bcrypt.compare(myPlaintextPassword,  hash, function(err, result) {
				console.log(myPlaintextPassword +" -> " + hash +" -> " + result)
			})
		})
	})
	
	res.send("Done")
})
app.post('/cart',(req,res) => {
	if (!req.session.data) {
		req.session= { data: "JSON.stringify(req.body)"}
		res.send(201)
		//res.send(`${JSON.stringify(req.body)} \n ${JSON.stringify(req.session)}`)
	}
	//res.send("Done");
})


//Error Page
app.get("*", (req, res) => {
    res.status(404).send("<h1>Error!</h1>Redirecting to Homepage in 5 sec...<script>setTimeout(function() {window.location.href = '/'},5000)</script>");
});


app.set("x-powered-by", false);
app.listen(env.PORT);