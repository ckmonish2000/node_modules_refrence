var fs=require('fs');
var path=require('path');


//create a folder

fs.mkdir(path.join(__dirname,'test'),{},function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("folder created");
    }
});


// create file and write

fs.writeFile(path.join(__dirname,'test','hello.js'),"hello man",err=>{
    if (err){
        console.log(err)
    }
    else{
        console.log("file created");
    }
}
);

// append file


fs.appendFile(path.join(__dirname,'test','hello.js'),"hello mannnnn",err=>{
    if (err){
        console.log(err)
    }
    else{
        console.log("file appended");
    }
}
);

// read file

fs.readFile(path.join(__dirname,'test','hello.js'),'utf8',(err,data)=>{
if(err) throw err;
console.log(data);
});

// rename


fs.rename(
    path.join(__dirname,'test','hello.js'),
    path.join(__dirname,'test','hello2.js'),(err)=>{
    if(err) throw err;
    console.log("renamed");
    });
    