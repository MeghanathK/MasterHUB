Feature: Feature Description calculator screen2

@feature2
Scenario: adding of 2 numbers indi1

Given user navigated to "http://juliemr.github.io/protractor-demo/"
When  user enters "20" and "30"
And clicked on go button
Then sum should be displayed as "50"

@feature2
@smoke
Scenario Outline: adding of 2 numbers indi2

Given user navigated to "http://juliemr.github.io/protractor-demo/"
When  user enters "1000" and "30"
And clicked on go button
Then sum should be displayed as "1030"