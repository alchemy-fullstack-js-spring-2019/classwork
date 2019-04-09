const fs = require('fs');

const ws = fs.createWriteStream('./spot.json');

// write a dog to spot.json in multiple chunks
ws.write('{');
ws.write('');
ws.write();
ws.write();
ws.write();

ws.end();
