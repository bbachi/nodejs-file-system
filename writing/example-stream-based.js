const { join } = require('path');
const { createReadStream, createWriteStream } = require('fs');

const readableStream = createReadStream(join(__dirname, '../files/sample1.txt'), {encoding: 'utf8'});

const writableStream = createWriteStream(join(__dirname, '../out/out4.txt'));

readableStream.on('data', (chunk) => {
    console.log('Data Received   ', chunk);
    writableStream.write(chunk);
})

readableStream.on('end', () =>  {
    console.log("No more data!!!")
    writableStream.end('Done!!');
});

readableStream.on('error', (err) => console.log('Error   ', err));





