/// <reference types="cypress" />

describe('Dashboard', function(){

    it('mousehover', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       // cy.get('.mouse-hover-content').invoke('show')
       // cy.contains('Top').click()
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')

    })
})