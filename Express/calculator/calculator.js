const express = require("express")
const app = express()

// require body-parser and use it in express
//it is used to access data sent from the form
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3040,function(req,res){
  console.log("server started at port 3040");
});

app.get("/",function(req,res){
  // res.send() --- used to send plain text or even html
  // req.sendFile() -- used to send a complete file..ie calculator.html

  //res.send("<h1>welcome to calculator application</h1>")
  //running this line first sends all headers, so we get error
  //Error: Can't set headers after they are sent.
  //at SendStream.headersAlreadySent (/home/aravind/Desktop/Backend_web_development/Express/calculator/node_modules/send/index.js:390:13)
  res.sendFile(__dirname + "/calculator.html")
  // __dirname returns the current working path, so that this application can work
  //even when loaded in someother computer

  //res.send("hey")
  // this line blows the code
  // so if u are sending a html file ...does res.send() does'nt work??
});


//need a post request since when submit of a form is triggred action="/" to home route
//and method is post in the form we created
app.post("/",function(req,res){
  // try console.log(req.body);
  var num1 = Number(req.body.num1)
  var num2 = Number(req.body.num2)
  // note num1 and num2 are the name attribute of the input in form(calculator.html)
  // NEED TO CONVERT req.body.num1 into NUMBER EXPLICITLY
  // since we are using urlencoded it treats req.body.num1 as a string
  var result= num1 + num2
  res.send("addition of given two numbers:"+ result)
});
//nodemon calculator.js to run.
