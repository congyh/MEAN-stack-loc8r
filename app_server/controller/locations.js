module.exports.locationInfo = function (req, res, next) {
    res.render("location-info", {"title": "Location Info"});
};

module.exports.addReview = function (req, res, next) {
    res.render("index", {"title": "add review"});
};

module.exports.homelist = function (req, res, next) {
  res.render("locations-list", {"title": "Home"})
};
