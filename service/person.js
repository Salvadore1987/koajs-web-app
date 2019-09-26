const mongoose = require('mongoose');

function _connect() {
    mongoose.connect('mongodb://localhost:27017/koa_db', {useNewUrlParser: true,  useUnifiedTopology: true}, err => {
        console.log(err);
    });
}

function _closeConnection() {
    mongoose.connection.close();
}

module.exports = {
    save: async (person) => {
        _connect();
        let p = await person.save();
        _closeConnection();
        return p;
    }
}