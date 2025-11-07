//fs.open( filename, flags, mode, callback )

const fs = require('fs');

fs.open('Hello.txt', 'r', function (err,fd){
    console.log("File Descriptor",fd);  
});

