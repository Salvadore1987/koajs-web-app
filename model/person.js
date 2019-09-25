const mongoose = require('mongoose');

personSchema = mongoose.Schema({
    name: String,
    surname: String,
    age: Number
});

module.exports.Person = mongoose.model("Person", personSchema);