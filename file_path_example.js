const { join, relative, resolve, parse } = require('path');

// Creating File Paths
console.log('File ', join(__dirname, 'files', 'sample.txt'));

console.log('File ', join(__dirname, 'files', 'files2', 'files3', 'files4', 'sample.txt'));

// Finding the relative paths between Absolute Paths
console.log('Relative Path  ', relative('/Users/bhargavbachina/Projects/nodejs/nodejs-file-system/file1.js', '/Users/bhargavbachina/Projects/nodejs/nodejs-file-system/files/sample1.txt'))

// Resolving the Path
console.log('Resolving the path', resolve('folder1', 'folder2', 'folder3'));

// Parsing the patsqa0h
console.log('Parsing the path', parse('/Users/bhargavbachina/Projects/nodejs/nodejs-file-system/file1.js'));