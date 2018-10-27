const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./app/config');
const router = require('./app/router');

const app = express();

app.use(bodyParser.json());
app.set('port', config.port);

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.post('/', (req, res) => {
    res.send(req.body);
})

app.listen(app.get('port'), err => {
    if(err) console.log(err);
    console.log('Listening on port ', app.get('port'));
    const db = mongoose.connect(config.db, {useNewUrlParser: true});
    mongoose.connection.on('connected', () => {
        console.log(`Mongoose connected to ${config.db}`);
    });
});

router(app);