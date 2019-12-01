import {Given, When, Then} from 'cucumber';
const assert = require('assert');

Given(/^I launch the OpenCart application$/, function () {
    return driver.url('https://www.opencart.com/');	
});

Then(/^I verify the "([^"]*)" title on the page$/, function (keywords) {
	let title = driver.getTitle();
    return assert.equal(keywords, title);
});

When(/^I click on login$/, function () {
    return driver.findElement(By.className("btn btn-link navbar-btn")).click();
});

When(/^I enter email$/, function () {
    return driver.findElement(By.id("input-email")).sendKeys('opencart@gmail.com');
});

When(/^I enter password$/, function () {
    return driver.findElement(By.id("input-password")).sendKeys('password');
});

When(/^I click on login button$/, function () {
    return driver.findElement(By.className("btn btn-primary btn-lg hidden-xs")).click();
});

Then(/^I verify the error message$/, function () {
    return driver.wait(until.elementsLocated(By.className("alert alert-danger")), 10000);
});
