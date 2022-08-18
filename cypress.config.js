const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const nodePolyfills =
  require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
const { defineConfig } = require("cypress");
const xlsx=require("xlsx")
const fs=require("fs");
const { resolve } = require("path");

module.exports = defineConfig({
  projectId: 'hwxuik',
  e2e: {
    defaultCommandTimeout:8000,
    env:{
      courseurl:"https://rahulshettyacademy.com/angularpractice/"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
       addCucumberPreprocessorPlugin(on, config) // to allow json to be produced
  // To use esBuild for the bundler when preprocessing
  on(
    'file:preprocessor',
    createBundler({
      plugins: [nodePolyfills(), createEsbuildPlugin(config)],
    })
  )
  return config
      // on('task',{
      //   parseXlsx({filePath}){
      //     return new Promise((resolve,reject)=>{
      //       try{
      //         const jsonData=xlsx.parse(fs.readFileSync(filePath))
      //         resolve(jsonData)
      //       }
      //       catch(e){
      //         reject(e)
      //       }
      //     })
      //   }
      // })
    },
    specPattern: ["cypress/e2e/Courses/BDD/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"]
    // testFiles: "**/*.{feature,features}"
  },
  "reporter": 'mochawesome',
    "reporterOptions":{
      "reportDir":"cypress/report/mochawesome-report",
      "overwrite":true,
      "html":true,
      "json":true,
      "charts":true,
      "timestamp":"mmddyyyy_HHMMss"
    },
    
});
