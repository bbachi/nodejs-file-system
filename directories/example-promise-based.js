const { readdir: readdirProm } = require('fs').promises;
const { join } = require('path');

async function read() {

    const files = await readdirProm(join(__dirname, '../direc1'));

    console.log('files   ', files);
    console.log('length   ', files.length);
}


read().catch(err => console.log(err));