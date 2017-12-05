var https = require('https');

var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

var reverse = function (html) {
  console.log(html.split(' ').reverse().toString());
};

getHTML(requestOptions, reverse);