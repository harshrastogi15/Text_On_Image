
const {readDataFromCSV} = require('./module/ReadFromCsv');
const { createCertificate } = require('./module/WriteOnCertificate');


let data = new Array();

async function parseData(){
    data =await readDataFromCSV();
    // console.log(data);
    for(let i in data){
        if(i==0){continue;}
        console.log(data[i]);
        await createCertificate(data[i][0],data[i][1]);
    }
}

parseData();
