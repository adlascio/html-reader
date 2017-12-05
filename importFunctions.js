var https = require('https');

var getHTML = require('./http-functions');
//console.log(functions, typeof functions);

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

var allCaps = function (html) {
  console.log(html.toUpperCase());
};

getHTML(requestOptions, allCaps);