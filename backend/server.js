const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cars = require('./routes/cars');
const fileUpload = require('express-fileupload');

mongoose.connect('mongodb://127.0.0.1:27017/gallery', { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

app.use(fileUpload())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/gallery', cars);

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});