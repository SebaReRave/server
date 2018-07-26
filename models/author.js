const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//kein Zugriff von Datenbank möglich, warum

const authorSchema = new Schema({
    name: String,
    age: Number
});

module.exports = mongoose.model('Author', authorSchema);
