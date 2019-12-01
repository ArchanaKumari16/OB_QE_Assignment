This is the sample webdriverIO (Selenium - Node.js/JavaScript) project which contains BDD cucumber js framework based automation sccripts and API automation scripts. Instead of writing complicated test code that only developers can understand, Cucumber maps an ordinary language to code and allows to start with the test process in the early stages of your product development.

Installation:
This project is tested on Node v8.0.0 and Above.
JDK 1.8: Install JDK 1.8+ and make sure class path is set properly. JAVA is require to start Selenium Server nothing else.
Node.JS: Install from the site - https://nodejs.org/en/ take the LTS version based on your Operating system. Please make sure you install NodeJS globally.
Once installation is done - open terminal (MAC OSX) or command prompt (for windows OS) and type below command to verify NodeJS has been installed properly.
    node --version
    npm --version
Above command should print out the version that you have installed.
Now navigate to the framework's package.json folder and run npm install to grab all dependencies.

Develop automation scripts:
You can write test by using Cucumber BDD framework. You can choose javascript based design pattern or ES6 based. This project is ES6 friendly (via babel-register)
Using Cucumber JavaScript framework
Tests are written in the Cucumber framework using the Gherkin Syntax. More about Gherkin & Cucumber can be found at https://cucumber.io/docs/reference
A typical test will look similar to this:

Feature: Performing a Google Search

    As a user on the Google search page
    I want to search for Selenium-Webdriver
    Because I want to learn more about it

    Background:

        Given I am on the search page

    Scenario: Performing a search operation
        When I enter "Selenium Webdriver" into the search box
        And  I click the search button
        Then I should see a list of search results

    Scenario Outline: Performing a search operation with passing test data as data table
        When I enter <searchItem> into the search box
        And  I click the search button
        Then I should see a list of search results

        Examples:
        |searchItem|
        |"Selenium Webdriver"|