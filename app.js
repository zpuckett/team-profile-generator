const inquirer = require("inquirer");
const fs = require("fs");
const style = require("./templates/css");


const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");


let goTeam = [];


function createTeam() {
    inquirer.prompt([
        {
            message: "Please write your team name:",
            name: "teamname"
        }
    ])
        .then(function (data) {
            const teamName = data.teamname
            goTeam.push(teamName)
            addManager();
        })

}

function addManager() {
    inquirer.prompt([
        {
            message: "What is your team manager's name?",
            name: "name"
        },
        {
            message: "What is your team manager's email address?",
            name: "email"
        },

        {
            type: "number",
            message: "What is your team manager's office number?",
            name: "officeNumber"
        },
    ])

        .then(function (data) {
            const name = data.name
            const id = 1
            const email = data.email
            const officeNumber = data.officeNumber
            const teamMember = new Manager(name, id, email, officeNumber)
            goTeam.push(teamMember)
            addMembers();
        });

}

function addMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["Yes, add engineer", "Yes, add intern", "No, my team is complete"],
            name: "addMemberData"
        }
    ])

        .then(function (data) {

            switch (data.addMemberData) {
                case "Yes, add engineer":
                    addEngineer();
                    break;

                case "Yes, add intern":
                    addIntern();
                    break;
                case "No, my team is complete":
                    generateTeam();
                    break;
            }
        });
}

function addEngineer() {
    inquirer.prompt([
        {
            message: "What is this engineer's name?",
            name: "name"
        },
        {
            message: "What is this engineer's email address?",
            name: "email"
        },
        {
            message: "What is this engineer's Github profile?",
            name: "github"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = goTeam.length + 1
            const email = data.email
            const github = data.github
            const teamMember = new Engineer(name, id, email, github)
            goTeam.push(teamMember)
            addMembers()
        });

};

function addIntern() {
    inquirer.prompt([
        {
            message: "What is this intern's name?",
            name: "name"
        },
        {
            message: "What is this intern's email address?",
            name: "email"
        },
        {
            message: "What is this intern's school?",
            name: "school"
        }
    ])

        .then(function (data) {
            const name = data.name
            const id = goTeam.length + 1
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            goTeam.push(teamMember)
            addMembers()
        });

};

function generateTeam() {

    const htmlArray = []
    const htmlBeginning = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${goTeam[0]}</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Graduate&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    ›<link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@300&family=Graduate&display=swap" rel="stylesheet">
    <style>
     ${style}
    </style>
</head>
<body>
    <div class="banner-bar">
        <h1>${goTeam[0]}</h1>
    </div>
    <div class="card-container">
    `
    htmlArray.push(htmlBeginning);

    for (let i = 1; i < goTeam.length; i++) {
        let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${goTeam[i].name}</h2>
                <h2>${goTeam[i].title}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${goTeam[i].id}</p>
                <p>Email: <a href="mailto:${goTeam[i].email}">${goTeam[i].email}</a>></p>
        `
        if (goTeam[i].officeNumber) {
            object += `
            <p>${goTeam[i].officeNumber}</p>
            `
        }
        if (goTeam[i].github) {
            object += `
            <p>GitHub: <a href="https://github.com/${goTeam[i].github}">${goTeam[i].github}</a></p>
            `
        }
        if (goTeam[i].school) {
            object += `
            <p>School: ${goTeam[i].school}</p>
            `
        }
        object += `
        </div>
        </div>
        `
        htmlArray.push(object)
    }

    const htmlEnd = `
    </div>
    </body>
    </html>
    `
    htmlArray.push(htmlEnd);

    fs.writeFile(`./output/${goTeam[0]}.html`, htmlArray.join(""), function (err) {

    })
}

createTeam();
