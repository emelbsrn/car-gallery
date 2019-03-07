const express = require('express');
const router = express.Router();
const Car = require('../models/Car');
const Brand = require('../models/Brand');
const fs = require('fs');
var multer = require('multer');

var upload = multer({
    dest: 'C:\\Users\\e.basaran\\Documents\\projects\\car-gallery\\images'
})

router.post('/cars', upload.single('image'), function (req, res) {
    const newCar = new Car(req.body);
    //newCar.image.data = fs.readFileSync(req.body.image[0].path);
    //newCar.image.contentType = req.body.image[0].mimetype;
    newCar.save()
        .then(() => {
            res.status(200).json({
                'car': 'car added successfully'
            });
        })
        .catch(() => {
            res.status(400).send('adding new car failed');
        });
});

router.get('/brands', function (req, res) {
    Brand.find(function (err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

module.exports = router;