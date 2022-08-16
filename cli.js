const chalk = require('chalk');
const getFile = require ('./index');

const path = process.argv;

async function txtProcess (filePath){
    const result = await getFile(filePath[2]);
    console.log(chalk.yellow('lista de Links'), result);
}

txtProcess(path)