
import Homep from "../../support/PageObjects/Homep.command"

describe('Amazon', function(){
    const e = new Homep()
    
    it('Login_Remove-from-cart', function(){
    
        cy.visit('/')
        e.getSigninbox().click()
        cy.SignIn('9840756827','Amlan@420')//LOGIN
    
        cy.get('#nav-cart').click()

        cy.get('body').should('include.text','Shopping Cart')
        cy.url().should('include','cart')

        cy.removeProd(); // Remove product from the cart
        cy.get('body').should('include.text','was removed from Shopping Cart.')

        cy.get('#nav-hamburger-menu').click()
        cy.get('.hmenu-item').contains('Sign Out').click()//SIGNOUT
    })
    
})

