const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname,'public')));
app.use('/node_modules',express.static(path.resolve(__dirname,'../../node_modules')));


app.listen(3000, function () {
  console.log('server on port 3000');
});
