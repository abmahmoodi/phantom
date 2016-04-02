var webPage = require('webpage');
var page = webPage.create();
console.log('1');
page.open('http://abmahmoodi.koding.io:3000/generate_chart/create_chart', function(status) {
  console.log('2');
  if (status === "success") {
    page.includeJs('http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js', function() {
      console.log('3');
      // page.includeJs('https://www.gstatic.com/charts/loader.js', function() {
        console.log('4');
        page.render('github.png');
        console.log('OK');
        phantom.exit();
      // });
    });
  } else { console.log('ERROR') }
});