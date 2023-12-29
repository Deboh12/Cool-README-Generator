// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    // Generate and return the license badge markdown
    return `[![License](https://img.shields.io/badge/License-${license}-brightgreen.svg)](https://opensource.org/licenses/${license})`;
  }
  return '';
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    // Generate and return the license link markdown
    return `[License](https://opensource.org/licenses/${license})`;
  }
  return '';
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    // Generate and return the license section markdown
    return `This application is covered under the [${license} license](https://opensource.org/licenses/${license}).`;
  }
  return 'This application is not covered by any license.';
}

function generateMarkdown(data) {
  // Generate the overall README markdown
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  For any questions, please contact me:
  - GitHub: [${data.username}](https://github.com/${data.username})
  - Email: ${data.email}
`;
}

// Export the generateMarkdown function to make it available for use in other modules
module.exports = generateMarkdown;
