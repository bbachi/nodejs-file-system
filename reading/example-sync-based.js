const { join } = require('path');
const fs = require('fs');

const fileContent = fs.readFileSync(join(__dirname, '../files/sample1.txt'), {encoding: 'utf8'});

console.log('Contents   ', fileContent)