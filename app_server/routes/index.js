var express = require('express');
var router = express.Router();
var ctrlLocations = require("../controller/locations")
var ctrlOthers = require("../controller/others")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index", {"title": "Express"});
});
router.get("/location", ctrlLocations.locationInfo);
router.get("/location/review/new", ctrlLocations.addReview)
router.get("/about", ctrlOthers.about)

module.exports = router;
