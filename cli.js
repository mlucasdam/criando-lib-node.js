#!/usr/bin/env node

const validateUrl = require('./http-validator')
const chalk = require('chalk');
const getFile = require ('./index');
const path = process.argv;

async function txtProcess (filePath){
    const result = await getFile(filePath[2]);
    if (path[3]==='validar'){
        console.log(chalk.yellow('links validados'), await validateUrl(result))
    }else{
        console.log(chalk.yellow('lista de Links'), result);
    }
}

txtProcess(path)