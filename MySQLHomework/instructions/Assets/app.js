//console.table the response with for loop to get neat response i of res.length

const mysql = require("mysql");
const inquirer =  require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 80,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "employees_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    
 
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


    inquirer

.prompt([
    {
        type: "input",
        name: "addEm",
        message: "Input employee name, role, and department",
      

    }

])

.prompt([
  {
      type: "input",
      name: "addrole",
      message: "Input role info",
    
  }

])

.prompt([
  {
      type: "input",
      name: "addDep",
      message: "Input department info",
    
  }

])

.prompt([
  {
      type: "input",
      name: "updateEm",
      message: "Input employee id and updated role",
    

  }

])








    
    
    
    
    
    
    
    // function viewEmployees()

    // function viewRoles()
    
    // function viewDepartments()

    // function addDepartments()
    // function addRoles() 
    // function addEmployees()

    // function updateRoles()