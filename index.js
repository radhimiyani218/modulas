const fs=require('fs')
let opr=process.argv[2]
let FileName=process.argv[3]
let data=process.argv[4]

const write=()=>{
    fs.writeFile(FileName,data,(err)=>{
        if(err) throw err;
        console.log(`file is created:${FileName}with data:${data}`)
    });
}
const read=()=>{
    fs.readFile(FileName,"utf-8",(err,data)=>{
        if(err) throw err;
        console.log(`file is created:${FileName}with data:${data}`)
    });
}
const rename=()=>{
    let NewName=process.argv[4]
    fs.rename(FileName,NewName,(err)=>{
        if(err)throw err;
        console.log(`file is rename:${FileName}with data:${NewName}`)

    })

}
const del=()=>{
    fs.unlink(FileName,(err)=>{
        if(err) throw err;
        console.log(`file deleted:${FileName}with data deleted now`)
    });
}
const append =()=>{
    fs.appendFile(FileName,data,(err)=>{
        if(err)throw err
        console.log('Data appended to ${Filename};${data}');
    });
}
if(opr=="write"){
    write()
}
else if(opr=="read"){
    read()
}
else if(opr=="rename"){
    rename()
}
else if(opr=="remove"){
    del()
}
else if(opr=="append"){
    append()
}
else{
    console.log("invalid operation.Use'write','read','rename','remove',or'append'.");
}