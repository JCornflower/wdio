var assert = require('assert');

describe('webdriver.io page', function(){
    it('should have the right title', () =>{
        browser.url('/');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
    });
});