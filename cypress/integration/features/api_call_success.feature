Feature: API Call Success and Status Check
  As a user,
  I want to ensure that the API call is successful and returns a valid price,
  So that I can verify the status code and status returned by the API response.

  Scenario: Verify API Call Success and Status Check
    Given the API is accessible
    When the user makes a request to the API
    Then the API call should be successful
    And the response status code should be 200
    And the response status should be SUCCESS
    And the returned price should be valid
