$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TechFios_Login.feature");
formatter.feature({
  "line": 1,
  "name": "TechFios new bank account creation validation",
  "description": "",
  "id": "techfios-new-bank-account-creation-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-new-bank-account-creation-validation;1-user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on Bank \u0026 Cash",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on New Account",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user should land on new account page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user enters account title as \"\u003ctitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters description as \"\u003cdescription\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters initial balance as \"\u003cbalance\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters account number as \"\u003caccountnumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enters contact person as \"\u003ccontactperson\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enters phone number as \"\u003cphn\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user enters internet banking url as \"\u003curl\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user clicks on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user should get a message successfully account created",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "techfios-new-bank-account-creation-validation;1-user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "title",
        "description",
        "balance",
        "accountnumber",
        "contactperson",
        "phn",
        "url"
      ],
      "line": 27,
      "id": "techfios-new-bank-account-creation-validation;1-user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "hello",
        "Sample account",
        "23.07",
        "2323444",
        "Tania Rahman",
        "2323222226789",
        "http://bankofamerica.com"
      ],
      "line": 28,
      "id": "techfios-new-bank-account-creation-validation;1-user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on Techfios billing login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepsDefinition.user_is_on_Techfios_billing_login_page()"
});
formatter.result({
  "duration": 6634262100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-new-bank-account-creation-validation;1-user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on Bank \u0026 Cash",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on New Account",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user should land on new account page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user enters account title as \"hello\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters description as \"Sample account\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters initial balance as \"23.07\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters account number as \"2323444\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enters contact person as \"Tania Rahman\"",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enters phone number as \"2323222226789\"",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user enters internet banking url as \"http://bankofamerica.com\"",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user clicks on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user should get a message successfully account created",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepsDefinition.user_enters_username_as(String)"
});
formatter.result({
  "duration": 1201309300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepsDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 1117652200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinition.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 2554246600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 1049574800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinition.user_clicks_on_Bank_Cash()"
});
formatter.result({
  "duration": 1064634700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinition.user_clicks_on_New_Account()"
});
formatter.result({
  "duration": 1705784600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinition.user_should_land_on_new_account_page()"
});
formatter.result({
  "duration": 1013098600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hello",
      "offset": 30
    }
  ],
  "location": "LoginStepsDefinition.user_enters_account_title_as(String)"
});
formatter.result({
  "duration": 1143467200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sample account",
      "offset": 28
    }
  ],
  "location": "LoginStepsDefinition.user_enters_description_as(String)"
});
formatter.result({
  "duration": 1118529500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23.07",
      "offset": 32
    }
  ],
  "location": "LoginStepsDefinition.user_enters_initial_balance_as(String)"
});
formatter.result({
  "duration": 1096789000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2323444",
      "offset": 31
    }
  ],
  "location": "LoginStepsDefinition.user_enters_account_number_as(String)"
});
formatter.result({
  "duration": 1142995800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tania Rahman",
      "offset": 31
    }
  ],
  "location": "LoginStepsDefinition.user_enters_contact_person_as(String)"
});
formatter.result({
  "duration": 1163597700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2323222226789",
      "offset": 29
    }
  ],
  "location": "LoginStepsDefinition.user_enters_phone_number_as(String)"
});
formatter.result({
  "duration": 1162931100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://bankofamerica.com",
      "offset": 37
    }
  ],
  "location": "LoginStepsDefinition.user_enters_internet_banking_url_as(String)"
});
formatter.result({
  "duration": 1147696700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinition.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 1066115800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinition.user_should_get_a_message_successfully_account_created()"
});
formatter.result({
  "duration": 294222600,
  "status": "passed"
});
});