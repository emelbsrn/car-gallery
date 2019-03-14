const express = require('express');
const router = express.Router();
const Car = require('../models/Car');
const Brand = require('../models/Brand');

router.post('/cars', function (req, res) {
    let uploadFile = req.files.image;
    const newCar = new Car(req.body);
    console.log(req.body)
    for (var i=0; i< uploadFile.length; i++) {
        console.log(uploadFile[i])
        uploadFile[i].mv(
            `${__dirname}/../images/${uploadFile[i].name}`,
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

module.exports = router;