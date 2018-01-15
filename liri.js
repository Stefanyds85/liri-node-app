var dotenv = require("dotenv").config();

const keys = require("./keys.js");

var twitter = require("twitter");

var inquirer = require("inquirer"); 

  inquirer.prompt([

    {
     type: "list",
     name: "commands",
    message: "my-tweets"
     },
  
  ]).then(function(location) {
  
    inquirer.require(data.userInput, function(err, data) {
  
      console.log(JSON.stringify(data, null, 2));
    });
  
  });
   



