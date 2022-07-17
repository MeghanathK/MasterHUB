Feature: validation of login functionlity

Scenario: login

Given user hits on the link "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
When user click on login button
And user click on customers menu
Then customes page appears
When user enters email "james_pan@nopCommerce.com" and click on search button
Then search result should be displayed




