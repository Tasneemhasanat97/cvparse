const express = require('express');

const router = express.Router();

const CvParse = require('../models/cvParse');

// Routes
router.get('/', (req, res,) => {

    CvParse.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', dataerror);
        });
});

router.post('/upload', (req, res) => {
    const data = req.body;
    
    const newCvParse = new CvParse(data);

    //.save
    
    newCvParse.save((error) => {
        if(error) {
            res.status(500).json({ msg: 'Sorry, internal server errors'});
            return;
        }
        // CvParse
        return res.json({
            msg: 'Your data has been saved!'
        });
    });
});

router.get('/name', (req, res) => {
    const data = {
        username: 'Shamim',
        age: 5
    };
    res.json(data);
});

module.exports = router;