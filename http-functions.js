var https = require('https');

module.exports = function getHTML(options, cb) {
    
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
    
};

