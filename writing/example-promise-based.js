const { join } = require('path');
const { readFile, writeFile } = require('fs').promises;

const fileContent = readFile(join(__dirname, '../files/sample1.txt'), {encoding: 'utf8'});

fileContent
    .then(data =>  writeFile(join(__dirname, '../out/out2.txt'), data.toLowerCase()))
    .catch(err => console.log('Error  ', err))