//console.table the response with for loop to get neat response i of res.length

const mysql = require("mysql");
const inquirer =  require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3000,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "topsongs_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
 
  });

inquirer

.prompt([
    {
        type: "list",
        name: "main",
        message: "What would you like to do?",
        choices: ["View Roles", "View Employees", "View Departments",
        "Add employee", "Add Deparment", "Add Role", "Update employee role", 
        ]

    }

]).then(answers => {
    console.log('Answer:', answers.main);})