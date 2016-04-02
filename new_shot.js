var webPage = require('webpage');
var page = webPage.create();
console.log('1');
page.setContent('<html><head></head><body><h1>HELLO</h1></body></html>', 'http://google.com');

page.open('onLoadFinished', function() {
      return page.render('mychart.png', function() {
        phantom.exit();
        return process.exit(0);
      });
    });