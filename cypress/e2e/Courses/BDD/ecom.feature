Feature: End to End Ecom Validation

    application smoke

    Scenario: Ecom Product delivery
    Given I open Ecom Page
    When I add items to cart
    And Validate total price
    Then select the country submit and verify Thankyou