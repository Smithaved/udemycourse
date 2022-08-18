beforeEach(function () {
    let productname
    cy.fixture("courceData").then(function (data) {
       productname=data.productName
    })
})