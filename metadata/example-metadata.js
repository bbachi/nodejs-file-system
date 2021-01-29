const { readdirSync, statSync, createWriteStream } = require('fs')
const { join } = require('path');

const files = readdirSync(join(__dirname, '../direc1'));

const writableStream = createWriteStream(join(__dirname, '../out/out5.txt'));

for (const file of files) {
    const fileStats = statSync(join(__dirname, '../direc1', file));
    const { atime, birthtime, ctime, mtime } = fileStats;
    const type = fileStats.isFile() ? 'File' : 'Directory';
    console.log(`${file} is ${type}`);
    console.log(`atime for the  ${file} is ${atime}`);
    console.log(`birthtime for the  ${file} is ${birthtime}`);
    console.log(`ctime for the  ${file} is ${ctime}`);
    console.log(`mtime for the  ${file} is ${mtime}`);

    // Writing to a file
    writableStream.write(`${file} is ${type}\n`);
    writableStream.write(`atime for the  ${file} is ${atime}\n`);
    writableStream.write(`birthtime for the  ${file} is ${birthtime}\n`);
    writableStream.write(`ctime for the  ${file} is ${ctime}\n`);
    writableStream.write(`mtime for the  ${file} is ${mtime}\n`);
}

writableStream.end("Done!!!");