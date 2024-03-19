Feature: Verify Currency Pairs
  As a user,
  I want to verify that 162 currency pairs are returned by the API,
  So that I can ensure the completeness of the data.

  Scenario: Verify Currency Pairs Count
    Given the API is accessible
    When the user fetches the list of currency pairs
    Then the response should contain 162 currency pairs
