import fs from 'fs';
import path from 'path';
const data=fs.readFile(path.join(process.cwd(),"emp_data","data","emp","emp.json"),'utf-8',(err,data)=>{
    if(err) throw err
    console.log(typeof(data));
    let emp=JSON.parse(data);
    for(emp of emp){
        console.log(emp.name);






    }
})