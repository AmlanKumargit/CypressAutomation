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
    getDropdwn()
    {
        return  cy.get('#address-ui-widgets-addr-details-address-type-and-business-hours > .a-button-inner > .a-button-text')
    }
    getBestSellers()
    {
        return  cy.get('[href="/gp/bestsellers/?ref_=nav_cs_bestsellers"]')
    }
}
export default Homep;