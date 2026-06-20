Feature: Login Functionality

  Scenario: Valid user can login
    Given I am on the login page
    #pre-condition: The user is on the login page
    When I login with username "standard_user" and password "secret_sauce"
    # Action: The user enters valid credentials and submits the login form
    Then I should be redirected to the dashboard
    # Expected outcome: The user is redirected to the dashboard

   Scenario Outline: Invalid user cannot login
    Given I am on the login page
    #pre-condition: The user is on the login page
    When I login with username "<username>" and password "<password>"
    # Action: The user enters invalid credentials and submits the login form
    #Then I should see an error message "<error_message>"
    # Expected outcome: An error message is displayed indicating invalid credentials

    Examples:
      | username       | password       | error_message                       |
      | invalid_user   | secret_sauce   | "Username and password do not match"|
      | standard_user  | wrong_password | "Username and password do not match"| 
          


