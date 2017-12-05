var https = require('https');

var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

var lowerCase = function (html) {
  console.log(html.toLowerCase());
};

getHTML(requestOptions, lowerCase);