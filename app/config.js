const secret = require('../secret');

const config = {
    port: process.env.port || 3000,
    db: 'mongodb://localhost/myblog',
    test_port: 4242,
    //Put MongoDB URI here
    test_db: secret.db,
}

module.exports = config;