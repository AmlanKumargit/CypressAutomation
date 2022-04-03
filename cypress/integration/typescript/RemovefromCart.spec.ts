import Homep from "../../support/PageObjects/Homep.command"

describe('Amazon', function(){
    const e = new Homep()

    before('navigation', function(){

        cy.fixture('example').then(function(data){

            this.data=data
        })
        
    })
    it('Login_Remove-from-cart', function(){
    
        cy.visit('/')
        e.getSigninbox().click()
        cy.SignIn(this.data.number, this.data.password)//LOGIN
    
        cy.get('#nav-cart').click()

        cy.get('body').should('include.text','Shopping Cart')
        cy.url().should('include','cart')

        cy.removeProd(); // Remove product from the cart
        cy.get('body').should('include.text','was removed from Shopping Cart.')

        cy.get('#nav-hamburger-menu').click()
        cy.get('.hmenu-item').contains('Sign Out').click()//SIGNOUT
    })

})