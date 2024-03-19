Feature: USD to AED Conversion
  As a user,
  I want to fetch the USD price against the AED,
  So that I can ensure the price is in the range of 3.6 to 3.7.

  Scenario: Verify USD to AED Conversion
    Given the API is accessible
    When the user fetches the USD price against AED
    Then the price should be within the range of 3.6 to 3.7
