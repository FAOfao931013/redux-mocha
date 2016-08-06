var exec = require('child_process').exec;
var colors = require('colors');

const path = process.argv[2] ? process.argv[2] : 'src/**/test/*.js';

const test = 'NODE_ENV=test mocha --require ignore-styles --compilers js:babel-register --recursive ' + path;

exec(test, function (error, stdout, stderr) {

    console.log(stdout.green);

    if (error) {
        console.log('exec error: ' + error);
    }
});
