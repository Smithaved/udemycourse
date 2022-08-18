import HomePage from "../pageModules/course/home.page"
import ProductPage from "../pageModules/course/product.page"
describe("Generic methods",()=>{  
    const homepage=new HomePage()
    const productpage=new ProductPage()
    let productname
    before(function () {
        cy.fixture("courceData").then(function (data) {
           productname=data.productName
        })
    })
    it("Test14",()=>{
        cy.visit(Cypress.env('courseurl'))
        homepage.getShop().click()
        productname.forEach(element => {
            cy.selectProduct(element)
        });
       productpage.getCheckoutButton().click()
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
})
