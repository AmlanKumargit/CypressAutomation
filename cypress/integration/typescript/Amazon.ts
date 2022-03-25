/// <reference types="cypress" />

describe('Amazon', function(){

    it('Login', function(){
        cy.visit("https://www.amazon.in/")
        cy.SignIn("9840756827","Amlan@420")

    })
})


