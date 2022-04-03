import Homep from "../../support/PageObjects/Homep.command"

describe('Amazon', function(){
    const e = new Homep()

    before('navigation', function(){

        cy.fixture('example').then(function(data){

            this.data=data
        })
        
    })
    it('Sign in_Email-already-in-use', function(){
        cy.visit('/')
        e.getSigninbox().trigger('mouseover')
        cy.contains('Start here.').click({force: true})
        cy.url().should('include','register')
    
        cy.get('#ap_customer_name').type(this.data.name)
        //cy.get('#ap_phone_number').type('9840755447')
        cy.get('#ap_email').type(this.data.email)
        cy.get('#ap_password').type(this.data.password)
        cy.get('#ap_password_check').type(this.data.password)
        cy.get('#continue').click()
        
        cy.get('.a-spacing-large > .a-box > .a-box-inner').should('contain.text','E-mail address already in use')
        cy.contains('Sign-In').click()
        cy.url().should('include','signin')
        
    })

})