// index.js
require('./app/index') //This is calling the app index module

//Lodash module. Note you don't add path adress unlike above
const _ = require('lodash')
_.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });
// → { ‘a’: 1, ‘b’: 2, ‘c’: 3 }

// starting http server
const express = require('express')
const app = express()
app.use((request, response, next) => {
console.log(request.headers)
next()
})
app.use((request, response, next) => {
request.chance = Math.random()
next()
})
app.get('/', (request, response) => {
response.json({
chance: request.chance
})
})
// app.get('/', (request, response) => {
//     throw new Error('oops')
//     })
//  app.use((err, request, response, next) => {
//         // log the error, for now just console.log
//       console.log(err)
//      response.status(500).send('Something broke!')
//     })
app.listen(3000)