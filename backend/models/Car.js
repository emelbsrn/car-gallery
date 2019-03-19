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
    year: {
        type: Number
    },
    price: {
        type: Number
    },
    fuelType: {
        type: String
    },
    drivingType: {
        type: String
    },
    milage: {
        type: Number
    },
    Color: {
        type: String
    },
    horsePower: {
        type: Number
    },
    imagePaths: {
        type: Array
    }
});

module.exports = mongoose.model('cars', CarSchema);