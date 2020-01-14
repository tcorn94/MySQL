DROP DATABASE IF EXISTS employees_db;
CREATE database employees_db;

USE employees_db;

CREATE TABLE employee(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(40),
role_id INT(10) NOT NULL,
manager_id INT(10) NOT NULL DEFAULT 123

);

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30),

);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(6, 3),
    department_id INT(10),
);





INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Karen", "Smith", 789);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Scott", "Wells", 894);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Chelsea", "Roberts", 894);

INSERT INTO employee (first_name, last_name, manager_id)
VALUES ("Roger", "Worthington", 225);

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 80.000, 333);

INSERT INTO role (title, salary, department_id)
VALUES ("Humanres", 40.000, 222);

INSERT INTO department (name)
VALUES ("Engineers");

INSERT INTO department (name)
VALUES ("Human Resources");




SELECT * FROM employee;
SELECT * FROM department;
SELECT * FROM role;
