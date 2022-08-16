const getFile = require ('./index');

const path = process.argv;

console.log(getFile(path[2]));