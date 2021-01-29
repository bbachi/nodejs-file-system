const { join } = require('path');
const fs = require('fs').promises;

const fileContent = fs.readFile(join(__dirname, '../files/sample1.txt'), {encoding: 'utf8'});

fileContent
    .then(data =>  console.log(data))
    .catch(err => console.log('Error  ', err))