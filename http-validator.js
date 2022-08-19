const chalk = require('chalk');
const fetch = require('node-fetch')

function errHandling (err){
    throw new Error (err.message);
}


async function statusCheck (arrUrls){
    try {
        const statusArr = await Promise
            .all(arrUrls
                .map(arrUrl => Promise
                    .all(arrUrl
                        .map((async url => {
                            const res = await fetch(url);
                            return `${res.status} - ${res.statusText}`
                         })))));
        return statusArr; 
    }catch(err){
        errHandling(err);
    }finally{
        console.log(chalk.green("Finished operation\n"));
    }
}

function urlArrGenerator (arrLinks){
    let curr =0;
    let arrResult = [];

    while (curr<arrLinks.length){
        let arrCurr = arrLinks[curr];
        arrResult
            .push(arrCurr
                .map(objLink => Object
                    .values(objLink).join()))
    }
    return arrResult
}

function combineStatusLink (links, status){
    const l = links;
    const s = status;
    const linkPerFile = [];

    for (i = 0; i < links.length; i++){
        for (j = 0; j < links[i].length; j++){
            linkPerFile.push({url: l[i][j], status: s[i][j]});
        }
    }
    return linkPerFile;
}

async function validateUrl (arrLinks){
   const links = await urlArrGenerator(arrLinks);
   const statusLinks =  await statusCheck(links);
   return combineStatusLink (links, statusLinks);
}



module.exports = validateUrl;


// return arrLinks
// .map(link => link
//     .map(linkObj=> Object
//         .values(linkObj).join()));

// const results = Promise.all(arrLinks.map(arr => Promise.all(arr.map(async (object, i) => ({
//     ...await object, 
//     status: statusLinks[i]
//    })))));