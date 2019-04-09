const fs = require('fs');

const ws = fs.createWriteStream('./spot.json', {
  flags: 'ax'
});

// write a dog to spot.json in multiple chunks
ws.write('{');
ws.write('\n\t"name": "rover",');
ws.write('\n\t');
ws.write('"age": 10,');
ws.write('\n\t');
ws.write('"weight": "50 lbs"');
ws.write('\n');
ws.write('}');

ws.end();
