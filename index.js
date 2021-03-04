const express = require('express')
const app = express();
const bodyParser = require('body-parser')

const BaseController = require('./src/controllers/BaseController')

app.use(bodyParser.json());

app.listen(8000, () => {
  console.log('app listening on port 8000!')
});

app.post('/sum',
  BaseController.getASum
);

app.post('/product',
  BaseController.getAProduct
);

app.post('/power',
  BaseController.getAPower
);


module.exports = app;