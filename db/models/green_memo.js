const db = require('../database')

const memoSchema = new db.Schema({
    memo: String
});

module.exports = memoSchema