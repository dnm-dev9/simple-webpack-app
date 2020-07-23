require('!style-loader!css-loader!./style.css');
let laptops = require('./laptops.js');
let $ = require('jquery');

$.each(laptops, function(key, value){
  $('body').append('<h1>'+laptops[key].name+'</h1>')
});

console.log(laptops);
console.log(laptops[0].name);
