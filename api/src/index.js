require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const port = process.env.PORT || 3001;
const cors = require('cors');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors({ credentials: true }));

app.use('/', routes);

app.listen(port, () => {
  console.log(`WisbooAPI running on port ${port}`);
})