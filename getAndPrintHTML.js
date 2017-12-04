var https = require('https');

function getAndPrintHTML(cb) {
    
  html = '';
    
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
    
//  var result = [];
    
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
//      result.push(data);
      html += data;
    });
        
    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(html);
      return cb(html);
    });
  });
    
}


var myCallback = function (html) {
  console.log('html:', html);
};
getAndPrintHTML(myCallback);