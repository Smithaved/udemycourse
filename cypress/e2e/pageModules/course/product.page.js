class ProductPage{
    getTitleCard()
    {
        return cy.get('h4.card-title')
    }
    getAddToCartButton()
    {
        return cy.get('.btn.btn-info')
    }
    getCheckoutButton()
    {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
    getCheckOutBtn()
    {
        return cy.contains('Checkout')
    }
    getLocationTxtBox()
    {
        return cy.get('#country')
    }
    getSuggestionAnchor()
    {
        return cy.get('.suggestions > ul > li > a')
    }
    getCheckBox()
    {
        return cy.get(".checkbox")
    }
    getPurchaceButton()
    {
        return cy.get('.ng-untouched > .btn')
    }
    getAlertMsg()
    {
        return cy.get('.alert')
    }
    getPrice()
    {
        return cy.get("tr>td:nth-child(4)>strong")
    }
    getTotalAmount()
    {
        return cy.get("h3>strong")
    }
}
export default ProductPage