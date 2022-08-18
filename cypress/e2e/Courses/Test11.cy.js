describe("Child Window",()=>{
    it("Test11",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#opentab").then(function (el) {
            const url=el.prop('href')
            cy.log(url)
            cy.visit(url)
        })
    })
})
