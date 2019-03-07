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
    imagePath: {
        type: String
    },
    image: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('cars', CarSchema);