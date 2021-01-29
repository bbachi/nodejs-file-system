const { readdir } = require('fs');
const { join } = require('path');

readdir(join(__dirname, '../direc1'), (err, files) => {
    if(err) {
        console.log('Error:::', err)
    }
    console.log(files.length);
    console.log(files);
})