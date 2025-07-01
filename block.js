import fs from 'fs'
const data=fs.readFile('./myfile.txt','utf-8',(err,data)=>{
    if(err) throw err
    fs.writeFile('abc.txt',data,(err)=>{
        if(err) throw err
        console.log("file is created");
    })
})