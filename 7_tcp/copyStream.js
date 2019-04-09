const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md');
const ws = fs.createWriteStream('streams-copy.md');

rs
  .pipe(ws);

// rs.on('data', chunk => {
//   ws.write(chunk);
// });

// rs.on('end', () => {
//   ws.end();
// });
