var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

function getAndPrintHTML(options, cb) {
    
  html = '';
    
    
//  var result = [];
    
  https.get(options, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
//      result.push(data);
      html += data;
    });
        
    response.on('end', function() {
      console.log('Response stream complete.');
      return cb(html);
    });
  });
    
}


var myCallback = function (html) {
  console.log('html:', html);
};
getAndPrintHTML(requestOptions, myCallback);