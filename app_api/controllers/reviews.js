/**
 * Created by yihao.cong@outlook.com on 16-12-13.
 */
var mongoose = require('mongoose');
var Location = mongoose.model('Location');

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.reviewsCreate = function (req, res, next) {
    sendJsonResponse(res, 200, {});
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
