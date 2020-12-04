const readline = require('readline');
const fs = require('fs');

const readInterface = readline.createInterface({
    input: fs.createReadStream('1.csv'),
    output: process.stdout,
    console: false
});


const year = 2020;
const values = {};
readInterface.on('line', function(line) {
  
    values[year - line] = line;

    if (values[line]) {
      console.log('barbar')
      console.log(line * values[line])
    }
});
