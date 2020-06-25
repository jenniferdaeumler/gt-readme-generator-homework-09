
// * The generated README includes 1 badge that's specific to the repository.

//require FS
//require inquire
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
    {
        type: "input",
        message: "What is your title?",
        name: "title",
    },
    {
        type: "input",
        message: "What is your description?",
        name: "description",
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "What are your instructions for use?",
        name: "usage",
    },
    {
        type: "input",
        message: "Who are your collaborators?",
        name: "credits",
    },
    {
        type: "list",
        message: "What is your licenses?",
        name: "license",
        choices: ["MIT", "GPL", "Apache License", "Mozilla Public License"],
    },
    {
        type: "input",
        message: "What are your contribution guidelines?",
        name: "contributing",
    },
    {
        type: "input",
        message: "What tests were ran?",
        name: "tests",
    },
    {
        type: "input",
        message: "What email should questions about your project be sent to?",
        name: "questions",
    },

]
function init() {
    inquirer.prompt(questions)
        .then(function (answer) {
            console.log(answer);

            //   var filename = data.name.toLowerCase().split(' ').join('') + ".json";
            fs.writeFile("sampleReadMe.md", generateMarkdown(answer), function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("Success!");
            });
        })};
        //function call to initlialize 
        init();

// array of questions for user

  // https://www.npmjs.com/package/inquirer#questions


// function to write README file
// function writeToFile(fileName, data) {
//   //Use the fs package
// }

// // function to initialize program
// function init() {
//   //use the inquirer package
// }

// // function call to initialize program
// init();

//Name sampleReadMe.md
