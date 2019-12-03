module.exports = function () {
    this.When(/^I launch the OpenCart application$/, function () {
        driver.get('http://www.opencart.com/');
    });
    this.Then(/^I verify the "([^"]*)" title on the page$/, function (keywords) {
        driver.wait(until.elementsLocated(by.partialLinkText(keywords)), 10000);    
    });
    this.Then(/^I click on login$/, function () {
        driver.findElement(By.className("btn btn-link navbar-btn")).click();
    });
    this.Then(/^I enter email$/, function () {
        driver.findElement(By.id("input-email")).sendKeys('archana.kumari16@gmail.com');
    });
    this.Then(/^I enter password$/, function () {
        driver.findElement(By.id("input-password")).sendKeys('password123');
    });
    this.Then(/^I click on login button$/, function () {
        driver.findElement(By.className("btn btn-primary btn-lg hidden-xs")).click();
    });
    this.Then(/^I verify the error message$/, function () {
        driver.wait(until.elementsLocated(By.className("alert alert-danger")), 10000);
    });
};