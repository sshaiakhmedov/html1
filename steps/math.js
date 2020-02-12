const defineSupportCode = require('cucumber').defineSupportCode;

defineSupportCode(function({ Given, Then, When }) {
    Given('I start with {0}', function (int, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });
    When('I add {1}', function (int, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });
    Then('I end up with {int}', function (int, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });
});