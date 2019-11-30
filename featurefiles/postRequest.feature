Feature: POST Request

  Scenario Outline: Post Request-response
    Given I launch the request url
    Then I verify the <statusCode> statuscode in the response
	And I verify the <userId> userid in the response
	
  Examples:
	| userId | statusCode |
	| 1      | 200        |