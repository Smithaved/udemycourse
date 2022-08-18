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
      on('task',{
        parseXlsx({filePath}){
          return new Promise((resolve,reject)=>{
            try{
              const jsonData=xlsx.parse(fs.readFileSync(filePath))
              resolve(jsonData)
            }
            catch(e){
              reject(e)
            }
          })
        }
      })
    },
  },
  "reporter": 'mochawesome',
    "reporterOptions":{
      "reportDir":"cypress/report/mochawesome-report",
      "overwrite":true,
      "html":true,
      "json":true,
      "charts":true,
      "timestamp":"mmddyyyy_HHMMss"
    }
});
