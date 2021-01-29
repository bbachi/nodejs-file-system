const { join } = require('path');
const fs = require('fs');

const readableStream = fs.createReadStream(join(__dirname, '../files/sample1.txt'), {encoding: 'utf8'});

readableStream.on('data', (data) => {
    console.log('Data Received   ', data);
})

readableStream.on('end', () =>  console.log("No more data!!!"));

readableStream.on('error', (err) => console.log('Error   ', err));