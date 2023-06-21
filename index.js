var express = require('express');
var app = express();

app.use(express.json());

//GET
app.get('/api/v1/test', function (req, res) {
    console.log('GET Request');
    let results = { response: 'Hello World! Welcome to JP Learning :)' };
    return res.status(200).json(results);
});

//POST
app.post('/api/v1/test', function (req, res) {
    console.log('POST Request');
    console.log('POST req.body:', req.body);
    // let results = {response: req.body};
    let results = { response: 'Successfully POST :)' };
    return res.status(201).json(results);
});

// PUT
app.put('/api/v1/test/:id', function (req, res) {
    console.log('PUT Request');
    console.log('PUT req.body:', req.body);
    // let results = {response: req.body, id: req.params.id};
    let results = { response: 'Successfully PUT :)', id: req.params.id };
    return res.status(200).json(results);
});

// DELETE
app.delete('/api/v1/test/:id', function (req, res) {
    console.log('DELETE Request');
    // let results = {id: req.params.id};
    let results = { response: 'Successfully DELETE :)', id: req.params.id };
    return res.status(200).json(results);
});

app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


module.exports = app