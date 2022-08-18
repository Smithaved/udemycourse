import 'cypress-iframe'
describe("Frames",()=>{
    it("Test12",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // cy.frameLoaded('#courses-iframe')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href='mentorship']").eq(0).click()
        cy.iframe().find("h1[class='pricing-title text-white ls-1']").should('have.length',2)
    })
})
