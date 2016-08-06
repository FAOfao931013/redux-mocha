var exec = require('child_process').exec;

let path = process.argv[2] ? process.argv[2] : 'src/**/test/*.js';

const coverage = 'NODE_ENV=test babel-node ./node_modules/.bin/babel-istanbul cover _mocha -- ' + path + ' --compilers js:babel-register --recursive';

exec(coverage, function (error, stdout, stderr) {

    console.log(stdout);

    if (error) {
        console.log('exec error: ' + error);
    }
});
