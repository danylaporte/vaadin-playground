var bodyParser = require('body-parser');
var express = require('express');
var open = require('open');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/employees', function (req, res) {

    res.json({
        items: [
            { firstName: 'Dany', lastName: 'Laporte' },
            { firstName: 'Marco', lastName: 'Villeneuve' }
        ],
        count: 2
    });
});

app.get('/api/grid-settings/:grid-id/', function (req, res) {
    // TODO: Add support for grid persistance
});

app.post('/api/grid-settings:/grid-id', function (req, res) {
    // TODO: Add support for grid persistance
});

app.use(express.static('public'));

app.listen(3000, function () {
    open('http://localhost:3000');
    console.log('Example app listening on port 3000!');
});