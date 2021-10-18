const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-site');
const generatePage = require('./src/page-template');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter Manager's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter Manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter your Employee ID",
            validate: idInput => {
                if (idInput) {
                    return true;
                }
                else {
                    console.log('Please enter your ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your email address",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please enter your ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "Enter your office number",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                }
                else {
                    console.log('Please enter your ID!');
                    return false;
                }
            }
        }
    ]);
};

const promptEmployees = teamData => {
    if (!teamData.employees) {
        teamData.employees = [];
    }
    console.log(`
        ==================
        Add a New Employee
        ==================
    `);
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add an employee to your team or finish?',
            default: true
        },
        {
            type: 'list',
            name: 'add',
            message: 'Add one',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter Employee's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter Employee's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter your Employee ID",
            validate: idInput => {
                if (idInput) {
                    return true;
                }
                else {
                    console.log('Please enter your ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your email address",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please enter your ID!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'addMore',
            message: 'Do you want to add more to your team?',
            default: true
        }
    ])
        .then(employeeData => {
            teamData.employees.push(employeeData);
            if (employeeData.addMore) {
                return promptEmployees(teamData);
            }
            else {
                return teamData;
            }
        });
};

promptManager()
    .then(promptEmployees)
    .then(teamData => {
        return generatePage(teamData);
    })
    .then(pageHtml => {
        return writeFile(pageHtml);
    })
    .then (writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile;
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    })