const path = require('path');
const os = require('os');
const fs = require('fs');
const logger =require('./logger');

//Path objects
var pathObj = path.parse(__filename);

console.log(pathObj);


//Computer info
var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log(`Total memory ${totalMem} and free memory ${freeMem}`);


//File system info
const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./', function(err, files) {
    if(err) console.log(`Error: ${error}`);
    else console.log(`Result: ${files}`);
});


//Start function
function sayHello(name) {
    console.log('Hello ' + name);
}

sayHello('Yoda');


//Import module
logger.log('a message');

//Module is global
//Every file is a module, variables and functions in that file are the scope of the module
console.log(module);