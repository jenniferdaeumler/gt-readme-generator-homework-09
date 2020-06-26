// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

## Description \n ${data.description}
<img src="https://img.shields.io/badge/license-MIT-green"/>
<img src="https://img.shields.io/badge/license-GPL-blue"/>
<img src="https://img.shields.io/badge/license-Apache-blue"/>
<img src="https://img.shields.io/badge/license-GPL-blue"/>

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)


## Installation \n ${data.installation}
## Usage \n  ${data.usage}
## License \n ${data.license} 
## Contributing \n ${data.contributing}
## Tests \n ${data.tests}
## Questions \n For questions related to this project, connect with me on GitHub at [GitHub](https://www.github.com/${data.username}). Or email me with questions at ${data.email}. 
`;
}

module.exports = generateMarkdown;


// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README