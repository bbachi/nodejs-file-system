const { join } = require('path');
const fs = require('fs');

fs.readFile(join(__dirname, '../files/sample1.txt'), {encoding: 'utf8'}, (err, data) => {

    if(err) {
        console.log('Error  ', err)
    }

    console.log(data);
})