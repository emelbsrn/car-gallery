const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CarSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    brand: {
        type: String
    },
    model: {
        type: String
    },
    imagePaths: {
        type: Array
    }
});

module.exports = mongoose.model('cars', CarSchema);