var url = 'http://notrealsite.zz/log';

function log(message) {
    console.log(message);
}

//Makes this function globaly available

//export an object
module.exports.log = log;

//export the whole function
//module.exports = log;