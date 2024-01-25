let fs = require('fs');
const { dirname } = require('path/win32');

fs.readFile('1234.txt', 'utf-8',  (err, data) => {
  if (err) throw err;
console.log(data)
 let result = data.split('').reverse().join('')

  fs.writeFile('111.txt', result , err => {
    if (err) throw err;

console.log('done')
let os = require('os')
console.log(os.type());
console.log(os.homedir());
  });
});