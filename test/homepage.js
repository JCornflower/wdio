var assert = require('assert');
var request = require('request');
describe('webdriver.io page', function(){
//    // before ( () =>{
//         browser.init();


//         browser.end();
//     })
    it('should have the right title', () =>{
        browser.url('/');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });

    describe('Api page',()=>{
        it('should have a link to the API page', () =>{
            browser.url('/');
            var hasApiLink = browser.isExisting('=API')
            //browser.isExisting('a[href = "/api.html"]')

            assert(hasApiLink);
        });

        it('should take an api page title', () =>{
            browser.url('/');
            browser.click('=API');

            var title = browser.getTitle();
            assert.equal(title, 'WebdriverIO - API Docs');
        });

        it('should filter search results', () =>{
            browser.url('/api.html');
            browser.setValue('input[name="search"]','debug');
            browser.saveScreenshot('api-with-result.png');
            //request.post("vrt-service.com", {});
        });
    });
});