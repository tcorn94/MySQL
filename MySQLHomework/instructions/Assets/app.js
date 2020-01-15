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
        "Add Employee", "Add Department", "Add Role", "Update employee role", 
        ]

    }

]).then(function (answers){
switch (answers.main){
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
  
  ]).then(ans => addEmployees(ans.addEm));
  
break;


case "Add Department":
  inquirer
  .prompt([
    {
        type: "input",
        name: "addDep",
        message: "Enter department name",
      
    }
  
  ]).then(ans => addDepartments(ans.addDep));



break;


case "Add Role":
  inquirer

.prompt([
    {
        type: "input",
        name: "addrole",
        message: "Input role title",
      
    }
  
  ]).then(ans => addRoles(ans.addrole));



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

]).then(ans => UpdateRole(ans.updateEm, ans.rolechange));



break;
default:
mainApp();
  



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

     function addDepartments(ans){
      var sql = `INSERT INTO department (name) VALUES ('${ans}')`;
      connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      mainApp();


     }

     function addRoles(ans) {
      var sql = `INSERT INTO role (title) VALUES ('${ans}')`;
      connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
      mainApp();
     }
     
     function addEmployees(ans){
    var sql = `INSERT INTO employee (first_name) VALUES ('${ans}')`;
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      mainApp();
    });}

    
    function UpdateRole(id, role){

var sql = `UPDATE employee SET role_id = ${role} WHERE id = ${id}`;
connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record updated");
      });
    }
      mainApp();