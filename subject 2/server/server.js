let express = require("express");
let app = express();
let bodyParser = require('body-parser');

let server = app.listen(9000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Adresse du serveur : http://localhost:9000", host, port);
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', express.static('public'))
