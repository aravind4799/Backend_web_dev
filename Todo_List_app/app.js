const express = require("express")
const BodyParser = require("body-parser")
// using custom package
const date =require(__dirname + "/date.js")
const app = express()
app.use(BodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

var items=[]
//to include work items
let work=[]

app.set('view engine', 'ejs')
//set up a views folder to store your ejs files
//when res.render() is called it searches this folder to find given filename

app.get("/",function(req,res){
  //fucntion(res,req).. wont work since first arg is req and second is res..

  //var currentday=today.getDay()
  // currentday is a Number ranging from 0 -"sunday" to 6-"saturday"

  //based on day , if we have to render html we would require 7 HTML pages with repetitions
  //hence we use a Template ,-EJS
  //read EJS docs

  //var DayList =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  //console.log(currentday);
  //day=DayList[currentday]
  //console.log(day);
  day=date.getDate()// using the getDate function defined in date.js
  res.render("list",{title:day,todoitem:items})
  //list is name of ejs file present in views folder
  //followed by an object with key:value, key is the marker in ejs file and value is the value that needs to replace marker
  // at the time when rendered

})

app.post("/",function(req,res){
  //using the value field of the button to differentiate the list where we have to add the items
  if(req.body.button === "work"){
    let work_item = req.body.todoitem
    work.push(work_item)
    res.redirect("/work")
  }
  else{
    let item = req.body.todoitem
    items.push(item)
    res.redirect("/")
    // to make a get req so that now varialble items is defined
    //setting the value of items
  }
})

//to handle work list
app.get("/work",function(req,res){

  res.render("list",{title:"work",todoitem:work})
})
app.listen("3000",function(){
  console.log("server up and running");
})
