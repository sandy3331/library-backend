const express = require('express');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));
app.listen(7200, () => {
  console.log(`Started at: 7200`);
});
app.use(express.urlencoded({ extended: false }));
app.use(require('./src/routes'));
// Routes

module.exports = app;
