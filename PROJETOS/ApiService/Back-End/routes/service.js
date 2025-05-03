const express = require('express');
const router = express.Router();

const serviceController = require('../controllers/serviceController');


// Create a new service
router.post('/service', (req, res) => {
    res.json({message: 'Service created successfully'});
    });


module.exports = router;