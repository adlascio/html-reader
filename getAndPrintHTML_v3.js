var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

function getAndPrintHTML(options) {
    
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
      console.log(html);
    });
  });
    
}

getAndPrintHTML(requestOptions);