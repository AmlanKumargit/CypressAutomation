/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Dashboard', function(){

    it('ifrm', function(){
    
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.frameLoaded("#courses-iframe")
    cy.wait(4000)
    cy.iframe().find("a[href*='mentorship']").eq(2).click()
    cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

    })

})