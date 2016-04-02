var page = require('webpage').create();
page.open('google_chart.html', function(status) {
  if (status !== 'success') {
        console.log('Unable to post!');
    }
  page.render('github.png');
  phantom.exit();
});