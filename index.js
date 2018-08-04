// index.js
require('./app/index') //This is calling the app index module

//Lodash module. Note you don't add path adress unlike above
const _ = require('lodash')
_.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });
// → { ‘a’: 1, ‘b’: 2, ‘c’: 3 }