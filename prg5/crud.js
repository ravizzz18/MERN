const fs = require('fs');
const filename = 'data.txt';

fs.writeFileSync(filename,'This is the initial text.\n');
console.log('File Created.');

let content = fs.readFileSync(filename,'utf8');
console.log('Read Data : ',content);

fs.appendFileSync(filename,'This is the appended text.\n');
console.log('File updated.')

let updata = fs.readFileSync(filename,'utf8');
console.log('Updated Data : ',updata);

fs.unlinkSync(filename);
console.log('File DEleted.');