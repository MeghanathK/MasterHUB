Feature: Feature Description calculator screen

Scenario Outline: adding of 2 numbers

Given user navigated to "http://juliemr.github.io/protractor-demo/"
When  user enters <first_num> and <sec_num>
And clicked on go button
Then sum should be displayed as <Result>

Examples:
    | first_num | sec_num | Result |
    | 5          | 5        | 10    |
    |100            |250    |350    |   
    |2              |13      |15    |