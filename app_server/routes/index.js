var express = require('express');
var router = express.Router();
var ctrlLocations = require("../controller/locations");
var ctrlOthers = require("../controller/others");

/* GET home page. */
router.get('/', ctrlLocations.homelist);
router.get("/location", ctrlLocations.locationInfo);
router.get("/location/review/new", ctrlLocations.addReview);
router.get("/about", ctrlOthers.about);

module.exports = router;
