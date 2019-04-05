const fs = require('fs');
const http = require('http');

console.log('1 - Start');

console.log('Before 2');
http.createServer((req, res) => {
  console.log('2 - http');
  res.end();
}).listen(7890);
console.log('After 2');

console.log('Before 3');
setTimeout(() => {
  console.log('3 - setTimeout');
}, 1000);
console.log('After 3');

console.log('Before 4');
fs.readFile('./1_callbacks.md', () => {
  console.log('4 - readFile');
});
console.log('After 4');

console.log('Before read sync');
fs.readFileSync('./1_callbacks.md');
console.log('After read sync');
