import Homep from "../../support/PageObjects/Homep.command"

describe('Amazon', function(){

    it('Login', function(){
        const e = new Homep() 
        cy.visit('/')
        e.getSigninbox().click()
        cy.SignIn('9840756827','Amlan@420')

        //Assert logged in userprofile
        cy.get('#nav-link-accountList-nav-line-1').should('have.text','Hello, Amlan') 
        cy.get('#nav-link-accountList-nav-line-1').should('not.have.text','Hello, Sign in')

        //search_Autocomplete
        cy.get('#twotabsearchtextbox').type('One plus')
        cy.get('.s-suggestion').each(($e1,index,$list)=>
        {
            if($e1.text().includes('9 pro'))
            {
                $e1.click()
            }
        })// Select One Plus 9 pro
        cy.get('#twotabsearchtextbox').should('have.value', 'one pluse9 pro')

        //Select a Product
      cy.get('[data-asin="B089MS8SKL"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .s-list-col-left > .sg-col-inner > .s-product-image-container > :nth-child(1) > .rush-component > .a-link-normal > .a-section > .s-image').invoke('removeAttr','target').click()
        

      

    })
})

