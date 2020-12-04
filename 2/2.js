const readline = require('readline');
const fs = require('fs');

function readLineAsync() {
  const readInterface = readline.createInterface({
    input: fs.createReadStream('2.csv'),
    output: null,
    console: false
  });

  return new Promise((resolve, reject) => {
    const values = [];
    readInterface.on('line', function (line) {
      values.push(parseInt(line));
    });

    readInterface.on('close', () => {
      resolve(values);
    })
  })
}

async function test() {
  const year = 2020;
  const values = await readLineAsync();
  const max = values.length;
  for (let i = 0; i < max; i++) {
    let iVal = values[i];
    for (let j = 0; j < max; j++) {
      let jVal = values[j];
      for (let k = 0; k < max; k++) {
        let kVal = values[k];
        if (iVal + jVal + kVal === 2020) {
          console.log(iVal * jVal * kVal)
        }
      }
    }
  }
}

test();
