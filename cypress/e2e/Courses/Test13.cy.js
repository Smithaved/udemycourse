describe("Hooks",()=>{
    let Name,Gender
    before(function () {
        cy.fixture("courceData").then(function (data) {
           Name=data.name
            Gender=data.gender
        })
    })
    it("Test13a",()=>{
        cy.visit("https://rahulshettyacademy.com/angularpractice")
        cy.get(':nth-child(1) > .form-control').type(Name)
        cy.get('select').select(Gender)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value',Name)
        cy.get(':nth-child(1) > .form-control').should('have.attr','minlength',2)
        cy.get('#inlineRadio3').should('be.disabled')
    })
})
