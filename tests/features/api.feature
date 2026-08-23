Feature: User API

  Scenario: Get user by ID
    Given the API base url is set
    When I send a GET request to "/users/2"
    Then the response status should be 200
    And the response body should contain "email"

  Scenario: Create new user
    Given the API base url is set
    When I send a POST request to "/users" with body:
      | name | job   |
      | Neo  | Hacker |
    Then the response status should be 201
    And the response field "name" should equal "Neo"

  Scenario: User not found
    Given the API base url is set
    When I send a GET request to "/users/9999"
    Then the response status should be 404

