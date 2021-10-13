//inquire npm package to ask questions about team memebers & collect data
//use fs to write the data you collected to an html file

const inquirer = require("inquirer");
const fs = require("fs");

const allMembers = [];

inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: "input",
            name: managerName,
            message: "What is the manager's name"
        },
        {
            type: "input",
            name: managerId,
            message: "What is the manager's employee ID"
        },
        {
            type: "input",
            name: manageEmail,
            message: "What is the manager's email"
        },
        {
            type: "input",
            name: managerOfficeNumber,
            message: "What is the manager's office number"
        },
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        teamOptions();
        //create a manager Object from manager class
      //  const manager = new Manager()
        //push manager object to allMembers array
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });

function teamOptions() {
    inquirer.prompt([
        //create a list question 
        //Add Engineer
        //Add Intern
        //Finish building team
        {
            type: "list",
            name: "teamChoice",
            message: "What would you like to do?",
            choices: ["Add Engineer", "Add Intern", "Finish Building Team"]
        }
    ])

        .then(answers => {
            //If else or switch statement
            switch (answers.teamChoice) {
                case "Add Engineer":
                    // code block
                    createEngineer();
                    break;
                case "Add Intern":
                    // code block
                    break;
                case "Finish Building Team":
                    // code block
                    break;
                default:
                // code block
            }
        })
}

function createEngineer(){
    inquirer.prompt([
        {
            //question about engineer
        }
    ])
    .then(engineerAnswers =>{

    })
}

//create Intern function

//create finish building team function
//use allMembers array to construct an html block


//create a function
//each function is going to return an html block for that team memeber
//depending on which position
//add each html block to a string
//return that string at the end of the function
let htmlBlock = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    call the function, it will return that string here
    ${functionGoeshere}
</body>
</html>
`
//use fs to write the htmlBlock to the designated file



