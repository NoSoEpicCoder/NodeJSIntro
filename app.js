const logger =require('./logger');

function sayHello(name) {
    console.log('Hello ' + name);
}

sayHello('Yoda');

logger.log('a message');

//Module is global
//Every file is a module, variables and functions in that file are the scope of the module
console.log(module);