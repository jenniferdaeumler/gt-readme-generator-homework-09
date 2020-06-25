// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

## Description \n ${data.description}
## Installation \n ${data.installation}
## Usage \n  ${data.usage}
## Credits \n ${data.credits}
## License \n ${data.license}
## License \n ${data.contributing}
## License \n ${data.tests}
## License \n ${data.questions}
`;
}

module.exports = generateMarkdown;
