var webPage = require('webpage');
var page = webPage.create();
console.log('1');

//page.setContent('<html><head></head><body><h1>HELLO</h1> <div id="chart_div"></div> </body></html>', 'http://google.com');

page.viewportSize = { width: 1920, height: 1080 };
page.open('<html><head></head><body><h1>HELLO</h1> <div id="chart_div"></div> </body></html>', function() {
  console.log('2');
  page.render('mychart2.png');
  console.log('3');
  phantom.exit();
});