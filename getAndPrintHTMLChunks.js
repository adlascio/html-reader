var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };


  /* Add your code here */
  https.get(requestOptions, function(data) {
    data.setEncoding('utf8');
    data.on('data', function (data) {
      console.log(data, '\n');
    });
    
    data.on('end', function() {
      console.log('Response stream complete.');
    });
  });
}

getAndPrintHTMLChunks();