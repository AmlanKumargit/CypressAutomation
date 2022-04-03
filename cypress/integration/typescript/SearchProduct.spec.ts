import Homep from "../../support/PageObjects/Homep.command"

describe('Amazon', function(){
    const e = new Homep()

    before('navigation', function(){

        cy.fixture('example').then(function(data){

            this.data=data
        })
        
    })
    it('Login_Search-and-buy', function(){
    
        cy.visit('/')
        e.getSigninbox().click()
        cy.SignIn(this.data.number, this.data.password)
    
        //Assert logged in userprofile
        cy.get('#nav-link-accountList-nav-line-1').should('have.text','Hello, Amlan') 
        cy.get('#nav-link-accountList-nav-line-1').should('not.have.text','Hello, Sign in')
    
        //search_Autocomplete
        cy.get('#twotabsearchtextbox').type('One plus')
        cy.getOnePlus9Pro()// Select One Plus 9 pro
        cy.get('#twotabsearchtextbox').should('have.value', 'one pluse9 pro')
    
        //Select a Product
      //cy.get('[data-asin="B089MS8SKL"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .s-list-col-left > .sg-col-inner > .s-product-image-container > :nth-child(1) > .rush-component > .a-link-normal > .a-section > .s-image').invoke('removeAttr','target').click()
    })

})