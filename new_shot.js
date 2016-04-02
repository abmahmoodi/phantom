var webPage = require('webpage');
var page = webPage.create();
console.log('1');

//page.setContent('<html><head></head><body><h1>HELLO</h1> <div id="chart_div"></div> </body></html>', 'http://google.com');

page.viewportSize = { width: 400, height: 400 };
page.content = '<html><head></head><body><h1>HELLO</h1> <div id="chart_div"></div> </body></html>';
  console.log('2');
  page.render('mychart3.png');
  console.log('3');
  phantom.exit();