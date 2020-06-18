//now you can run the javascript code with node.

//node index.js
//console.log("I am BACK!")

// inorder to use the inbuild packages of node..u need to require them
// tap into nodejs.org/api to know about native packages

//to make use of local file_system
//PACKAGE TO USE fs 
//const fs = require("fs");
//fs.copyFileSync("test.txt","copy_made.txt")

//we can also make use of external packages using NPM-node package manager
//npm init-command to make use of external packages

//goto https://www.npmjs.com to know documentation of packages u are willing to use.
//using a package called synonyms
//npm install synonyms --save,TO INSTALL THE package IN TERMINAL AFTER NPM INIT SO THAT WE CAN REQUIRE.
//AFTER THE NPM INIT U CAN SEE A JSON FILE, IN THE LOCATION.WHICH KEEPS TRACK OF EXTERNAL PACKAGES U ARE USING.

var synonyms =require("synonyms")
result=synonyms("BAD")
console.log(result);
