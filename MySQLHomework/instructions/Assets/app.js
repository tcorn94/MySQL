//console.table the response with for loop to get neat response i of res.length

const mysql = require("mysql");
const inquirer =  require("inquirer");
const table =  require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "employees_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    
 
  });
function mainApp(){
inquirer

.prompt([
    {
        type: "list",
        name: "main",
        message: "What would you like to do?",
        choices: ["View Roles", "View Employees", "View Departments",
        "Add Employee", "Add Deparment", "Add Role", "Update employee role", 
        ]

    }

]).then(function (answers){
switch (answers){
case "View Roles":



break;

case "View Employees":



break;

case "View Departments":



break;

case "Add Employee":



break;


case "Add Department":



break;


case "Add Role":



break;


case "Update employee role":



break;





}


})
    


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




}//ender for main app



    
    
    
    
    
    
    
    function viewEmployees(){

      const query = "SELECT employee.id, employee.first_name, employee.last_name FROM employee";
      
      connection.query(query, function(err, res){
        if(err) throw err
        for (i=0; i< res.length; i++){
          console.table(res[i])
        }
        mainApp();
      })


    }

    // function viewRoles()
    
    // function viewDepartments()

    // function addDepartments()
    // function addRoles() 
    // function addEmployees()

    // function updateRoles()