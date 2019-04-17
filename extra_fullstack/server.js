require('dotenv').config();
require('./lib/utils/connect')();
const app = require('./lib/app');

app.listen(7890, () => {
  console.log('Listening on PORT 7890');
});
