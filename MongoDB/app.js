//beter to use node to run
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/DemoDB",{ useNewUrlParser: true })
// used to connect to mongodb server running at local device,at port 27017(fixed)
//mongod is the command to start the mongodb server in local device
//if database DemoDB doesnt exist it creates one, and use it already exist
const Schema = new mongoose.Schema({
  //validation of data that we enter into name
  name:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true,
    min:10,
    max:50
  },
  roll_no:{
    type:Number,
    required:true
  },
  phone_number:Number
})

// a schema is created which is followed...for a specific collection

const Student = mongoose.model("student",Schema);
// this creates a collection named Students( always name the collection as a singular , its automatically
// converted into pural by mongoose) in database DemoDB
//model_name is same as collection name..

const student1 = Student({
  name:"aravind",
  age:21,
  roll_no:13
})
// creates a document to append into collection students
const student2 = Student({
  name:"itsme",
  age:20,
  roll_no:12
})

const student3 = Student({
  name:"itsyou",
  age:19,
  roll_no:11
})

//to insert multiple documents in one go
//read mongoose documentation for syntax

//code:
// Student.insertMany([student2,student3],function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("successful insertions");
//   }
// })

//code: student.save()

//used to add 1 document
//saves the document into specificed collection and specificed database
//every time we run app.js student.save() tend to add same document again and
//again so comment it out after a successful run..to avoid duplicate dacuments

//READING FROM DATABASE.
Student.find(function(err,data){
  if (err){
    console.log(err);
  }
  else{
    //note data got from callback function is array of javascript objects..returned from find method from database
    //console.log(data);
    mongoose.connection.close()
    //to close the connection from DATABASE
    data.forEach(function(each_data){
      console.log(each_data.name);
    })
  }
})

//UPDATING THE database
//BY ADDING A EXTRA FIELD TO A document

Student.updateOne({_id:"5ef0aec2e68bd549335f0e54"},{phone_number:9003240416},function(err){
  //note the field u are adding or modifying needs to be specified in the schema
  if(err){
    console.log(err);
  }else
  {
    console.log("updated the document in students collections with given ID to add a field ");
  }
});

//DELETING from DATABASE

Student.deleteOne({phone_number:9003240416},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("deleted the document with given number from students collections in DemoDB");
  }
})
