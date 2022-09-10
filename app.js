var express = require('express');
var indexRouter = require('./routes/routes.js');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})