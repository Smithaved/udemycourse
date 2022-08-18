describe("Radiobutton",()=>{
    it("Test5",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("[value='radio2']").check().should('be.checked')
       
    })
})