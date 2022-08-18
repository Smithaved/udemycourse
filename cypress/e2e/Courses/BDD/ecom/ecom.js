import {Given,When,Then, And} from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../../pageModules/course/home.page"
import ProductPage from "../../../pageModules/course/product.page"
Given('I open Ecom Page',()=> {
    cy.visit(Cypress.env('courseurl'))
})

When('I add items to cart',function (){
    const homepage=new HomePage()
    const productpage=new ProductPage()
    homepage.getShop().click()
    productname.forEach(element => {
        cy.selectProduct(element)
    });
   productpage.getCheckoutButton().click()
})

And('Validate total price',()=>{
    var sum=0
       productpage.getPrice().each(($el,index,$list)=>{
        const amount=$el.text();
        var res=amount.split(" ")
        res=res[1].trim()
        sum=Number(sum)+Number(res)
        
       })
       productpage.getTotalAmount().then(function (element) {
        const totalPrice=element.text()
        var total=totalPrice.split(" ")
        total=total[1].trim()
        expect(sum).to.equal(Number(total))
       })
})

Then('select the country submit and verify Thankyou',()=>{
    productpage.getCheckOutBtn().click()
       productpage.getLocationTxtBox().type('India')
       productpage.getSuggestionAnchor().click()
       productpage.getCheckBox().click()
       productpage.getPurchaceButton().click()
       productpage.getAlertMsg().then(function (element) {
        const actualText=element.text()
        expect(actualText.includes("Success! Thank you! Your order will be delivered in next few weeks :-).")).to.be.true
       })
})