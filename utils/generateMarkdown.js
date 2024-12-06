// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
      case 'MIT':
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      case 'Apache License 2.0':
        return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
      case 'GNU General Public License v3.0':
        return '![License](https://img.shields.io/badge/License-GNU%20GPL-blue)';
      case 'BSD 2-Clause "Simplified" License':
        return '![License](https://badgen.net/badge/BSD-2-Clause/license/green?icon=instgrame)';
      default:
        return '';
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
      case 'MIT':
        return 'https://opensource.org/license/MIT';
      case 'Apache License 2.0':
        return 'https://opensource.org/license/apache-2-0';
      case 'GNU General Public License v3.0':
        return 'https://opensource.org/license/gpl-3-0';
      case 'BSD 2-Clause "Simplified" License':
        return 'https://opensource.org/license/bsd-2-clause';
      default:
        return '';
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const lHead = `## License`;
  const lBody = `The License being used is the ${license}. If you wish to know more, follow this link. ${renderLicenseLink(license)}`;

  return license === '' ? lHead : `${lHead} \n ${lBody}`;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Dependencies](#dependencies)
  - [Questions](#questions)
  - [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.repoUse}

  ## Contributing
  ${data.repoCont}

  ## Tests
  ${data.tests}

  ## Dependencies
  ${data.dependencies}

  ## Questions
  If you have any questions contact me at ${data.email}. If you would like to see my GitHub Repository, then click my username here [(https://github.com/${data.user})]

  ${renderLicenseSection(data.license)} \n
  ${renderLicenseBadge(data.license)}
`;
}

export default generateMarkdown;


