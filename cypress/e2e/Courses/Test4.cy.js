describe("Dropdowns",()=>{
    it("Test4",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //static dropdown
        cy.get('select').select('Option2').should('have.value','option2')
        //dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item > div').each(($el,index,$list)=>{
            if($el.text()==="India")
            {
                $el.click()
            }
        })
        cy.get('#autocomplete').should('have.value',"India")
    })
})