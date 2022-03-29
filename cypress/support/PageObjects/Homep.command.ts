class Homep
{
    getSigninbox()
    {
        const newLocal = cy.get('#nav-link-accountList');
        return newLocal
    }
    getOrders()
    {
        return cy.get('#nav-orders')
    }
    getCountry()
    {
        return cy.get('#address-ui-widgets-countryCode-dropdown-nativeId')
    }
    getIndia()
    {
        return cy.get('#address-ui-widgets-countryCode-dropdown-nativeId_102')
    }
    getAddrbtn()
    {
        return cy.get('#address-ui-widgets-form-submit-button > .a-button-inner > .a-button-input')
    }
}
export default Homep;