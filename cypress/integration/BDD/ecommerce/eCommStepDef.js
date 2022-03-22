import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../../cypress/support/PageObjects/HomePage';
import ProductsPage from '../../../../cypress/support/PageObjects/ProductsPage';
const h= new HomePage()  
const p= new ProductsPage() 
let name

Given('I open Ecommerce page',()=>{
    cy.visit(Cypress.env('url'))
})

When('I add items to the cart',function(){
        h.getShop().click()
        //add to cart
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        })
})

And('Validate the total price',()=>{
    p.getCheckout().click()
        //sum of product check
        var sum=0
        cy.get('tr td:nth-child(4) strong').each(($e1,index,$list)=>{
            const amount = $e1.text()
            var res = amount.split(" ")
            res=res[1].trim()
            sum=Number(sum)+Number(res)
        }).then(function(){
            cy.log(sum)
        })
        //compare if the total is equal to the sum displayed
             cy.get('h3 strong').then(function(element){
             const amount = element.text()
             var res = amount.split(" ")
             var total=res[1].trim()
             expect(Number(total)).to.equal(sum)
            
          })
})

Then('Select the country submit and verify Thankyou',()=>{
    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').check({force: true})
    cy.get('input[type="submit"]').click()
    cy.get('.alert').then(function(el){
    const t = el.text()
    expect(t.includes("Success!")).to.be.true
    })

})
//[name,gender],[Richie, male]
When('I fill the form details',function(dataTable){
    name=dataTable.rawTable[1][0]
    h.getEditBox().type(dataTable.rawTable[1][0])
    h.getGender().select(dataTable.rawTable[1][1])
})

And('Validate the form data',function(){
    h.getTwowayDatabinding().should('have.value',name)
    h.getEditBox().should('have.attr','minlength','2')
    h.getEnterpreneur().should('be.disabled')
})

Then('Select the Shop page',()=>{
    h.getShop().click()
})

