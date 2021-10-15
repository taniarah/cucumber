Feature: TechFios new bank account creation validation 

Background:
	 Given User is on Techfios billing login page

Scenario Outline: 1 User should be able to login with valid credentials

	When User enters username as "<username>" 
	When User enters password as "<password>" 
	When User clicks on signin button 
	Then user should land on dashboard page 
	
	When user clicks on Bank & Cash
	When user clicks on New Account
	Then user should land on new account page
	
	When user enters account title as "<title>"
	When user enters description as "<description>"
	When user enters initial balance as "<balance>"
	When user enters account number as "<accountnumber>"
	When user enters contact person as "<contactperson>"
	When user enters phone number as "<phn>"
	When user enters internet banking url as "<url>"
	When user clicks on submit button 
	Then user should get a message successfully account created 
	Examples:
	|username|password|title|description|balance|accountnumber|contactperson|phn|url|
	|demo@techfios.com|abc123|hello|Sample account|23.07|2323444|Tania Rahman|2323222226789|http://bankofamerica.com|
