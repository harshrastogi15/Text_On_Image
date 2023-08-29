const { parse } = require('csv-parse')
const config = require('../../config/path')
const fs = require('fs')
const filename = config.csvFile;
let data = []


const readDataFromCSV = () => {
    try {
        return new Promise((resolve, reject) => {
            fs.createReadStream(filename)
                .pipe(parse({ delimiter: ',' }))
                .on('data', (r) => {
                    data.push(r);
                })
                .on('end', () => {
                    resolve(data);
                    // return data;
                })
                .on('error', (err) => {
                    reject(err);
                })
        })
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    readDataFromCSV
}
