# Applitools Holiday Shopping Hackathon

Solution with Cypress 5.6.0 with npm and node js

## OS

This solution worked on Mac OS High Sierra 10.13.6

## Pre-requisites

- [Node](https://nodejs.org/en/download/) (14.13.1) and NPM (6.14.8)
- [IntelliJ IDEA](https://www.jetbrains.com/idea/download/#section=mac) or [Visual Studio Code](https://code.visualstudio.com/download)

## Libraries used

- Cypress (5.6.0) testing framework for writing the tests.
- JavaScript as the programming language.
- Mochawesome (6.2.1) for generating the test reports.
- Applitools Eyes to run the test using Applitools Ultrafast Grid.

## Getting started

To get started, please do the following:

1. Clone this github repo locally

2. `cd applitools-holiday-shopping-hackathon` if you are not on this directory

3. `npm i` to install all the project dependencies

4. Please export your `APPLITOOLS_API_KEY` as `export APPLITOOLS_API_KEY = <Your_key>` for Mac and `set
 APPLITOOLS_API_KEY = <Your_key>` for Windows. 

5. For testing V1, Dev branch and Final production versions of the AppliFashion application, I have created 3
 separate cypress.json files as `cypress_part1.json`, `cypress_part2.json`, `cypress_part3.json` respectively.

6. To include all the three tests inside a batch - Holiday Shopping, there is only 1 test as `AppliFashion_Test.js
` inside integration folder with 3 separate `it` blocks.

7. To run Part 1 of the Applitools test, execute `npm run test:part1`.

8. To run Part 2 of the Applitools test, execute `npm run test:part2`.

9. To run Part 3 of the Applitools test, execute `npm run test:part3`.

10. To generate mochawesome reports for Part 1 or Part 2 or Part 3, execute `npm run generate:html:report` after
 executing their respective npm run commands as mentioned in Steps # 6, 7, 8.
 
11. Reports can be made visible under `TestReport` folder that will get created post running `npm run generate:html
:report` command.

12. Part 1 and Part 2 are executed on Chrome browser (desktop size - 1200 * 800) only.

13. Part 3 is executed in below browsers and devices
- Chrome browser (desktop size - 1200 * 800)
- Firefox browser (desktop size - 1200 * 800)
- Edge Chromium browser (desktop size - 1200 * 800)
- Safari browser (desktop size - 1200 * 800)
- iPhone device (orientation - portrait)

## Bugs found in Dev-branch are

| Bug ID | Description                                      | Expected Result                                                                      | Actual Result                                                                                                                                            |
| ------ | :------------------------------------------------| :------------------------------------------------------------------------------------| :--------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Contacts is not correct                          | Contact information should be 155 Bovet Rd #600 San Mateo, CA 94402.                 | Contact information was coming as 911 Main St San Jose, CA 94402-4325.                                                                                   |
| 2      | Filtered Results are not correct                 | When user filters to view black shoes, there should only be 2 images displayed.      | All the products were getting displayed and Black color filter was not getting applied                                                                   |
| 3      | Layout of product description is not correct     | Orientation of Product description for Appli Air x Night product should be proper    | Since div#DIV__prodinfove__75.prod_info.version_2 > p#P____83 element is missing from the DOM of the product description page, orientation was incorrect |

### Reports

#### Part 1

Report can be found at: [Part 1 Applitools Dashboard](https://eyes.applitools.com/app/test-results/00000251795295247475/?accountId=VwI49rexjkKfa1Yh-t9yNw~~)

#### Part 2

RCA can be found in [RCA Applitools Dashboard](https://eyes.applitools.com/app/test-results/00000251795286789925/00000251795286784557/steps/1/edit?accountId=VwI49rexjkKfa1Yh-t9yNw~~&diff=eyJub2RlMSI6eyJ0b3AiOjY5MywibGVmdCI6MTUsIndpZHRoIjo1NzAsImhlaWdodCI6MTA1fSwibm9kZTFoYXNoIjotMTk0NjAxNDQ5Mywibm9kZTIiOnsidG9wIjo2NTcsImxlZnQiOjAsIndpZHRoIjo2MDAsImhlaWdodCI6MTEyN30sIm5vZGUyaGFzaCI6LTE4NTI3NDU1MTF9&mode=step-editor)

#### Part 3

Report can be found in [Part 3 Applitools Dashboard](https://eyes.applitools.com/app/test-results/00000251795286408490/?accountId=VwI49rexjkKfa1Yh-t9yNw~~)

## Author

Harsha Chandnani, Senior QA Consultant at ThoughtWorks.
