/**
 * Created by yihao.cong@outlook.com on 16-12-13.
 */
var mongoose = require('mongoose');
var Location = mongoose.model('Location');

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

var doSetAverageRating = function (location) {
    var reviewsLength,
        i,
        totalRating = 0;
    if (location.reviews && location.reviews.length > 0) {
        for (i = 0, reviewsLength = location.reviews.length; i < reviewsLength; i++) {
            totalRating += location.reviews[i].rating;
        }
        location.rating = totalRating / reviewsLength;
    }
    location.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Average rating updated to", location.rating);
        }
    });
};

var updateAverageRating = function (locationId) {
    Location.findById(locationId)
        .select("rating reviews")
        .exec(function (err, location) {
            if (!err) {
                doSetAverageRating(location);
            }
        })
};

var doAddReview = function (req, res, location) {
    if (!location) {
        sendJsonResponse(res, 404, {
            "message": "locationId not found."
        });
    } else {
        location.reviews.push({
            author: req.body.author,
            rating: req.body.rating,
            reviewText: req.body.reviewText
        });
        location.save(function (err, location) {
            var thisReview;
            if (err) {
                sendJsonResponse(res, 400, err);
            } else {
                updateAverageRating(location._id);
                thisReview = location.reviews[location.reviews.length - 1];
                sendJsonResponse(res, 201, thisReview);
            }
        })
    }
};

module.exports.reviewsCreate = function (req, res, next) {
    var locationId = req.params.locationId;
    if (locationId) {
        Location.findById(locatoinId)
            .select('reviews')
            .exec(function (err, location) {
                if (err) {
                    sendJsonResponse(res, 400, err);
                } else {
                    doAddReview(req, res, location);
                }
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "Not found, locationId required!"
        });
    }
};

module.exports.reviewsReadOne = function (req, res, next) {
    Location.findById(req.params.locationId)
        .select('name reviews')
        .exec(function (err, location) {
            sendJsonResponse(res, 200, location.reviews.id(req.params.reviewId));
        });
};

module.exports.reviewsUpdateOne = function (req, res, next) {
    res.send('测试put方法成功');
};

module.exports.reviewsDeleteOne = function (req, res, next) {
    res.send('测试delete方法成功');
};
