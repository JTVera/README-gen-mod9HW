function renderLicenseBadge(answers) {
  let importBadge = ""
  if(answers.license ==="None"){
    importBadge = ""
    return importBadge;
  }else{
    return `![badge](https://img.shields.io/badge/license-${answers.license}-blue)<br />`
  }
}

function renderLicenseSection(answers) {
  if (answers.license === "None") {
    return "";
  } else {
    return   `${answers.license}`
    }
  }

function generateMarkdown(answers) {
  
  const licenseLinks = {
    MIT: "https://opensource.org/licenses/MIT",
    BSD3clause: "https://opensource.org/licenses/BSD-3-Clause",
    Apache2: "http://www.apache.org/licenses/LICENSE-2.0",
    GPLv3: "https://www.gnu.org/licenses/gpl-3.0.html",
    GPLv2: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.html",
    None: ""
  };
  answers.licenseLink = licenseLinks[answers.license];

  return `
# **${answers.title}**

## [${answers.user}](https://github.com/${answers.user}) 👋
___
${renderLicenseBadge(answers)}

 # Table of Contents 📒
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
___
  ## Description 
  ${answers.description}
___
  ## Installation 
  ${answers.installation}
___
  ## Usage 
  ${answers.usage}
___
  ## Contribution 
  ${answers.contribution}
___
  
  ## Tests  
  ${answers.tests}
  
___
  ## License 
[${renderLicenseSection(answers)}](${answers.licenseLink})
___
  ### Questions ❓
  Contact me with any additional questions:
  <br />
  💻 ${answers.email}
`

;
}

module.exports = generateMarkdown;