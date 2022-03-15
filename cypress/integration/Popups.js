/// <reference types="cypress" />

describe('Dashboard', function(){

    it('popups', function(){

    //hide-show buttons
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        //window event
        cy.on('window:alert',(str)=>{
           expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(str)=>{
           expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

    })
})