let hf = require('help-functions');
hf.fil.cmdConsLog(__dirname, __dirname + '/dir/index.js'); 

console.log('\nСОДЕРЖИМОЕ ФАЙЛА : ' + __dirname + '\\dir\\index.js\n' + gl_hr);

// hf.fil.fileToLog('path')
// console.log('БРАУЗЕР ОТКРОЕТСЯ - http://127.0.0.1:3000/index.html');
// var open = require("open");
// open("http://127.0.0.1:8080/?port=5858", "chrome", "firefox");

// var child_process = require('child_process');
// child_process.exec(__dirname + "/g.bat " + __dirname, function(error, stdout, stderr) {
//     console.log(stdout);
// });

// var log = require('./logger')(module);
// var hf = require('help-functions/functions/functions');
// log(hf.getFunctionName() + 'ТЕКСТ ЛОГА ');