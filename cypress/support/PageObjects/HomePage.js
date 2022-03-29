class HomePage
{
    getEditBox()
    {
        return cy.get(':nth-child(1) > .form-control')
    }
    getTwowayDatabinding()
    {
        return cy.get(':nth-child(4) > .ng-untouched')
    }
    getGender()
    {
        return cy.get('select')
    }
    getEnterpreneur()
    {
        return cy.get('#inlineRadio3')
    }
    getShop()
    {
        return cy.get(':nth-child(2) > .nav-link')
    }
    getAddrbtn()
    {
        return cy.get('#address-ui-widgets-form-submit-button > .a-button-inner > .a-button-input')
    }

}
export default HomePage;