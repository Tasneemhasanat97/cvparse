const mongoose = require('mongoose');


// Mongoose Schema

const Schema = mongoose.Schema;
const CvParseSchema = new Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now(),
    }
});

// Mongoose Model

const CvParse = mongoose.model('CvParse', CvParseSchema);

module.exports = CvParse;