const express = require('express');
const router = express.Router();
const LocationService = require('../services/locationService');
const LocationController = require('../controllers/locationController');
const locationController = new LocationController(LocationService);

const multer = require('multer');
const upload = require("../middleware/multerSetup");


router.post('/upload', upload, locationController.uploadFile);

router.post('/location/create', locationController.createLocation);

router.get('/location/all', locationController.getAllLocations);

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = router;
