describe("Alert",()=>{
    it("Test7",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get("[value='Confirm']").click()
        cy.on('window:alert',(string)=>{
            expect(string).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm',(string)=>{
            expect(string).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})
