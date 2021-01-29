const { join } = require('path');
const { readFileSync, writeFileSync } = require('fs');

const fileContent = readFileSync(join(__dirname, '../files/sample1.txt'), {encoding: 'utf8'});

console.log('Contents   ', fileContent)

writeFileSync(join(__dirname, '../out/out3.txt'), fileContent.toUpperCase());