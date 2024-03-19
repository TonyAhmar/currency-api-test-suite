Feature: JSON Schema Validation
  As a user,
  I want to ensure that the API response matches the JSON schema,
  So that I can validate the structure and format of the response.

  Scenario: Verify JSON Schema
    Given the API is accessible
    When the user makes a request to the API
    Then the response should match the JSON schema
