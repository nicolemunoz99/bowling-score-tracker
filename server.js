const express = require ('express')
const app = express();
const port = 8765;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static('public'));

app.get(('/'))

app.listen(port, () => console.log('Server listening on port ' + port))