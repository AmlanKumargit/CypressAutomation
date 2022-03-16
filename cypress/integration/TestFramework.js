/// <reference types="cypress" />

describe('Dashboard', function(){

    before('navigation', function(){

        cy.fixture('example').then(function(data){

            this.data=data
        })
        
    })

    it('home', function(){

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(1) > .form-control').type(this.data.name)
        cy.get('#exampleCheck1').click()
        cy.get('#exampleFormControlSelect1').select(this.data.gender)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
        cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get(':nth-child(2) > .nav-link').click()

       //declared the below command in support>>commands.js
        //array.forEach(myFunction);

        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        });
    })
})