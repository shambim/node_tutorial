const path=require('path')

console.log(path.sep)

//for geting the exact path
const filepath=path.join('/includes','subfolder','text.txt');
console.log(filepath)

console.log(path.basename(filepath))

const absolute=path.resolve(__dirname,'/includes','subfolder','text.txt')
console.log(absolute)