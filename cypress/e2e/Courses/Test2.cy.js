describe("Testing Courses",()=>{
    it("Test2",()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type('ca')
        cy.wait(2000)
        // cy.get(".product:visible").should('have.length',4)
        cy.get(".products").as('productLocators')
        // cy.get("@productLocators").find(".product").should('have.length',4)
        // cy.get("@productLocators").find(".product").eq(1).contains("ADD TO CART").click()
        cy.get("@productLocators").find(".product").each(($e1,$index,$list)=>{
            const textVeg=$e1.find(".product-name").text()
            if(textVeg.includes('Cashews'))
            {
                $e1.find("button").click()
            }
        })
        // cy.get(".brand").then(function(logo){
        //     cy.log(logo.text())
        // })
        cy.get(".cart-icon > img").click()
        cy.contains("PROCEED TO CHECKOUT").click()
        cy.contains('Place Order').click()
        })
    })
