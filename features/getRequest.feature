Feature: GET Request

  Scenario Outline: Get Request-response
    Given I launch the request url with userid <userId>
    Then I verify the "<statusCode>" statuscode in the get call response
	And I verify the "<userId>" userid in the get call response
	
  Examples:
	| userId | statusCode |
	| 1      | 200        |
