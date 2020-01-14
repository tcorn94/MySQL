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

viewRoles();

break;

case "View Employees":

viewEmployees();


break;

case "View Departments":

  viewDepartments();

break;

case "Add Employee":
  inquirer

  .prompt([
      {
          type: "input",
          name: "addEm",
          message: "Input new employee name",
        
  
      }
  
  ]).then(addEmployees(answer));
  
break;


case "Add Department":
  inquirer
  .prompt([
    {
        type: "input",
        name: "addDep",
        message: "Enter department name",
      
    }
  
  ]).then(addDepartments(answer));



break;


case "Add Role":
  inquirer

.prompt([
    {
        type: "input",
        name: "addrole",
        message: "Input role title",
      
    }
  
  ]).then(addRoles(answer));



break;


case "Update employee role":
inquirer
.prompt([
  {
      type: "input",
      name: "updateEm",
      message: "Input employee id you would like to change"
    },

  {type: "input",
name: "rolechange",
message: "Input new role id"}

]).then(DeleteRole(answer.updateEm));
UpdateRole(answer.updateEm, answer.rolechange);


break;


}


})
    




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

    function viewRoles(){
    const query = "SELECT * FROM role";
      
    connection.query(query, function(err, res){
      if(err) throw err
      for (i=0; i< res.length; i++){
        console.table(res[i])
      }
      mainApp();
    })}
    
    function viewDepartments(){
      const query = "SELECT * FROM department";
      
      connection.query(query, function(err, res){
        if(err) throw err
        for (i=0; i< res.length; i++){
          console.table(res[i])
        }
        mainApp();
      })

    }

     function addDepartments(answer){
      var sql = "INSERT INTO department (name) VALUES ('answer')";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      mainApp();


     }

     function addRoles() {
      var sql = "INSERT INTO role (title) VALUES ('answer')";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      mainApp();
     }
     
     function addEmployees(){
    var sql = "INSERT INTO department (first_name) VALUES ('answer')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      mainApp();
    });}

    function DeleteRole(answer1){

var sql = "DELETE FROM employee (role_id) WHERE id = answer.updateEm";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record deleted");
      });
    }

    function UpdateRole(){
      var sql = "INSERT INTO employee (role_id) WHERE id = answer.updateEm VALUES ('answer.rolechange')";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record updated");
        mainApp();
      });}