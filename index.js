const chalk = require ('chalk');
const fs = require ('fs');
const path = require('path')

function linkExtract (text){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s]*.[^\s]*)\)/gm
    const resultedArr = [];
    let temp;
    while((temp = regex.exec(text)) !== null){
       resultedArr.push({[temp[1]]:temp[2]}) 
    }
    return resultedArr.length === 0 ? 'Não há links' : resultedArr;
}


function errHandling (err){
    throw new Error(chalk.red(err.code, 'não há arquivo no diretorio'));
}

async function getFile (filePath){
    const enconding = 'utf-8';
    const absolutePath = path.join(__dirname, '.', filePath)
    
    try{
        const files = await fs.promises.readdir(absolutePath,{enconding});
        console.log('arquivos', files)
        return linkExtract(files);
    } catch(err){
        errHandling(err)
    }
}



// const txtErr = './arquivos/';
// const txtMarkdown = './arquivos/texto.md';

// getFile(txtMarkdown);
// // getFile(txtErr)

module.exports = getFile;














// function getFile (filePath){
//     const enconding = 'utf-8'
//     fs.readFile(filePath, enconding, (err,data) => {
//         if (err){
//             errHandling(err);
//         }
//         console.log(chalk.green(data));
//     })
// }

// function getFile(filePath){
//     const enconding = 'utf-8'
//     fs.promises
//     .readFile(filePath, enconding)
//     .then((data) => console.log(chalk.green(data)))
//     .catch((err) => errHandling(chalk.red(err)))
// }