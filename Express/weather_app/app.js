//make use of PostMan and json viewer -chrome extension to ease your work
const express=require("express")
//note: https is a node native package, so no need to install it from npm
const https = require("https")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
//in order to access static files
//else the background image will not be displayed while displaying HTML PAGE from server.
app.use(express.static("public"));
app.listen(3050,function(){
  console.log("server is up and running!");
})

app.get("/",function(req,res){
  // note u can use res.send() only once
  // to send multiple lines use res.write() followed by res.send()
  res.sendFile(__dirname+"/index.html")
})

app.post("/",function(req,res){
  //console.log("post working");
  const city_name =req.body.city_name
  const key = "db9a7c8dd0d9deda984c35f9e16eb7da"
  const url= "https://api.openweathermap.org/data/2.5/weather?q="+city_name+"&appid="+key

  https.get(url,function(response){
    //read https documentaion from nodejs.org
    //to differentaute between res from post and response from https
    console.log(response.statuscode)
    response.on("data",function(data){
      //used to parse the response data from the api into json format
      const weather_data = JSON.parse(data)
      // make use of json viewer to copy the path of info we need
      //in this case we are in need of temperature
       const temp = Math.round(weather_data.main.temp - 273.15)// temperature in celsius
       const description =weather_data.weather[0].description
       const icon_id = weather_data.weather[0].icon
       res.write("<h1> weather in "+city_name+" :"+description+"</h1>")
       res.write("<h2> temperature at "+city_name+": "+temp+" celsius</h2>")
       const image_url="http://openweathermap.org/img/wn/"+icon_id+"@2x.png"
       res.write("<img src="+image_url+">")
       res.send()
    })
  })
})
