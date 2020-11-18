'use strict';

const fs = require('fs');
const generatePage = require('./src/page-temp.js');
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;


fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);
  console.log('Portfolio Complete! Check out index.html to see the output!');
});