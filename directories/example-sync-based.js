const { readdirSync } = require('fs');
const { join } = require('path');

const files = readdirSync(join(__dirname, '../direc1'));

console.log(files)
console.log(files.length);