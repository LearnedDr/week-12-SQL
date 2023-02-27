const fs = require('fs/promises');
const inquirer = require('inquirer');
const mySQL = require('mysql2');


const db = mySQL.createConnection(
    {
      host: '127.0.0.1',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'Frede33#',
      database: 'business_manager_db'
    },
    console.log(`Connected to the courses_db database.`)
  );

const questions = [
    {
        name: "initial",
        type: "list",
        message: "What would you like to do first?",
        choices: [     
        {
            name: 'View All Employees',
            type: 'value'
        },
        {
            name: 'Add Employee',
            type: 'value'
        },
        {
            name: 'Update Employee Role',
            type: 'value'
        },
        {
            name: 'View All Roles',
            type: 'value'
        },
        {
            name: 'Add Role',
            type: 'value'
        },
        {
            name: 'View All Departments',
            type: 'value'
        },
        {
            name: 'Add Department',
            type: 'value'
        }
        ]
    },
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
    
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
]


function init() {
    inquirer
        .prompt(questions)
        .then(response => {
            switch(response.initial) {
                case 'View All Departments' :
                    const deptQuery = () => {                    
                        db.promise().query(`SELECT * FROM departments;`)
                            .then(([results]) => {
                                return console.table(results);
                            })
                    //         .catch((err) => console.log(err))
                    //         .then( () => db.end());
                    };
                    deptQuery();
                    break;
                case 'View All Roles' :
                    const roleQuery = () => {
                        db.promise().query('SELECT * FROM roles;')
                            .then(([results]) => {
                                return console.table(results);
                            })
                    };
                    roleQuery();
                    break;
                case 'View All Employees' :
                    const employeeQuery = () => {
                        db.promise().query('SELECT * FROM employees;')
                            .then(([results]) => {
                                return console.table(results);
                            })
                    };
                    employeeQuery();
                    break;   
            };
        });
            // console.log("response", response)
        };


// Function call to initialize app
init();

// const deptChoices = 
// db.promise().query('SELECT * FROM departments;')
//     // .then (([results]) => {
//     // console.log(results);
//     // return results})
//     .then (([results]) => {
//         console.table(results);
//         return results
//     })

// console.log(typeof deptChoices);
// console.log(deptChoices)



