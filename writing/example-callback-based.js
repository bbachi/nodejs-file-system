const { join } = require('path');
const { readFile, writeFile } = require('fs');

readFile(join(__dirname, '../files/sample1.txt'), {encoding: 'utf8'}, (err, data) => {

    if(err) {
        console.log('Error  ', err)
    }

    writeFile(join(__dirname, '../out/out1.txt'), data.toUpperCase(), (err) => {
        if(err) {
            console.log('Error:::', err);
        }
    });
})