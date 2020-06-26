// function to generate markdown for README
// Badge added near top of ReadMe as instructions stated
function generateMarkdown(data) {
  return `# ${data.title} 
  \n<img src="https://img.shields.io/badge/license-${data.license}-green"/>

## Description \n ${data.description} 


## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)


## Installation \n ${data.installation}
## Usage \n  ${data.usage}
## License \n This project is licensed under the ${data.license}. 
## Contributing \n ${data.contributing}
## Tests \n ${data.tests}
## Questions \n For questions related to this project, connect with me on my account at [GitHub](https://www.github.com/${data.username}). Or email me with questions at ${data.email}. 
`;
}

module.exports = generateMarkdown;
