Feature: API Response Time
  As a user,
  I want to ensure that the API response time is not less than 3 seconds,
  So that I can validate the performance of the API.

  Scenario: Verify API Response Time
    Given the API is accessible
    When the user makes a request to the API
    Then the response time should be less than 3 seconds
