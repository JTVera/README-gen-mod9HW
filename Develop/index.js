const fs = require('fs')
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown');
const markDown = require('./utils/generateMarkdown')

const questions = [
    {
        type: 'input',
        name: 'user',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe your Installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: "Describe your project's usage:",
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Describe your project's contribution guidelines:",
    },
    {
        type: 'input',
        name: 'tests',
        message: "Describe your project's tests:",
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose your project license',
        choices: ['BSD3clause','Apache2','MIT','GPLv3','GPLv2','None']
    },
];

function writeFile(){
    return inquirer.prompt(questions)
    .then((answers) => {
    const mark = generateMarkdown(answers)
        fs.writeFile('README.md', mark, err => {
        if (err){
            console.log('Error', err)
        }
        else {
            console.log("Generating README!")
            
        }
        
    } )
})
    .catch((err) => {
        console.log(err);

})
}

writeFile()