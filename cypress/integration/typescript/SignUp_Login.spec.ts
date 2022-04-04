import Homep from "../../support/PageObjects/Homep.command"

describe('Amazon', function(){
    const e = new Homep()

    before('navigation', function(){

        cy.fixture('signin').then(function(data){

            this.data=data
        })
        
    })
    it('Sign Up', function(){
        cy.visit('/')
        e.getSigninbox().trigger('mouseover')
        cy.contains('Start here.').click({force: true})
        cy.url().should('include','register')
    
        cy.get('#ap_customer_name').type(this.data.name)
        //cy.get('#ap_phone_number').type(this.data.number)
        cy.get('#ap_email').type(this.data.email)
        cy.get('#ap_password').type(this.data.password)
        cy.get('#ap_password_check').type(this.data.password)
        cy.get('#continue').click()
        
        cy.get('body').should('contain.text','Account created successfully')
        
    })

    it('Login', function(){
        cy.visit('/')
        e.getSigninbox().click()
        cy.SignIn(this.data.number, this.data.password)

        cy.get('body').should('contain.text','Hello, Amlan')


    })

})