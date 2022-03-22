Feature: End to End Ecommerce validation

    Application Regression

    Scenario: Ecommerce Product Delivery
    Given I open Ecommerce page
    When I add items to the cart
    And Validate the total price
    Then Select the country submit and verify Thankyou

    Scenario: Filling the form to shop
    Given I open Ecommerce page
    When I fill the form details
    |name | gender |  
    |Richie | Male |
    And Validate the form data
    Then Select the Shop page