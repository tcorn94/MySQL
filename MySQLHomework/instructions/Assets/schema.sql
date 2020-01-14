DROP DATABASE IF EXISTS employees_db;
CREATE database employees_db;

USE employees_db;

CREATE TABLE employee(

--primary key

first_name VARCHAR(30)
last_name VARCHAR(40)
role_id INT(10) NOT NULL
manager_id INT(10) NOT NULL


---foreign key
FOREIGN KEY (role-id) REFERENCES employee
FOREIGN KEY (manager-id) REFERENCES 

)

CREATE TABLE department (
    id 
    name VARCHAR(30)

)

CREATE TABLE role (
    id 
    title VARCHAR(30)
    salary DECIMAL(6, 3)
    department_id INT(10) NOT NULL
)




SELECT * FROM employee;
