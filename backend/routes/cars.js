const express = require('express');
const router = express.Router();
const Car = require('../models/Car');
const Brand = require('../models/Brand');

router.post('/cars', function (req, res) {
    const uploadFile = req.files.image;
    const newCar = new Car(req.body);
    console.log(req.files)
    for (var i=0; i< uploadFile.length; i++) {
        const imagePath = uploadFile[i].name;
        newCar.imagePaths[i] = imagePath
        uploadFile[i].mv(
            `${__dirname}/../../images/${imagePath}`,
            function (err, todos) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(todos);
                }
            }
        )
    }
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

router.get('/cars', function (req, res) {
    Car.find(function (err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

router.get('/cars/:_id', function (req, res) {
    
    Car.findById(req.params._id,
    function (err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

module.exports = router;