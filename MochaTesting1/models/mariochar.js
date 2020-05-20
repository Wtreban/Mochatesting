const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const marioCharSchema = new Schema({
    name: String,
    weight: Number
})

const marioChar = mongoose.model('mariochar', marioCharSchema);

module.exports = marioChar;
