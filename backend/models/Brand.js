const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BrandSchema = new Schema({
    name: {
        type: String
    },
    models: {
        type: Array
    }
});

module.exports = mongoose.model('brands', BrandSchema);